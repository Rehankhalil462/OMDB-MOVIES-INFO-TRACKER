import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';

// const name = 'Rehan khalil'
// const currdate= new Date().toLocaleDateString();
// const currtime= new Date().toLocaleTimeString();
// <React.Fragment>
     //<h1>My name is {name} </h1>,
     //<p> todays date is {currdate}</p>
   //  <p> todays time is {currtime}</p> 
 // </React.Fragment> 
ReactDOM.render(

  <App/>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
