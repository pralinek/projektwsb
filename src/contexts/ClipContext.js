import React, { Component, createContext } from 'react'

export const ClipContext = createContext()


export class ClipContextProvider extends Component {
    state={
        clipList: [{clip: "highlight the text...", id:1 },{clip: "then copy something...", id:2 },{clip: "I will appear...", id:3},{clip: "Here:)", id:4  }]
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