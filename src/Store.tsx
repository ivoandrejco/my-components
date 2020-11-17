import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import {patientsReducer} from './patient/PatientsReducers'

import {IPatientsState} from './patient/PatientsTypes'

export interface IApplicationState {
  patients: IPatientsState;
}

const rootReducer = combineReducers<IApplicationState> ({patients:patientsReducer})

export default function configureStore():Store<IApplicationState> {
  const store = createStore(rootReducer,undefined, applyMiddleware(thunk))
  return store
}