import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { DEFAULT, LOCATION } from 'constants/index';
import { axiosClient } from 'helper/axiosClient';

import Accordions from 'Components/Accordion';
import AuthLayout from 'Components/layer/auth';
import Form from 'Components/Form-Class';
import NonAuthLayout from 'Components/layer/nonAuth';
import CarouselPage from 'pages/carousel';
import CartEmployeePage from 'pages/cardEmployee';
import CartManagerPage from 'pages/cardManager';
import HomePage from 'pages/home';
import LoginPage from 'pages/login';
import NotFoundPage from 'pages/404';
import RegisterPage from 'pages/register';
import PlayListPage from 'pages/musicPlayer';
import ProductListPage from 'pages/product';
import TodoPage from 'pages/todo';

import './App.css';

function App() { // = Home Page
  const navigate = useNavigate();

  const token = window.localStorage.getItem(DEFAULT.TOKEN);

  const handleLogout = () => {
    window.localStorage.clear(token)
  }

  useEffect(() => {
    if (token) {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATION.LOGIN);
    }
  }, [navigate, token]);

  return (
    <>
      {!token
        ? (
          <Routes>
            <Route path={LOCATION.HOME} element={<NonAuthLayout />} >
              <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
              <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
            </Route>
          </Routes>
        ) : (
          <>
          <Routes>
            <Route path={LOCATION.HOME} element={<AuthLayout />} >
              <Route index element={<HomePage />} />
              <Route path={LOCATION.IMAGE} element={<CarouselPage />} />
              <Route path={LOCATION.PRODUCT} element={<ProductListPage />} />
              <Route path={LOCATION.PLAY_LIST} element={<PlayListPage />} />
              <Route path={LOCATION.CART_EMPLOYEE} element={<CartEmployeePage />} />
              <Route path={LOCATION.CART_MANAGER} element={<CartManagerPage />} />
              <Route path={LOCATION.BUTTON_ACCORDION} element={<Accordions />} />
              <Route path={LOCATION.FORM} element={<Form />} />
              <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
              <Route path={LOCATION.TODO} element={<TodoPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <button onClick={handleLogout}>Log out</button>
          </>
        )
      }

    </>

  );
}

export default App;