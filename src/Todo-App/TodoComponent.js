import React from "react";
import CompletedComponent from './CompletedComponent';
import PendingComponent from "./pendingComponent";
import TrashComponent from "./TrashComponent";
import "./Todo.css";




class TodoComponent extends React.Component{
  constructor(props){
    super(props)
      this.state={
        todos:[],
        count:0,
        title:"",
        desc:""
      }
    }
    // static getDerivedStateFromProps(props,state){
    //   return {todos:props.data}
    // }

    handleUname=(e)=>{
      this.setState({title:e.target.value})
    }
    handlePwd=(e)=>{
      this.setState({desc:e.target.value})
    }
    getCompletedItems=()=>{
      const completedItems = this.state.todos.filter((item)=>item.status===true && item.active ===true)
      return completedItems
    }

    getPendingItems=()=>{
      const pendingItems = this.state.todos.filter((item)=>item.status===false)
      return pendingItems
    }
    getTrashItems=()=>{
      const trashItems = this.state.todos.filter((item)=>item.active===false)
      return trashItems
    }
    changeCompletionStatus=(todoId)=>{
      const temp = this.state.todos
      const obj = temp.find((item)=>item.id===todoId)
       
      obj.status = !obj.status
       this.setState({todos:temp})

    }

    changeCompletionActive=(todoId)=>{
      const temp = this.state.todos
      const obj = temp.find((item)=>item.id===todoId)
       
      obj.active = !obj.active
       this.setState({todos:temp})

    }
    addTodo=()=>{
      let no = Math.random()
      const newItem={
        id:no,
        title:this.state.title,
        desc:this.state.desc,
        status:false,
        active:true
      }
      const temp=[...this.state.todos,newItem]
      this.setState({todos:temp})
    }

    render(){
      console.log("from parent")
      return(
        <>
        <h1> Todo App</h1>
        <div className="todo-input">
        <div>
          Title:<input type="text" onClick={(e)=>this.handleUname(e)}></input>
        </div>
        <div>
          Desc:<input type="text" onClick={(e)=>this.handlePwd(e)}></input>
          </div>
         <button onClick={()=>this.addTodo()}>add todo</button>
         </div>

       <PendingComponent prop1={this.getPendingItems()}prop2={this.changeCompletionStatus}/>
       <CompletedComponent prop1={this.getCompletedItems()}prop2={this.changeCompletionStatus}prop3={this.changeCompletionActive}/>
       <TrashComponent prop1={this.getTrashItems()} prop3={this.changeCompletionActive}/>
        </>
      )
    }
  }
export default TodoComponent;

