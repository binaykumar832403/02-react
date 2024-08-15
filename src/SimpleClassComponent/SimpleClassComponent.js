import React from "react";
class SimpleClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname: "Aman"
            
        }
    }
    changeName=()=>{
      this.setState({fname:"Ravi"})
    }
    
    render(){
        
        return(
            <>
            <h1>Demo</h1>
            <h2>Hello {this.state.fname} </h2>
            <button onClick={this.changeName}>change</button>
            </>
        )
    }
}
export default SimpleClassComponent;