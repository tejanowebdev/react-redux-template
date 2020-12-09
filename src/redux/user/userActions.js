import axios from 'axios'

import { 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS 
} from "./userTypes"

// Function return an actions
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Action: Return a function
export const fetchUsers = () => {
    return (dispatch, getState) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                // getstate
                const items = getState().user.users
                console.log("store getstate: ", items)
                // response data
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error message
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}