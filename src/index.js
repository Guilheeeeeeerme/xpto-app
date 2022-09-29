import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomeRoute } from './routes/home/home.route';
import { LoginRoute } from './routes/login/login.route';
import { OrcamentosRoute } from './routes/orcamentos/orcamentos.route';
import { ServicosRoute } from './routes/servicos/servicos.route';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeRoute />} />
        <Route path="home" element={<HomeRoute />} />
        <Route path="servicos" element={<ServicosRoute />} />
        <Route path="orcamentos" element={<OrcamentosRoute />} />
        <Route path="login" element={<LoginRoute />} />
        <Route path="*" element={<HomeRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
