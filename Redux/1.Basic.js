const redux = require('redux')
const createStore = redux.createStore

// Three principles:
// -The state of the whole Application is stored in a single object managed by the Redux store.
// -To update the state of your app you need to let Redux know about that with an action you aren't allowed to directly update the state of teh object
// -Pure Reducers are written to say how the action will be transmitted

/************************************************************************************************************************** */
//Action
const BUY_CAKE = 'BUY_CAKE'

//Action Creator ==> function that returns an action
function buyCake() {
    //Action is an Object with a type property
    return {
        type: BUY_CAKE
    }
}


//Following the first principle the whole application has one state
const initialState = {
    numOfCakes: 10
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
const unsubscribe = store.subscribe(() => { console.log("State is Updated ",store.getState()) })

//3. Dispatch method to be able to update state
//Syntax:dispatch(Action_Creator)
store.dispatch(buyCake())//so that no of cakes is reduced by 1
store.dispatch(buyCake())//so that no of cakes is reduced by 1

//4.Unsubscribe
unsubscribe()
store.dispatch(buyCake())//Dispatch after unsubscribe
console.log("State is ",store.getState())//7 :(
//Note: State is changed while the subscribe function isn't called :(