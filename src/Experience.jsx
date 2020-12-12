import React from 'react'
import ExpData from './ExpData'
import Card from './ExpCard'

const Experience = () =>{
  return(
      <>
      <section  className="d-flex align-items-center">
      <div className="container-fluid ">
          <div className="row">
              <div className="col-10 mx-auto">
              <h3 className="text-center mt-4 logo">Technical Skills </h3>
              <p className=" col-8 mx-auto mycontent mt-4 ">Following are the major technical skill that i have, apart from the that i have also worked on React, Sql, MySql, MongoDB, github, working on linux environment etc. . I have non-technical skills like working with team, good communication skills, 
              problem solving skill , time management skill and many more. </p>

              <p className=" col-8 java mx-auto mycontent"> Java
              <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
              </div>
              </p>

              <p className=" col-8 mx-auto python mycontent"> Python
              <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: '55%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
              </div>
              </p>

              <p className=" col-8 mx-auto web  mycontent">Web & JavaScript
              <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: '53%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">53%</div>
              </div>
              </p>

              <p className=" col-8 mx-auto science mycontent"> Data Science & ML
              <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
              </div>
              </p>



              

              <h3 className="text-center mt-4 logo">Experience</h3>

              {
                  ExpData.map((val, ind)=>{
                  return <Card key={ind}
                    title =  {val.title}
                    textdata = {val.textdata}
                    mylink = {val.mylink}
                  />
                })
              }

              </div>
              
          </div>
          </div>
          </section>
      </>
  )

}

  

export default Experience;