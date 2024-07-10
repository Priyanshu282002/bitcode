import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  RecoilRoot,
} from 'recoil';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </RecoilRoot>
  
  
);


