import React from "react";
import isEqual from "lodash/isEqual";

class TrashComponent extends React.Component{
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextprops){
   if(isEqual(nextprops.props1,this.props.prop1)){
    return false
   }else{
    return true
   }
   
  }
  render(){
    console.log("from Trash component");
    return(
      <>
      <h2>Trash</h2>
     {
      this.props.prop1.map((item)=>(
        <div>
           <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button onClick={()=>this.props.prop3(item.id)}>store</button>
        </div>
      ))
     }
      </>
    )
  }
}
export default TrashComponent;
