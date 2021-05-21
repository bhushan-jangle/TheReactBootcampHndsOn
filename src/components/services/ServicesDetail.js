import React from "react"
import {useParams,useHistory} from "react-router-dom"
import ServiceData from "./ServiceData"

function ServicesDetail(props) {
    const{serviceId} = useParams();
    const history = useHistory();
    const thisService = ServiceData.find(service => service._id === serviceId)
    function handleClick(){
        console.log('go Back')
        setTimeout(() => {
            history.push("/services")
            // history.go(-1)
        }, 1000);
    }
    return (
        <div>
            <h3>Services Details Page</h3> 
            <h5>{thisService.name}</h5>
            <p>{thisService.price}</p>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Go Back</button>
        </div>
    )    
}

export default ServicesDetail
