import React from 'react'
import mypic from "../src/images/alien.jpg"
import {NavLink} from "react-router-dom"

const Home = ()=>{
    return(
      <>
      <section id="header" className="d-flex align-items-center">
            <div className="container-fluid ">
                <div className="row">
                
                    <div className="col-10 mx-auto">

                    <div className="row">  
                        <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h5>Hello & Welcome</h5>
                            <h2 className="my-3 ">
                            I am <span className="logo"> Learner </span> |
                            <span className="logo">  Programmer  </span> |
                            <span className="logo"> Developer </span> 
                            </h2>
                            <div  className="mt-3">
                            <NavLink to="/" className="btn btn-outline-danger" > Download CV</NavLink>
                            </div>
                        </div>

                            <div className=" col-lg-6 order-1 order-lg-2 header-img">
                            <img src={mypic} className="img-fluid animated picSize" alt="My Image"/>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
      </section>
      </>
    )
  }
  
  
  export default Home;