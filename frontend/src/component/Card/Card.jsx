import React, { Component, Fragment } from 'react';
import axios from 'axios';
import "./Card.css"
import Data from './Data';
import {withRouter} from 'react-router-dom';


class Card extends Component{
  state ={
    post: [],
  }
  getPostDataAPI = () => {
    axios.get("http://localhost:3004/allBlog")
    .then(res => {
      this.setState({
        post: res.data.data
      })
    })
    .catch(err => console.log(err))
  }

  DeleteDataAPI = (id) => {
    axios.delete(`http://localhost:3004/delete/${id}`)
      .then(res => {
        this.getPostDataAPI()
      })
  }

  handleDetail = (id) => {
    this.props.history.push(`/detailBlog/${id}`);
  }

  handleEdit = (id) => {
    this.props.history.push(`/editBlog/${id}`);
  }

  componentDidMount() {
    this.getPostDataAPI()
  }
  render(){
    return (
      <Fragment>
        <h1>ALL Channa</h1>
        <div className="container">
          <div className="row">       
              {
                this.state.post.map(data => {
                  return <Data key={data.id} data={data} goDetail={this.handleDetail} goEdit={this.handleEdit} delete={this.DeleteDataAPI} />
                })
              }
          </div>
        </div>
        
      </Fragment>
    )
  }
}

export default withRouter(Card);