import React, { Component } from "react"

class DataFetcher extends Component{
    constructor(props){
        super(props);
        this.state={
            isloading:false,
            data:null
        }
    }

    componentDidMount(){
        this.setState({
            isloading:true
        })
        fetch(this.props.url).then((result)=>{
            result.json().then((resp)=>{
                this.setState({
                    data:resp,
                    isloading:false
                })
            })
        })
    }
    
    render(){
        return(
            <div>
                {this.props.render(this.state.isloading,this.state.data)}
            </div>
        )
    }
    
}

export default DataFetcher