import React,{useState,useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "./Context"

function Image({className,img}){
    const[hovered, setHovered] = useState(false);
    const{toggleFavorite,addToCart} = useContext(Context);
// 1. Icon to render for the heart:
// <i className="ri-heart-line favorite"></i>

// 2. Icon to render for the plus:
// <i className="ri-add-circle-line cart"></i>

    //x && "yes" == if(x==true) return "yes"
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const cartIcon = hovered && 
        <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    
    return(
        <div className={`${className} image-container`} 
        onMouseEnter={()=>setHovered(true)} 
        onMouseLeave={()=>setHovered(false)}>
            <img src={img.url} className="image-grid"></img>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}

// Image.propTypes={
//     className: PropType.string,
//     img:PropType.shape({
//         url: PropType.string.isRequired,
//         isFavorite : PropType.bool.isRequired,
//         id : PropType.string.isRequired
//     })
// }

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image