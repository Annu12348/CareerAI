import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
}

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setClear: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setClear } = AuthSlice.actions;
export default AuthSlice.reducer;