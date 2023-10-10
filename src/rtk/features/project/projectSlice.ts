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
import { deleteImage, uploadImage } from "../../../constants";

type InitialState = {
  projects: NewModel[];
  isFetching: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  projects: [],
  isFetching: false,
  isLoading: false,
};

export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async () => {
    let projects: any = [];

    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        var item = doc.data();
        item.id = doc.id;
        projects.push(item);
      });

      return projects;
    } catch (error) {
      console.log(error);
      return projects;
    }
  }
);

export const addProject = createAsyncThunk(
  "project/addProject",
  async (project: any) => {
    try {
      if (project.image)
        project.image = await uploadImage(project.image, project.image.name);

      // You can now use `imageurl` for further processing or store it in your Redux state
      const docRef = await addDoc(collection(db, "projects"), project);
      project.id = docRef.id;

      // Assuming you want to return `imageurl` as the result of the async action
      return project;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (project: any) => {
    try {
      if (project?.image) await deleteImage(project.image);
      await deleteDoc(doc(db, "projects", project.id));
      return project;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

export const editProject = createAsyncThunk(
  "news/editProject",
  async (news: any) => {
    try {
      // if we have image upload image for
      if (news.image) {
        news.image = await uploadImage(news.image, news.imageName);
      }

      const docRef = doc(db, "projects", news.id);
      await updateDoc(docRef, news);

      // Assuming you want to return `imageurl` as the result of the async action
      return news;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isFetching = false;
    });
    builder.addCase(fetchProjects.pending, (state) => {
      state.isFetching = true;
    });

    // adding project cases

    builder.addCase(addProject.fulfilled, (state, action) => {
      state.projects = [...state.projects, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addProject.pending, (state) => {
      state.isLoading = true;
    });
    // delete section
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter(
        (projectItem) => projectItem.id !== action.payload.id
      );
      state.isFetching = false;
    });
    builder.addCase(deleteProject.pending, (state) => {
      state.isFetching = true;
    });

    // edit section
    builder.addCase(editProject.fulfilled, (state, action) => {
      const editedProject = action.payload; // Assuming the action payload contains the edited news item

      // Find the index of the existing item with the same ID
      const index = state.projects.findIndex(
        (projectItem) => projectItem.id === editedProject.id
      );

      if (index !== -1) {
        // Replace the existing item with the edited news item
        state.projects[index] = editedProject;
      }

      state.isFetching = false;
    });

    builder.addCase(editProject.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default projectSlice.reducer;
