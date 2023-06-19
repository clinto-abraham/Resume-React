import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
// import { SnackbarProvider } from 'notistack';
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        {/* <SnackbarProvider maxSnack={3}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </SnackbarProvider> */}
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
