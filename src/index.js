import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './index.css';
import App from "./App"
import Segunda from './components/Segunda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/next" element={<Segunda/>}/>
    <Route path="*" element={<div> errorPAge</div>}/>
    </Routes>
  </BrowserRouter>
);

