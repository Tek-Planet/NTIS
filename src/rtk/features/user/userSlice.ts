import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState, LoginModel } from "../../../types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auths } from "../../../firebase";

const initialState: UserState = {
  token: "",
  authenticated: false,
  loading: true,
  user: {},
  activeMenu: true,
  screenSize: 0,
};

// Generates pending, fulfilled and rejected action types
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body: LoginModel) => {
    try {
      var res = await signInWithEmailAndPassword(
        auths,
        body.UserName,
        body.Password
      );

      return res.user;
    } catch (error: any) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    authenticateUser: (state, action) => {
      if (action.payload) {
        state.authenticated = true;
        state.user = action.payload;
      }
      state.loading = false;
    },

    logoutUser: (state) => {
      state.authenticated = false;
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
    });
  },
});

export default userSlice.reducer;
export const { logoutUser, authenticateUser, setActiveMenu, setScreenSize } =
  userSlice.actions;
