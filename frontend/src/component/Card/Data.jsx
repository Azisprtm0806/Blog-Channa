import React, { Fragment } from "react";

const Data = (props) => {
  return (
    <Fragment>
      <div className="col pt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" onClick={() => props.goDetail(props.data._id)} >{props.data.namaJenis}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.data.lokality}</h6>
            <div className="button">   
              <button className="btn btn-success" onClick={() => props.goEdit(props.data._id)}>Edit</button>
              <button className="btn btn-danger delete" onClick={() => props.delete(props.data._id)}>Delete</button>          
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Data;