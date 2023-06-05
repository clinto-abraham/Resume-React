import { createSlice } from "../utils/exports";

const initialState = {
  drawerOpen: false,
  tabIndex: 2,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    registerDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    registerTabIndex: (state, action) => {
      state.tabIndex = action.payload;
    },
  },
});

export const { registerDrawerOpen, registerTabIndex } = navbarSlice.actions;

export default navbarSlice.reducer;
