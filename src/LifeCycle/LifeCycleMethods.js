// import React from "react";
// class LifeCycleMethod extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0,
//       msg:""
//     }
//   }
//   static getDerivedStateFromProps(props,state){
//     console.log("before",props,state)
//     // state.msg=props.msg
//     console.log("after",props,state)
//     return{msg:props.msg}
//   }
//   render(){
//     console.log("render")
//     return(
//       <>
//       <h1>{this.state.count}</h1>
//       <h2>{this.state.msg}</h2>
//       </>
//     )
//   }
// }
// export default LifeCycleMethod;



/////////////////////////////////////////////////
////////componentDidMount()


// import React from "react";
// class LifeCycleMethod extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0,
//       msg:"initial value"
//     }
//   }

//   componentDidMount(){
//     console.log("inside componentdidmount")
//     setTimeout(()=>{
//       this.setState({msg:"msg altered by did mount"})
//     },3000)
//   }
//   render(){
//     console.log("render")
//     return(
//       <>
//       <h1>{this.state.count}</h1>
//       <h2>{this.state.msg}</h2>
//       </>
//     )
//   }
// }
// export default LifeCycleMethod;

//////////////////////////////
//////////shouldComponentUpdate()

// import React from "react";
// class LifeCycleMethod extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0,
//       msg:"initial value"
//     }
//   }
//   componentDidMount(){
//         console.log("inside componentdidmount")
//       }

//  shouldComponentUpdate(newProps,newState){
//   console.log("inside shouldComponentUpdate")
//   console.log(newState.count)
//   if(this.count===newState.count){
//     return false
//   }
//   else{
//     return true
//   }
//  }
//  changeCount=()=>{
//   this.setState({count:this.state.count+1})
//  }
//   render(){
//     console.log("render")
//     return(
//       <>
//       <h1>{this.state.count}</h1>
//       <h2>{this.state.msg}</h2>
//       <button onClick={this.changeCount}>Button</button>
//       </>
//     )
//   }
// }
// export default LifeCycleMethod;

/////////////////////////
/////getSnapshotBeforeUpdate()

// import React from "react";
// class LifeCycleMethod extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       msg: "initial value",
//     };
//   }

//   getSnapshotBeforeUpdate(props,state){
//    console.log("snapshort",state)
//   }


//   changeCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     console.log("render");
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <h2>{this.state.msg}</h2>
//         <button onClick={this.changeCount}>Button</button>
//       </>
//     );
//   }
// }
// export default LifeCycleMethod;

////////////////////////////////
//////componentDidUpdate()

import React from "react";
class LifeCycleMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msg: "initial value",
    };
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
   console.log("snapshort")
  return "from snapshort"
  }
  componentDidUpdate(props,state,snapValue){
   console.log("did update",state,snapValue) 
  }


  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.count}</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.changeCount}>Button</button>
      </>
    );
  }
}
export default LifeCycleMethod;
