import React, { Component } from "react"
import PropTypes from "prop-types"

//defaultProps in FC
function Card(props){
    const styles ={
        backgroundColor:props.cardColor,
        width:props.cardWidth,
        height:props.cardHeight
    }
    return(
        <div style={styles}></div>
    )
}

//setting default props values
Card.defaultProps ={
    cardColor:"blue",
    cardWidth:100,
    cardHeight:100
}

Card.propTypes ={
    cardColor:PropTypes.oneOf(["red","green"]).isRequired,
    cardWidth:PropTypes.number.isRequired,
    cardHeight:PropTypes.number.isRequired
}

//defaultProps in CC
//same for class component
//for CC we can define defaultProps inside and outside props
class Card2 extends Component{
    
    static defaultProps ={
        cardColor:"black"
    }

    render(){
        const styles ={
            backgroundColor:this.props.cardColor,
            height:100,
            width:100
        }
        return(
            <div style={styles}>

            </div>
        )
    }
}

//ant one indide class or outside
// Card.defaultProps ={
//     cardColor:"black"
// }

export default Card