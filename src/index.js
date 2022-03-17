import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/routers/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css'




ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// store.dispatch(getBlogsFromDatabase()).then(()=>{
//     ReactDOM.render(result, document.getElementById('root'));
// })