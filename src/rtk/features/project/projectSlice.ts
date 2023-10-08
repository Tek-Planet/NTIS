import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewModel } from "../../../types";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { uploadImage } from "../../../constants";

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
  "news/fetchProjects",
  async () => {
    let projects: any = [];

    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
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

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching new case
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<NewModel[]>) => {
        state.projects = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchProjects.pending, (state) => {
      state.isFetching = true;
    });

    // adding project cases

    builder.addCase(addProject.fulfilled, (state, action) => {
      state.projects = [...initialState.projects, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addProject.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default projectSlice.reducer;
