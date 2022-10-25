import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App_router from './App_router';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename = {process.env.PUBLIC_URL}>
    {/* <App_router /> */}
    <App />
  </BrowserRouter>
);

{/* React.StrictMode : 앱 내의 잠재적인 문제를 알아내기 위한 도구
개발 중에만 적용 */}