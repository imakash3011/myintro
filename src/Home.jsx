import React from 'react'
import mypic from "../src/images/rectImg2.png"
import {NavLink} from "react-router-dom"
import Resume from "../src/images/Resume.pdf"

const Home = ()=>{
      
    return(
      <>
      <section  className="d-flex contbody align-items-center">
            <div className="container-fluid ">
                <div className="row">
                
                    <div className="col-10 mx-auto">

                    <div className="row">  
                        <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        
                        <h5>Hello & Welcome</h5>
                        <h1 className="my-3 ">My name is <bold className="logo"> Akash Patel</bold></h1>
                            <h2 className="my-3 ">
                            I'm <span className="logo"> Learner </span> |
                            <span className="logo">  Programmer  </span> |
                            <span className="logo"> Developer </span> 
                            </h2>
                            <div  className="mt-3">
                            <a class="btn btn-outline-danger" href={Resume} download>Download CV
                            </a>

                            </div>
                        </div>

                            <div className=" col-lg-6 order-1 order-lg-2 header-img">
                            <img src={mypic} className="img-fluid  picSize" alt="My Image"/>
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