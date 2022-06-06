import React, { Component } from 'react';
import axios from 'axios';
import "./Card.css"
import Data from './Data';

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

  handleDetail = (id) => {
    this.props.history.push(`/detail-blog/${id}`)
  }

  componentDidMount() {
    this.getPostDataAPI()
  }
  render(){
    return (
      <div className="card">
        <div className="card-body">
          {
            this.state.post.map(data => {
              return <Data key={data.id} data={data} detail={this.handleDetail} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Card;