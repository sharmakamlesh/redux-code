import actionTypes from "../../common/actionTypes"


export function incrementCount(){
    return {
        type: actionTypes.INCREMENT_COUNT
    }
}

export function decrementCount(){
    return {
        type: actionTypes.DECREMENT_COUNT
    }
}

export function resetCount(){
    return {
        type: actionTypes.RESET_COUNT
    }
}