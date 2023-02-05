import { combineReducers } from 'redux';

//Reducers
import { cakeReducer } from './cake/cakeReducer'
import { iceCreamReducer } from './iceCream/iceCreamReducer'

import { userReducer } from './user/userReducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer
})

export default rootReducer