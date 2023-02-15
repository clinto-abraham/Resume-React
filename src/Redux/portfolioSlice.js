import { createSlice } from '../Utils/exports'

const initialState = {
    modal: {
        open : false,
    }
}


export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        registerModalToggle: (state, action) => {
            state.modal.open = action.payload;
        },
    }
})

export const { registerModalToggle } = portfolioSlice.actions

export default portfolioSlice.reducer;