import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './components/redux/reducers/Reducer';
import {store, persistor } from './components/redux/store';


import Home from './components/Home/home';
import MultiSelect from './components/common/MultiSelect';
import SignUp from './components/signup/signup';
import mobileSignUp from './components/signup/mobileSignUp'
import Login from './components/Login/login'
import astroregistration from './components/astroregistration/astroregistration';


// const store = createStore(
//   rootReducer,
  
//   );

const routes = [
  {
    path: '/',
    exact: true,
    main: Login,
    component: Login
  },
  {
    path: "/signup",
    main: SignUp,
    component: SignUp
  },
  {
    path: "/astroRegistration",
    main: astroregistration,
    component: astroregistration
  },
  {
    path: "/mobileSignUp",
    main: mobileSignUp,
    component: mobileSignUp
  },
  {
    path: "/home",
    main: Home,
    component: Home
  }
]
class App extends Component {

  render() {
    return (

      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  main={route.main}
                  component={route.component}
                />
              ))}
            </Router>
          </PersistGate>
        </Provider>
      </div>

    );
  }
}

export default App;
