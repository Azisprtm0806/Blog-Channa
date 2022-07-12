import React, { Component } from "react";
import axios from "axios";
import "./DetailBlog.css"

class DetailBlog extends Component{
  state= {
    blog: {
      id: "",
      namaJenis: "",
      lokality: "",
      perawatan: "",
      treatment: ""
    }
  }

  componentDidMount(){
    const id = this.props.match.params.blogID;
    axios.get(`http://localhost:3004/detailBlog/${id}`)
      .then(res => {
        let blog = res.data.data;
        this.setState({
          blog: {
            id: blog._id,
            namaJenis: blog.namaJenis,
            lokality: blog.lokality,
            perawatan: blog.perawatan,
            treatment: blog.treatment,
          }
        })
      })
  }
  render(){
    return(
      <div className="container pt-4 text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="card d-flex">
              <h5 className="card-header">{this.state.blog.namaJenis}</h5>
              <div className="card-body">
                <h5 className="card-title">{this.state.blog.lokality}</h5>
                <p className="card-text">{this.state.blog.perawatan}</p>
                <p className="card-text">{this.state.blog.treatment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailBlog;