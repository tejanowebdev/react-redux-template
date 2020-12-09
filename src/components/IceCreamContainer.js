import React from 'react'
import {connect} from "react-redux"
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {

    console.log("props: ", props)
    return (
        <div>
            <h1>Numer of IceCream - {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}> Click me!</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
