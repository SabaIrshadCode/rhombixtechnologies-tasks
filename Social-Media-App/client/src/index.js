import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      {/* this will allow the app to access all slices present in store and access the global state at any place in App */}
    <BrowserRouter>
    {/* enables client-side routing with clean URLs in React apps */}
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


