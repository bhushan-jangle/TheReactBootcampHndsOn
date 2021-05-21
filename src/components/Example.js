import React from "react"

function Example(props){
    //console.log(props.render("Nikku"));
    return(
        <h3>{props.render(-5)}</h3>
    )
}

export default Example