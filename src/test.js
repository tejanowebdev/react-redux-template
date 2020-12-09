import redux from "redux"

// library
const redux = require('redux')
const createStore = redux.createStore
// ACTION

// is an object with a type property
// an Action creator is a function that return a function()

const BUY_CAKE = "BUY_CAKE"

function buycake(){
    return{
        type: BUY_CAKE,
        info:'First redux action'
    }
}

// REDUCER 
// = (prev, action) => newState
// specify how state changes in the app
// accepts two param (state, action) and return next state of the app

// state
const initialState = {
    numOfCakes: 10
}

// REDUX STORE
// 1. responsible for holding state
// 2. allows access to state via getState()
// 3. allows state to be updated via dispatch()
// 4. register listeners via subscribe(listener) 
// 5. unsubscribe/unregistering

// 1. holds the application state

// Reducer Function
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            break;
        default: return state
            break;
    }
}

// createStore accepts a param 'reducer' to make state transition based on action recieved
const store = createStore(reducer)

// 2. getState()
console.log("Initial State", store.getState())

// 4. subscribe(function())
// store.subscribe(()=> console.log("updated state"), store.getState())

// 5. unsubscribe
const unsubscribe = store.subscribe(()=> console.log("updated state"), store.getState())

// 3.  dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// after all our code has completed we can call our unsubscribe method
unsubscribe()