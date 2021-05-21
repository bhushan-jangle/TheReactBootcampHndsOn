import React,{useState} from "react"

//form handling
function Form(){
    const[name, setName] = useState("");
    const[contact, setContact] = useState("");

    function getFormData(e){
        console.log(name,contact)
        e.preventDefault();
    }
    
    const result = <div><h4>Name:{name}</h4> <h4>Contact: {contact}</h4></div>

    return(
        <>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/> <br /> <br />
            <input type="text" placeholder="Enter your contact number" onChange={(e)=>setContact(e.target.value)}/><br /> <br />
            <button type="submit">Submit</button>
        </form>
        {result}
        </>
    )
}

export default Form