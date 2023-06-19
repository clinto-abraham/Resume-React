import { configureStore } from "@reduxjs/toolkit";
import footerSlice from "./footerSlice";
import loginSlice from "./loginSlice";
import navbarSlice from "./navbarSlice";
import portfolioSlice from "./portfolioSlice";
import subscribeSlice from "./subscribeSlice";

export const store = configureStore({
  reducer: {
    footer: footerSlice,
    user: loginSlice,
    portfolio: portfolioSlice,
    navbar: navbarSlice,
    subscribe: subscribeSlice,
  },
});
