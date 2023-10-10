import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewModel } from "../../../types";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { deleteImage, getPathName, uploadImage } from "../../../constants";

type InitialState = {
  news: NewModel[];
  isFetching: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  news: [],
  isFetching: false,
  isLoading: false,
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
    news.image = await uploadImage(news.image, news.image.name);

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

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (news: any) => {
    try {
      if (news?.image) await deleteImage(news.image);
      await deleteDoc(doc(db, "news", news.id));
      return news;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

export const editNews = createAsyncThunk("news/editNews", async (news: any) => {
  try {
    // if we have image upload image for
    if (news.image) {
      news.image = await uploadImage(news.image, news.imageName);
    }

    const docRef = doc(db, "news", news.id);
    await updateDoc(docRef, news);

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
      state.news = [...state.news, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addNews.pending, (state) => {
      state.isLoading = true;
    });
    // delete dection
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      state.news = state.news.filter(
        (newsItem) => newsItem.id !== action.payload.id
      );
      state.isFetching = false;
    });
    builder.addCase(deleteNews.pending, (state) => {
      state.isFetching = true;
    });

    // Assuming you have a Redux toolkit reducer
    builder.addCase(editNews.fulfilled, (state, action) => {
      const editedNews = action.payload; // Assuming the action payload contains the edited news item

      // Find the index of the existing item with the same ID
      const index = state.news.findIndex(
        (newsItem) => newsItem.id === editedNews.id
      );

      if (index !== -1) {
        // Replace the existing item with the edited news item
        state.news[index] = editedNews;
      }

      state.isFetching = false;
    });

    builder.addCase(editNews.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default newsSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
