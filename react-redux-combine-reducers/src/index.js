import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './with-React-Redux/redux/store';
// import AppContextProvider from './without-React-Redux/context/AppContextProvider';
// import { store } from './without-React-Redux/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <AppContextProvider store={store}> */}
    <App />
    {/* </AppContextProvider> */}
  </Provider>
);