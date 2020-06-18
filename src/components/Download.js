import React, {useContext} from 'react'

import { ClipContext } from "../contexts/ClipContext"


const Download = () => {
    const {clipList} = useContext(ClipContext)
    const List = clipList.map(x=>{
    return(
    <p>{x.clip}</p>
    )
    })
    return (
        <div>
        {List}
        </div>
      );
}
 
export default Download;
