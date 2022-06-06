import React, { Fragment } from "react";

const Data = (props) => {
  return (
    <Fragment>
      <h5 className="card-title" onClick={() => props.detail(props.data._id)} >{props.data.namaJenis}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.data.lokality}</h6>
    </Fragment>
  )
}

export default Data;