import React from 'react';
import ReactDOM from 'react-dom';
import { router, RouterProvider } from './Utils/exports';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

