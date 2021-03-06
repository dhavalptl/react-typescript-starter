import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Uncomment if pwa is require then 

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

if (process.env.NODE_ENV === 'development' && module.hot) {
   console.log(process);
   module.hot.accept();
}