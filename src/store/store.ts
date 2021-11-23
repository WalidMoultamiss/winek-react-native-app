import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
