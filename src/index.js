import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import store from './redux/configureStore';
import App from './App';
import 'tw-elements';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
);
