//(2)
import React from 'react'

//useSelector hook
import { useSelector } from 'react-redux'
//useDispatch hook to dispatch an action :)
import { useDispatch } from 'react-redux'

//Import action creators from index.js
import { buyCake } from '../redux'

function HooksCakeContainer() {

    //it is like mapStateToProps function it receives state as a parameter
    // const noOfCakes = useSelector(state => state.numOfCakes)
    //Since Multiple Reducers
    const noOfCakes = useSelector(state => state.cake.numOfCakes)


    //it is like mapStateToDispatch
    //it returns reference to function
    const dispatch =useDispatch()
    return (
        <div>
            <h1>Num of Cakes { noOfCakes }</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer