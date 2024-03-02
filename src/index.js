import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'; 
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
     <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
     
        
          <App />
          </Suspense>
           </Provider>
      </PersistGate>
   
    </BrowserRouter>
  </React.StrictMode>
);