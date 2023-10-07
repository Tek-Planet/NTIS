import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewModel } from "../../../types";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase";

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
    const querySnapshot = await getDocs(collection(db, "news"));
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
  },
});

export default newsSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
