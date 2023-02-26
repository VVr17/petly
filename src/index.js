import ReactDOM from 'react-dom/client';
import React from 'react';
import App from 'components/App/App';
import { theme } from 'constants/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { persistor, store } from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/pet-support-front">
          <ThemeProvider theme={theme}>
            {/* <ModalProvider backgroundComponent={SpecialModalBackground}> */}
            <App />
            {/* </ModalProvider> */}
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
