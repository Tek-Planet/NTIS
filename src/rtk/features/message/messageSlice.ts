import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageModel } from "../../../types";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase";

type InitialState = {
  messages: MessageModel[];
  isFetching: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  messages: [],
  isFetching: false,
  isLoading: false,
};

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async () => {
    let message: any = [];
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var item = doc.data();
        item.id = doc.id;
        message.push(item);
      });
      return message;
    } catch (error) {
      return message;
    }
  }
);

export const addMessage = createAsyncThunk(
  "message/addMessage",
  async (message: MessageModel) => {
    try {
      await addDoc(collection(db, "messages"), message);

      return { message: "success" };
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

export const deleteMessage = createAsyncThunk(
  "message/deleteMessage",
  async (message: any) => {
    try {
      await deleteDoc(doc(db, "message", message.id));
      return message;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(
      fetchMessages.fulfilled,
      (state, action: PayloadAction<MessageModel[]>) => {
        state.messages = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchMessages.pending, (state) => {
      state.isFetching = true;
    });

    // adding message cases

    builder.addCase(addMessage.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addMessage.pending, (state) => {
      state.isLoading = true;
    });
    // delete section
    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.messages = state.messages.filter(
        (messageItem) => messageItem.id !== action.payload.id
      );
      state.isFetching = false;
    });
    builder.addCase(deleteMessage.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export default messageSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
