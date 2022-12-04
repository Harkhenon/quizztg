import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import store from '@js/store';
import App from '@js/containers/App';

import 'semantic-ui-css/semantic.min.css';
import '@sass/app.scss';

function Entry() {
  return (
    <Router>
      <Provider store={store}>
        <App />
        <ToastContainer
          pauseOnFocusLoss={false}
          limit={2}
          autoClose={3000}
        />
      </Provider>
    </Router>
  );
}

export default Entry;
