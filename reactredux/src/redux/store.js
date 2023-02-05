import { createStore } from 'redux'
//reducer
// import { cakeReducer } from './cake/cakeReducer'

//** Combined Reducer=> root reducer
import rootReducer from './rootReducer'

//Logger MiddleWare
//npm install redux-logger
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'

//redux-devtool
//https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
//npm install --save @redux-devtools/extension
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk';

// const store=createStore(cakeReducer)

// const store = createStore(rootReducer)

//Applying Logger middleware
// const store = createStore(rootReducer,applyMiddleware(logger))

//Redux DevTools :)
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

//(7) Apply redux-thunk middleware to our store ==> to allow action creator to return a function instead of an object :D
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store