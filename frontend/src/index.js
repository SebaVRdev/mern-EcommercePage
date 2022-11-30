import React from 'react';
import ReactDOM from 'react-dom/client';
//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

//Manejo tittle page
import {HelmetProvider} from 'react-helmet-async';

//Provider para el Cart
import {StoreProvider} from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App/>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);


