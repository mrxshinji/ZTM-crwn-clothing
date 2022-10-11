import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import {rootReducer} from './root-reducer'

// middle wares
const middleWares = [logger]
const composeEnhancers = compose(applyMiddleware(...middleWares));

// generate store
export const store = createStore(rootReducer, undefined, composeEnhancers)