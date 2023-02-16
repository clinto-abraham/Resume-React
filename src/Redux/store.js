import { configureStore } from '@reduxjs/toolkit';
import footerSlice from './footerSlice';
import loginSlice from './loginSlice';
import navbarSlice from './navbarSlice';
import portfolioSlice from './portfolioSlice';

export const store = configureStore({
    reducer: {
        footer: footerSlice,
        user: loginSlice,
        portfolio: portfolioSlice,
        navbar: navbarSlice
    },
})