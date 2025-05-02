import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { CartRecuder } from "./reducers/cartReducer";



const rootReducer = combineReducers({
    CartRecuder
})

export const store = createStore(rootReducer,composeWithDevTools())