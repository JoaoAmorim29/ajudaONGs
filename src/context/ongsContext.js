import React, {createContext, useReducer} from 'react';
import ongs from '../mocks/ongs';

const OngsContext = createContext({})
const initalState = {ongs}

const actions = {
    createOng(state, action){
        const ong = action.payload
        ong.id = Math.random()
        return{
            ...state,
            ongs: [...state.ogs, ong],
        }
    }
}

export const OngsProvider = props => {

    function reducer (state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initalState)

    return(
        <OngsContext.Provider value={{ state, dispatch }}>
            {props.children}
        </OngsContext.Provider>
    )
}

export default OngsContext;