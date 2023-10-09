import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewModel } from "../../../types";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { uploadImage } from "../../../constants";

type InitialState = {
  technology: NewModel[];
  isFetching: boolean;
  isLoading: boolean;
  categoty: string;
};

const initialState: InitialState = {
  technology: [],
  isFetching: false,
  isLoading: false,
  categoty: "",
};

export const fetchTechnology = createAsyncThunk(
  "technology/fetchTechnology",
  async () => {
    let technology: any = [];

    try {
      const q = query(collection(db, "technology"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        var item = doc.data();
        item.id = doc.id;
        technology.push(item);
      });

      return technology;
    } catch (error) {
      console.log(error);
      return technology;
    }
  }
);

export const addTechnology = createAsyncThunk(
  "technology/addTechnology",
  async (technology: any) => {
    try {
      if (technology.image)
        technology.image = await uploadImage(
          technology.image,
          technology.image.name
        );

      // You can now use `imageurl` for further processing or store it in your Redux state
      const docRef = await addDoc(collection(db, "technology"), technology);
      technology.id = docRef.id;

      // Assuming you want to return `imageurl` as the result of the async action
      return technology;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(
      fetchTechnology.fulfilled,
      (state, action: PayloadAction<NewModel[]>) => {
        state.technology = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchTechnology.pending, (state) => {
      state.isFetching = true;
    });

    // adding technology cases

    builder.addCase(addTechnology.fulfilled, (state, action) => {
      state.technology = [...initialState.technology, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addTechnology.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default technologySlice.reducer;
