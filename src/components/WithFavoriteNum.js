import React from "react"

//HOC Component for add extra properties to existing component
export function WithFavoriteNum(component){
    const Component = component;
    return function(props){
        return <Component favNumber={30} {...props}/>
    }
}
