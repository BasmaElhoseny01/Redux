//npm install redux-logger
/** 
 * Provides Third Party extension point between dispatching action and the moment it reaches reducer
 * ie instead of teh console.log we had written in the subscribe method the middleware takes charge of that :D
*/

const redux = require('redux')
const createStore = redux.createStore
const combineReducers=redux.combineReducers//To combine multiple reducers in a single reducer to be passed to the createStore fun

//Logger to log messages
const reduxLogger =  require('redux-logger')
const logger = reduxLogger.createLogger()//define logger object
const applyMiddleware = redux.applyMiddleware

/************************************************************************************************************************** */
//Action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'


//Action Creator ==> function that returns an action
function buyCake() {
    //Action is an Object with a type property
    return {
        type: BUY_CAKE
    }
}

//Action Creator ==> function that returns an action
function buyIceCream() {
    //Action is an Object with a type property
    return {
        type: BUY_ICE_CREAM
    }
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream: 10
}

/************************************************************************************************************************** */
//Reducer
/*Specify how to the app's state changes in response to actions sent ot the store */
//It is a function that returns the next state of the application
//Syntax:(previousState,action)=>newState
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        //returns new object to be the next state of the application
        case BUY_CAKE: return {
            ...state,//to make a copy of the whole state so that you only change required props keeping previous as they were :)
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        //returns new object to be the next state of the application
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

/************************************************************************************************************************** */
//Redux Store
//Combine Reducers
//Syntax:combineReducers({Object key==> the state will have these keys :) , value=reducer function})
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
//1.Create redux store
//In this step The store really holds the application state
//Syntax:createStore(Reducer_Function)
//*****Added logger as middle ware for the store */
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State of The App is', store.getState()) //==> Initial State of the App is printed

//2. App subscribe to changes in the store
//Listener to the store
//Syntax:dispatch(Function to be called when dispatch is called :D)
//Return: unsubscribe method
const unsubscribe = store.subscribe(() => { })

//3. Dispatch method to be able to update state
//Syntax:dispatch(Action_Creator)
store.dispatch(buyCake())//so that no of cakes is reduced by 1
store.dispatch(buyCake())//so that no of cakes is reduced by 1
store.dispatch(buyIceCream())//so that no of Ice cream is reduced by 1
store.dispatch(buyIceCream())//so that no of  Ice cream is reduced by 1
 
//4.Unsubscribe
unsubscribe()