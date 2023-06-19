import { createSlice } from "../utils/commons";

const initialState = {
  drawerOpen: false,
  tabIndex: 2,
  sideNavbarOpen: false,
  darkMode: false,
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
    registerSideNavbarToggle: (state, action) => {
      state.sideNavbarOpen = action.payload;
    },
    registerDarkModeToggle: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {
  registerDrawerOpen,
  registerTabIndex,
  registerSideNavbarToggle,
  registerDarkModeToggle,
} = navbarSlice.actions;

export default navbarSlice.reducer;
