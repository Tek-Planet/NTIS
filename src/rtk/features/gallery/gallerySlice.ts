import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GalleryModel } from "../../../types";
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
import { deleteImage, uploadImage } from "../../../constants";

type InitialState = {
  gallery: GalleryModel[];
  isFetching: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  gallery: [],
  isFetching: false,
  isLoading: false,
};

export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async () => {
    let gallery: any = [];

    try {
      const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var item = doc.data();
        item.id = doc.id;
        gallery.push(item);
      });

      return gallery;
    } catch (error) {
      console.log(error);
      return gallery;
    }
  }
);

export const addGallery = createAsyncThunk(
  "gallery/addGallery",
  async (gallery: any) => {
    try {
      if (gallery.image)
        gallery.image = await uploadImage(gallery.image, gallery.image.name);

      // You can now use `imageurl` for further processing or store it in your Redux state

      const docRef = await addDoc(collection(db, "gallery"), gallery);
      gallery.id = docRef.id;

      // Assuming you want to return `imageurl` as the result of the async action
      return gallery;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

export const deleteGallery = createAsyncThunk(
  "gallery/deleteGallery",
  async (gallery: any) => {
    try {
      if (gallery?.image) await deleteImage(gallery.image);
      await deleteDoc(doc(db, "gallery", gallery.id));
      return gallery;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(
      fetchGallery.fulfilled,
      (state, action: PayloadAction<GalleryModel[]>) => {
        state.gallery = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchGallery.pending, (state) => {
      state.isFetching = true;
    });

    // adding project cases

    builder.addCase(addGallery.fulfilled, (state, action) => {
      state.gallery = [...state.gallery, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addGallery.pending, (state) => {
      state.isLoading = true;
    });

    // delete section
    builder.addCase(deleteGallery.fulfilled, (state, action) => {
      state.gallery = state.gallery.filter(
        (galleryItem) => galleryItem.id !== action.payload.id
      );
      state.isFetching = false;
    });
    builder.addCase(deleteGallery.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export default gallerySlice.reducer;
