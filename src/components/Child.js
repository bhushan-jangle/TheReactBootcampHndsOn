import React,{Fragment} from "react"
import GrandChild from "./GrandChild"

//<>....</> another way of fragment representation
function Child(){
    return(
        <Fragment>
            <h3>This is a child component</h3>
            <GrandChild/>
        </Fragment>
        
    )
}

export default Child