import { configureStore } from '@reduxjs/toolkit';
import footerSlice from './footerSlice';
import loginSlice from './loginSlice';

export const store = configureStore({
    reducer: {
        footer: footerSlice,
        user: loginSlice,
    },
})