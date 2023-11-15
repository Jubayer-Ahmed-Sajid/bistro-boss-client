import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProviders/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
