import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
// import Table from './components/Table';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// var appname ="Devconf";
// const banner = ReactDOM.createRoot(document.getElementById('banner'));

// // let obj = {border:"2px solid orange", backgroundColor:lightblue};


// banner.render(
//     <React.StrictMode>
//       {/* <h1 className='alert alert-danger'>Hello World {appname.toLowerCase()}</h1> */}
//       <img className='img-fluid' style={{border:"3px solid red"}} src={logo} onClick={()=>{alert('hello')}}/>
//     </React.StrictMode>
// );

// const news = ReactDOM.createRoot(document.getElementById('news'));

// // news.render(
// //   <React.StrictMode>
// //     <Table/>
// //     </React.StrictMode>
// // );





