//(1)
import React from 'react'
//Import Action creators (From index.js) where we collected all the creators
import { buyCake } from '../redux'

//Connect function to connect the 2 map functions to our component
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes {props.numOfCakes}</h1>
            {/* props.numOfCakes ==> Is the key used in the map function :) */}
            <button onClick={props.buyCake}>buyCake</button>
             {/* props.buyCake ==> Is the key used in the map function :) */}
        </div>
    )
}


//Step(1) Define mapStateToProps
const mapStateToProps = state => {
    return {
        //key ==> a prop of the component: is now mapped to the numOfCakes received as a state for the component.
        // numOfCakes:state.numOfCakes

        //Since Multiple Reducers
        numOfCakes:state.cake.numOfCakes
    }
}

//Step(2) Define mapDispatchToProps
//Maps action creator to props in our component
const mapDispatchToProps = dispatch => {
    return {
        //Key is to be a prop for this component : returns a function that dispatches buyCake() action defined in cakeActions.js 
        buyCake:()=>dispatch(buyCake())
    }
}

//Connect these 2 maps functions to our react component 
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer)