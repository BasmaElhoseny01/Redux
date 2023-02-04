/*
Sell both cakes and ice cream
*/
const redux = require('redux')
const createStore = redux.createStore

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

//Following the first principle the whole application has one state
const initialState = {
    numOfCakes: 10,
    numOfIceCream: 10
}

/************************************************************************************************************************** */
//Reducer
/*Specify how to the app's state changes in response to actions sent ot the store */
//It is a function that returns the next state of the application
//Syntax:(previousState,action)=>newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        //returns new object to be the next state of the application
        case BUY_CAKE: return {
            ...state,//to make a copy of the whole state so that you only change required props keeping previous as they were :)
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

/************************************************************************************************************************** */
//Redux Store
//1.Create redux store
//In this step The store really holds the application state
//Syntax:createStore(Reducer_Function)
const store = createStore(reducer)
console.log('Initial State of The App is', store.getState()) //==> Initial State of the App is printed

//2. App subscribe to changes in the store
//Listener to the store
//Syntax:dispatch(Function to be called when dispatch is called :D)
//Return: unsubscribe method
const unsubscribe = store.subscribe(() => { console.log("State is Updated ", store.getState()) })

//3. Dispatch method to be able to update state
//Syntax:dispatch(Action_Creator)
store.dispatch(buyCake())//so that no of cakes is reduced by 1
store.dispatch(buyCake())//so that no of cakes is reduced by 1
store.dispatch(buyIceCream())//so that no of Ice cream is reduced by 1
store.dispatch(buyIceCream())//so that no of  Ice cream is reduced by 1
 
//4.Unsubscribe
unsubscribe()