import React from "react"

//HOC- A function that takes a component as a first argument and retuen a new component that
//wraps the given component, providing extra capability it 
export function ExtraPopsAddedHOC(component){
    const Component = component;
    return function(props){
        return <Component anotherProp="bla bla bla" {...props}/>
    }
}

export default ExtraPopsAddedHOC