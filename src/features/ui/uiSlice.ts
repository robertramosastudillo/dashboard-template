import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./uiState";


export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAuthSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.isUi = payload;
    },
  },
});

export const { setAuthSuccess } = uiSlice.actions;
export default uiSlice.reducer;
