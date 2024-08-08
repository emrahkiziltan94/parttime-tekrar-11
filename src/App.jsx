import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import Header from './components/Header';

import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Products from './components/Products';
import PrivateRoute from './components/PrivateRoute';

const initialForm = {
  name: '',
  email: '',
};
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialForm, mode: 'onChange' });

  return (
    <>
      <header>
        <Header />
      </header>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </PrivateRoute>

      </Switch>
    </>
  );
}

export default App;
