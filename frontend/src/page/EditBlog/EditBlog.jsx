import axios from "axios";
import React, { Component, Fragment } from "react"

class EditBLog extends Component{
  
  state = {
    blog: {
      id: "",
      namaJenis: "",
      lokality: "",
      perawatan: "",
      treatment: "",
    },
    message: ""
  }

  putDataApi = () => {
    axios.put(`http://localhost:3004/edit/${this.state.blog.id}`, this.state.blog)
      .then((res) => {
        console.log(res)
        const message = res.data.message;
        this.setState({
          blog: {
            id: "",
            namaJenis: "",
            lokality: "",
            perawatan: "",
            treatment: "",
          },
          message: message
        })
      })
  }

  handleFormChange = (event) => {
    let formBlog = {...this.state.blog};
   
    formBlog[event.target.name] = event.target.value;

    this.setState({
      blog: formBlog
    })
  }

  handleSubmit = () => {
    this.putDataApi()
  }

  getOneData = () => {
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
            treatment: blog.treatment
          }
         })
      })
  }

  componentDidMount() {
    this.getOneData()
  }

  render() {
    return(
      <Fragment>
      <div className="container mt-4">
      <p className="message">{this.state.message}</p>
      <div className="row">
        <div className="card mx-auto">
          <div className="card-body">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nama Jenis</label>
                <input type="text" value={this.state.blog.namaJenis} className="form-control" name="namaJenis" id="exampleFormControlInput1" onChange={this.handleFormChange}  />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Lokality</label>
                <input type="text" value={this.state.blog.lokality} className="form-control" name="lokality" id="exampleFormControlInput2" onChange={this.handleFormChange}  />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Perawatan</label>
                <textarea className="form-control" value={this.state.blog.perawatan} name="perawatan" onChange={this.handleFormChange} id="exampleFormControlTextarea1" rows="3" ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea2" className="form-label">Treatment</label>
                <textarea className="form-control" value={this.state.blog.treatment} name="treatment" onChange={this.handleFormChange} id="exampleFormControlTextarea2" rows="3" ></textarea>
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
    )
  }
}

export default EditBLog;