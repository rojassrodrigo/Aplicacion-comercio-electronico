import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from './redux/store'
// import {Provider} from 'react-redux'

// ReactDOM.render(
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();