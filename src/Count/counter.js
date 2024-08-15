import React from "react";
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increase=()=>{
   this.setState((prevValue)=>{return{count:prevValue.count + 1}})
  }
  decrease=()=>{
   if(this.state.count !== 0){
    this.setState((prevValue)=>{return{count:prevValue.count - 1}})
   }
   else{
    alert("you have reached to 0")
   }
  }

render(){
    return(
      <>
      <h1>Count = {this.state.count}</h1>
      <button onClick={this.increase}>increase</button>
      <button onClick={this.decrease}>decrease</button>
      </>
    )
  }
}
export default Counter;






