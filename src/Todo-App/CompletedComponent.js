import react from "react";
class CompletedComponent extends react.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log("from Completed Component")
    return(
      <>
      <h2>Completed Task</h2>
      {
        this.props.prop1.map((item)=>(
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button onClick={()=>this.props.prop2(item.id)}>undo</button>
            <button onClick={()=>this.props.prop3(item.id)}>Deleted</button>
          </div>
        )
        )
      }
      </>
    )
  }
}
export default CompletedComponent; 