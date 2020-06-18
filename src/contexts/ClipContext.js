import React, { Component, createContext } from 'react'

export const ClipContext = createContext()


export class ClipContextProvider extends Component {
    state={
        clipList: []
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