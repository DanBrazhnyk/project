import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Pages/login/Login';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Home component', () => {
  const mockStore = configureStore();
  const initialState = {
    login: {
      isLogined: false,
      emailValue: "",
      passwordValue: "",
      email: ["james@gmail.com"],
      password: ["12345A"],
      foundPassword: "",
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders profile information', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const FormControlLabel = screen.getByText('Remember me');
    expect(FormControlLabel).toBeInTheDocument();

    const emailAddress = screen.getByText('Email Address');
    expect(emailAddress).toBeInTheDocument();

    const Password = screen.getByText('Password');
    expect(Password).toBeInTheDocument();
  });

  it('renders buttons', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const SignIn  = screen.getByText('Sign In');
    expect(SignIn).toBeInTheDocument();

    const forgotPassword = screen.getByText('Forgot password?');
    expect(forgotPassword).toBeInTheDocument();

    const signUp = screen.getByText("Don't have an account? Sign Up");
    expect(signUp).toBeInTheDocument();
  });
});
