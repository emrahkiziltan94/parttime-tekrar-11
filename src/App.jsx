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

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </>
  );
}

export default App;
