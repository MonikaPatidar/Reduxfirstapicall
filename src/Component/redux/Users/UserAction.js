import {FETCH_USER_REQUEST, FETCH_USER_LIST, FETCH_USER_ERROR} from './UserType';
export const FetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

const FetchUserList=users=>{
    return{
        type:FETCH_USER_LIST,
        payload:users
    }
}

const FetchUserError=error=>{
    return{
        type:FETCH_USER_ERROR,
        payload:error
    }
}

export const FetchUser=()=>{
    return(dispatch)=>{
        dispatch(FetchUserRequest)
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => dispatch(FetchUserList(data)))
         .catch(error=>{
            dispatch(FetchUserError(error))
        })
    }
}

