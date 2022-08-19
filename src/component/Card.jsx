

import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top"   />
           <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           </div>
           <p ClassName="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam?</p>
            <NavLink to="" className="btn btn-primary">
           Get Appointment
            </NavLink>
          </div>
        </div>
     


    </>
  );
};

export default Card;
