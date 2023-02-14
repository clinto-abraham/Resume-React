import React from 'react';
import { RouterProvider, createBrowserRouter } from './Utils/exports'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './Redux/store';
import './Styles/index.css'
import App from './App';
import ErrorPage from './Pages/NotFound';
import PrivacyPolicy from './Pages/Privacy-Policy';
import TermsConditions from './Pages/Terms&Conditions';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-&-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsConditions />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider >
  </React.StrictMode >,
)
