import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandle: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutHandle: (state) => {
      state.user = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginHandle, logoutHandle } = AuthSlice.actions;
export default AuthSlice.reducer;
