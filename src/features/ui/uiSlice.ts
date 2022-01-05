import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./uiState";


export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    collapsedMenu: (state, { payload }: PayloadAction) => {
        console.log(!state.isCollapsed)
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { collapsedMenu } = uiSlice.actions;
export default uiSlice.reducer;
