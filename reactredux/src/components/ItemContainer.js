//(6)
//Using props passed to the component in mapStateToProps
import React from 'react'

import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'
function ItemContainer(props) {
    return (
        <div>
            <h1>item - {props.item} </h1>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

//mapStateToProps using already passed prop for the component
//Syntax: (state (as previous ex),new parameter which is the props passed to this component from its parent )
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake//if a prop called cake is already passed to this component
        ? state.cake.numOfCakes :
        state.iceCream.numOfIceCream

    return {
        item: itemState
    }

}

//mapDispatchToProps using already passed prop for the component
//Syntax: (dispatch (as previous ex),new parameter which is the props passed to this component from its parent )
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchMethod = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchMethod
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
// To dispatch only actions but you don't want to subscribe to changes in the store ==> ie mapDispatchToProps no mapStateToProps ==> pass null :)
// export default connect(null, mapDispatchToProps)(ItemContainer)
