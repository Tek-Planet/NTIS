import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashBoardModel } from "../../../types";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type InitialState = {
  dashboardItem: DashBoardModel;
  isFetching: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  dashboardItem: {} as DashBoardModel,
  isFetching: false,
  isLoading: false,
};

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async () => {
    console.log("dispathcing dashboard");
    let dashboard: any = [];
    try {
      const querySnapshot = await getDocs(collection(db, "dashboard"));
      querySnapshot.forEach((doc) => {
        var item = doc.data();
        item.id = doc.id;
        dashboard.push(item);
      });
      console.log(dashboard, "dashboard");
      return dashboard[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const updateDashboard = createAsyncThunk(
  "dashboard/updateDashboard",
  async (dashboard: any) => {
    try {
      // if upload file if any
      if (dashboard.image) {
        const storageRef = ref(storage, `/files/${dashboard.imageName}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, dashboard.image);

        const snapshot = await uploadTask;

        // Get the download URL after the upload is complete
        const imageurl = await getDownloadURL(snapshot.ref);

        dashboard.image = imageurl;
      }

      const dofRef = doc(db, "dashboard", dashboard.id);

      await updateDoc(dofRef, dashboard);

      return dashboard;
    } catch (e) {
      console.error("Error adding document: ", e);
      // You might want to handle the error here or rethrow it.
      throw e;
    }
  }
);

const dashBoardSlice = createSlice({
  name: "dashboard",
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
      fetchDashboard.fulfilled,
      (state, action: PayloadAction<DashBoardModel>) => {
        state.dashboardItem = action.payload;
        state.isFetching = false;
      }
    );
    builder.addCase(fetchDashboard.pending, (state) => {
      state.isFetching = true;
    });

    // adding dashboard cases

    builder.addCase(updateDashboard.fulfilled, (state, action) => {
      state.dashboardItem = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateDashboard.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default dashBoardSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
