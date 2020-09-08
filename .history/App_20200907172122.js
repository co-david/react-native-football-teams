import React, { useEffect } from 'react';
import Routes from './Routes';
import SplashScreen from 'react-native-splash-screen'
// import { createStore, applyMiddleware } from 'redux';
// import allReducer from './app/reducers';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';

// const store = createStore(
//    allReducer,
//    applyMiddleware(thunkMiddleware),
// );



const App = () => {
  useEffect(() => {
    // SplashScreen.hide();
  })

  return (
    <Routes />
  );
};

export default App;