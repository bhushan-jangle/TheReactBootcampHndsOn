import React,{useContext} from "react"
import {Context} from "../Context"
import Image from "../Image"
import {getClass} from "../utils/index"

function Photos(){
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    const {allPhotos} = useContext(Context);

    const imageElement = allPhotos.map((img,i)=>(
        <Image key={img.id} img={img} className={getClass(i)}></Image>
    ))
    
    return(
        <main className="photos">
            {imageElement}
        </main>
    )
}

export default Photos