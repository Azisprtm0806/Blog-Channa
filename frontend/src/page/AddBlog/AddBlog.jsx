import axios from "axios";
import React, { Component, Fragment } from "react";
import "./AddBlog.css"

class AddBlog extends Component{

  state = {
    blog: [],
    formBlogPost: {
      namaJenis: "",
      lokality: "",
      perawatan: "",
      treatment: ""
    },
    message: ""
  }


  addDataToAPI = () => {
    axios.post('http://localhost:3004/addBlog', this.state.formBlogPost)
      .then(res => {
        const message = res.data.message;
        this.setState({
          formBlogPost: {
            namaJenis: "",
            lokality: "",
            perawatan: "",
            treatment: ""
          },
          message: message
        })
      }, (err) => {
        console.log(err)
      })
  }


  handleFromChange = (event) => {
    let formBlogPostNew = {...this.state.formBlogPost};
    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew
    })
  }
  
  handleSubmit = () => {
    this.addDataToAPI();
  }


  render(){
    return(
      <Fragment>
        <div className="container mt-4">
          <p className="message">{this.state.message}</p>
          <div className="row">
          <div className="card card-add mx-auto" >
            <div className="card-body">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Nama Jenis</label>
                  <input type="text" className="form-control" name="namaJenis" id="exampleFormControlInput1" placeholder="Nama jenis" onChange={this.handleFromChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput2" className="form-label">Loaklity</label>
                  <input type="text" className="form-control" name="lokality" id="exampleFormControlInput2" placeholder="lokality" onChange={this.handleFromChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Perwatan</label>
                  <textarea className="form-control" name="perawatan" id="exampleFormControlTextarea1" rows="3" onChange={this.handleFromChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea2" className="form-label">Treatment</label>
                  <textarea className="form-control" name="treatment" id="exampleFormControlTextarea2" rows="3" onChange={this.handleFromChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit} >Save</button>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </Fragment>
    )
  }
}

export default AddBlog;