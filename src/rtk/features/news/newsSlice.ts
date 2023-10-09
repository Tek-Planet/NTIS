import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewModel } from "../../../types";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type InitialState = {
  news: NewModel[];
  isFetching: boolean;
};

const initialState: InitialState = {
  news: [],
  isFetching: false,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  let news: any = [];
  try {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      var item = doc.data();
      item.id = doc.id;
      news.push(item);
    });
    return news;
  } catch (error) {
    return news;
  }
});

export const addNews = createAsyncThunk("news/addNews", async (news: any) => {
  try {
    // if upload file if any
    const storageRef = ref(storage, `/files/${news.image.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, news.image);

    const snapshot = await uploadTask;

    // Get the download URL after the upload is complete
    const imageurl = await getDownloadURL(snapshot.ref);

    news.image = imageurl;

    // You can now use `imageurl` for further processing or store it in your Redux state
    const docRef = await addDoc(collection(db, "news"), news);
    news.id = docRef.id;

    // Assuming you want to return `imageurl` as the result of the async action
    return news;
  } catch (e) {
    console.error("Error adding document: ", e);
    // You might want to handle the error here or rethrow it.
    throw e;
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // ordered: (state) => {
    //   state.numOfIcecreams--;
    // },
    // restocked: (state, action: PayloadAction<number>) => {
    //   state.numOfIcecreams += action.payload;
    // },
  },
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(
      fetchNews.fulfilled,
      (state, action: PayloadAction<NewModel[]>) => {
        state.news = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchNews.pending, (state) => {
      state.isFetching = true;
    });

    // adding news cases

    builder.addCase(addNews.fulfilled, (state, action) => {
      state.news = [...initialState.news, action.payload];
      state.isFetching = false;
    });
    builder.addCase(addNews.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export default newsSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
