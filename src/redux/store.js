import { configureStore } from '@reduxjs/toolkit';
import footerSlice from './footerSlice';

export const store = configureStore({
    reducer: {
        footer: footerSlice,
    },
})