import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//code here 
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<Provider store={store}>

<App />

</Provider>

);



