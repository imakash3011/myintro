import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>

            <div id="aboutpage" className="col-md-6 col-10 mx-auto mt-4 timeline-item">
            <div className="card  mt-4 timeline-item-content ">
                    <h6 className="card-title font-weight-bold">{props.title}</h6>
                    <p className="card-text">{props.textdata}</p> 
                    <span className="circle" />
                </div>
            </div>
    </>
  );
};

export default Card;
