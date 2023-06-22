import { createSlice } from "../utils/commons";

const initialState = {
  email: "",
  showModal: false,
  //   user: {
  //     accessToken: "",
  //     displayName: "",
  //     email: "",
  //     emailVerified: false,
  //     isAnonymous: true,
  //     phoneNumber: null,
  //     photoURL: "",
  //     providerId: "firebase",
  //     tenantId: null,
  //     uid: "",
  //   },
};

export const subscribeSlice = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    registerUserSubscribe: (state, action) => {
      state.email = action.payload;
    },
    registerModalToggle: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { registerUserSubscribe, registerModalToggle } =
  subscribeSlice.actions;

export default subscribeSlice.reducer;
