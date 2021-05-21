import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContextProvider} from "./components/capstone/Context"

//for redux
import {Provider} from "react-redux"
import store from "./redux/ReduxInReact"


ReactDOM.render(
  // <ContextProvider>
  ////for react router
  //   <Router>
  //     <App />
  //   </Router>
  // </ContextProvider>, 

  //for react redux 
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
