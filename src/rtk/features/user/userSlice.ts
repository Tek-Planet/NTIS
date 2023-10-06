import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState, LoginModel } from "../../../types";

const initialState: UserState = {
  token: "",
  error: undefined,
  authError: "",
  authenticated: false,
  loading: true,
  currency: "$",
  currentRoute: "General",
  loadingUI: false,
};

// Generates pending, fulfilled and rejected action types
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (body: LoginModel) => {
//     const response = await axios.post(`${AUTH_BASE_URL}login`, body);
//     if (response.data) {
//       // set axios heade
//       await setHeaders(response.data.token);
//       await storeAuthToken(response.data);
//       await storeUserName(body.UserName);
//     }
//     return response.data;
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    logoutUser: (state) => {},
  },
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;
