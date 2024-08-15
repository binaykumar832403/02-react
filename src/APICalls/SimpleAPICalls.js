import React from "react";

class SimpleAPICalls extends React.Component{
   constructor(props){
    super(props)
    this.state={
      result:[]
    }
   }
   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
   }
   render(){
    return(
      <>
    {
      this.state.result.map((item)=>(
        <>
        <h3>{item.name}</h3>
        <h4>{item.username}</h4>
        </>
      ))
    }
    </>
    )
   }
}
export default SimpleAPICalls;