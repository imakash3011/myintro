import React from "react";
import { NavLink } from "react-router-dom";

const ExpCard = (props) => {
  return (
    <>

            <div id="aboutpage" className="col-md-6 col-10 mx-auto mt-4 timeline-item">
            <div className="card  mt-4 timeline-item-content ">
                    <h6 className="card-title font-weight-bold">{props.title}</h6>
                    <p className="card-text">{props.textdata}</p> 
                    <a className="card-text" href={props.mylink} target="_blank" rel="noopener noreferrer"><p className="logo">Click here to visit</p>  </a> 
                    <span className="circle" />
                </div>
            </div>
    </>
  );
};

export default ExpCard;