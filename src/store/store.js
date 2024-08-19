import { legacy_createStore } from 'redux';
import { appReducer } from './appReducer.js';

export const store = legacy_createStore(appReducer);
