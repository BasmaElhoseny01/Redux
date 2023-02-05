import { BUY_CAKE, BUY_CAKE_WITH_NUM } from './cakeTypes';

const initialCakeState = {
    numOfCakes: 10
}
export const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_CAKE_WITH_NUM: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }

        default: return state
    }
}