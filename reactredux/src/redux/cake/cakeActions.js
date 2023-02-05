import { BUY_CAKE } from './cakeTypes'

//Special For Cake With Numbers
import {BUY_CAKE_WITH_NUM} from './cakeTypes'

//Action Creator
export const buyCake=()=>{
    return{
        type:BUY_CAKE
    }
}

//Special For Cake With Numbers
//Action Creator
//=1 default value
export const buyCakeWithNum = (number = 1) => {
    return {
        type: BUY_CAKE_WITH_NUM,
        payload: number
    }
}