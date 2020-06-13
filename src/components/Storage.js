import React from 'react'

const Storage =({clipboards}) =>{
   const clips = clipboards.map(x=>{
       return(
           <div>
            <p className="collection-item">{x}</p>
           </div>
       )
   })
   return(
       <div className="collection">
           {clips}
       </div>
   )  

}
export default Storage