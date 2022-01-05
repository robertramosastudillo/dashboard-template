import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export interface UiState {
  isUi: boolean;
}

export const initialState: UiState = {
    isUi: false,
};

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
export const uiSelector = (state: RootState) => state.ui;
export default uiSlice.reducer;
