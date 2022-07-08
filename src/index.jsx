import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store';
import { Provider } from 'react-redux'
import './styles/coomon/globals/globals.css';
import RouterGlobal from './routes/Index';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterGlobal />
    </Provider>
  </React.StrictMode>
)