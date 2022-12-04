import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom/client';
import '@sass/app.scss';
import axios from 'axios';
import Entry from '@js/Entry';

window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

ReactDOM.createRoot(document.getElementById('root')).render(<Entry />);
