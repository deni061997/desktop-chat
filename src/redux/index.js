import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { contacts } from './contacts';
import { messages } from './messages';
import { profile } from './profile';
import { application } from './application';

const reducer = combineReducers({
  contacts,
  messages,
  profile,
  application,
});

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(reducer, applyMiddleware(thunk, logger));
