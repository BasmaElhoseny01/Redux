//(3)
import React from 'react'

//Action Creator
import { buyIceCream } from '../redux'

//Connect Function
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Num of IceCream {props.numOfIceCreamProp}</h1>
            <button onClick={props.dispatchProp}>Buy IceCream</button>
        </div>
    )
}


//mapStateToProps
const mapStateToProps = state =>{
    return {
        numOfIceCreamProp:state.iceCream.numOfIceCream
    }
}

//mapStateToDispatch
const mapStateToDispatch = dispatch=>{
    return {
        dispatchProp : ()=> dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(IceCreamContainer)