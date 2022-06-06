import React, { Component, Fragment } from "react"
import Card from "../../component/Card/Card"

class Content extends Component{
  render(){
    return(
      <Fragment>
        <div className="container mt-4">
        <Card />
        </div>
      </Fragment>
    )
  }
}

export default Content;