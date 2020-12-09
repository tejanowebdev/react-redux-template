import React from 'react'
import {connect} from "react-redux"
import {buyCake} from '../redux'

// import { useSelector } from 'react-redux'
// const state = useSelector(state => state.state)

function CakeContainer(props) {
    
    return (
        <div>
            <h1>Numer of cakes - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}> Click me!</button>
        </div>
    )
}

// 3 steps
// 1. define a new function > mapStateToProps()
// create props state to access a state from redux
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// 2. define a new function > mapDispatchToProps() gets dispatch method in redux
// import action creator "import {buyCake} from '../redux'"
// create props to component to dispatch
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// 3. connects the component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
