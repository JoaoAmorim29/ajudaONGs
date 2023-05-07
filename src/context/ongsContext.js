import React, {createContext} from 'react';
import ongs from '../mocks/ongs';

const OngsContext = createContext({})

export const OngsProvider = props => {
    return(
        <OngsContext.Provider value={{
            state:{
                ongs
            }
        }} >
            {props.children}
        </OngsContext.Provider>
    )
}

export default OngsContext;