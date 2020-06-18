import React, { Component, createContext } from 'react'

export const ClipContext = createContext()


export class ClipContextProvider extends Component {
    state={
        clipList: [
            {id: 0, clip: "test"},
            {id: 1, clip: "test1"},
            {id: 2, clip: "test2"}
        ]
    }

   render(){
       return(
           <ClipContext.Provider value={{...this.state}}>
               {this.props.children}
           </ClipContext.Provider>
       )
   }


}

export default ClipContextProvider