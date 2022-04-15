import actionTypes from "../../common/actionTypes";

const initialState = {
    count: 5
};

const CounterReducers = (state = initialState, action) => {
    console.log(action, initialState)
    switch(action.type){
        case actionTypes.INCREMENT_COUNT:
            console.log('increment', state)
            return {...state, count: state.count + 1}

        case actionTypes.DECREMENT_COUNT:
            return {...state, count: state.count - 1}

        case actionTypes.RESET_COUNT:
        return {...state, count: state.count = 0}

        default:
            return state
    }
}

export default CounterReducers;