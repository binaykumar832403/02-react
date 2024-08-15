import axios from "axios";
import React from "react";

class ImageSeaechApi extends React.Component{
  constructor(props){
    super(props)
    this.state={
      searchItem:'',
      result:[]
    }
  }
  handleInput=(e)=>{
    this.setState({searchItem:e.target.value})
  }
  handleSearch=(e)=>{
    e.preventDefault()
    axios.get(`http://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=htAkoMu7uviuZkOAV3pOEct6dIsHK3vFz0EiBszCPwM`).then((res)=>this.setState({result:res.data.results})).catch((err)=>console.log(err))
  }
  render(){
    return(
      <>
      <h1>search Anything !</h1>
      <input type="text" onClick={(e)=>this.handleInput(e)} placeholder="Enter the search"></input>
      <button onClick={(e)=>this.handleSearch(e)}>Search</button>
      {
        this.state.result.map((item)=>(
          <div className="img-container">
            <img src={item.url.small}></img>
          </div>
        ))
      }
      </>
    )
  }
}
export default ImageSeaechApi;