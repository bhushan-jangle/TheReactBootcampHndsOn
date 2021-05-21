//hide show details using render props instead of HOC
import React from "react"
import Toggler from "./Toggler"

function Details(){
    return(
        <Toggler render={function(show,toggle){
            return(
               <div>
                    <button onClick={toggle}>{show?"Hide":"Show"}Profile</button>
                   <nav style={{display:show?"block":"none"}}>
                        <h3>Name : Nikku</h3>
                        <p>Hobby : Watching cartoons</p>
                        <p>age :  4 years</p>
                   </nav>
               </div> 
            )
        }}/>
    )
}

export default Details