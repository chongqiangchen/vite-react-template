import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { GlobalContextProvider } from './context/global-context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
