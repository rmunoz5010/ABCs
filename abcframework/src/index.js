import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './App';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
