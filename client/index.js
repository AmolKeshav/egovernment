import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Main from './components/main';

ReactDom.render(<Provider store={store}><Main/></Provider>, document.getElementById('root'));
