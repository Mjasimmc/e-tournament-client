import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideBarProvider from './store/sidebarContext.jsx'

import { GoogleOAuthProvider,GoogleLogin     } from '@react-oauth/google';

import { Provider } from 'react-redux';
import { store } from './store/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store)
const CLIENT_ID = "559162904390-pcl8aehqe39t3ahki8ciguj1cqp1m4h3.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SideBarProvider>
            <App />
          </SideBarProvider>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
)
