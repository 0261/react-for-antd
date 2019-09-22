import { combineReducers } from 'redux';
import aws from './settings/aws/aws';
export const rootReducer = combineReducers({ aws });

export type AppState = ReturnType<typeof rootReducer>;
