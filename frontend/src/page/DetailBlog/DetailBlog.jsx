import React, { Component } from "react";
import axios from "axios";

class DetailBlog extends Component{
  state= {
    blog: {
      namaJenis: "",
      lokality: ""
    }
  }

  componentDidMount(){
    const id = this.props.match.params.blogID;
    axios.get(`http://localhost:3004/detailBlog/${id}`)
      .then(res => {
        let blog = res.data
        console.log(blog);
        // this.setState({
        //   bloig: {
        //     title: post.title,
        //     body: post.body
        //   }
        // })
      })
  }
  render(){
    return(
      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    )
  }
}

export default DetailBlog;