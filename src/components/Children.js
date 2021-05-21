import React from "react"
import "./comp.css"

//using react children
function Children(props){

    return(
        <div class="children">
            {props.children}
        </div>
    )
}

export default Children