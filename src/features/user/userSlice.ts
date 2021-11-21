import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@/src/store/store";

export interface UserState {
  user: null | any;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  user: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action: PayloadAction<number>) => {
      state.user += action.payload;
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export const selectCount = (state: AppState) => state.user;

export default userSlice.reducer;
