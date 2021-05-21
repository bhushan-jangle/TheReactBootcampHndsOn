import React from "react"
import ServiceData from "./ServiceData"
import {Link,Switch,Route} from "react-router-dom"

function ServicesList() {
    const items = ServiceData.map(item=>(
        <div>
            <Link to={`/services/${item._id}`}><h4>{item.name} - ${item.price}</h4></Link>
        </div>
    ))
    return (
        <div>
            <h3>Services List</h3>
            {items}
        </div>
    )    
}

export default ServicesList
