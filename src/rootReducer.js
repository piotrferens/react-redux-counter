import { combineReducers } from "redux";

import { counter } from "./counterReducer";

export const rootReducer = combineReducers({ counter });
