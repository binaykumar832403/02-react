import React from "react";
import axios from "axios";
// import {result,set} from "lodash";

class APICallAxios extends React.Component{
  constructor(props){
    super(props)
    this.state={
      result:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({result:res.data})).catch((err)=>console.log(err))
  }
  render(){
    return(
      <>
      <h1>APi calls</h1>
    {
      this.state.result.map((item)=>(
        <>
        <h1>{item.name}</h1>
        <h2>{item.username}</h2>
        </>
      ))
    }
    </>
    )
  }
}
export default APICallAxios