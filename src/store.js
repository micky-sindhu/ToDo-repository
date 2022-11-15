import {createStore} from 'redux';
import { todoReducer } from './redux/reducer';

export const store = createStore(todoReducer)