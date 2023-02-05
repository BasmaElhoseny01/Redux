import { BUY_ICE_CREAM } from './iceCreamTypes';

const initialIceCreamState = {
    numOfIceCream: 20
}

export const iceCreamReducer = (state = initialIceCreamState, action)=> {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }

        default: return state
    }
}