import React from 'react'
import Sdata from './Schdata'
import Card from './Card'

const About = () =>{
    return(
        <>
        <section  className="d-flex align-items-center">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                <h3 className="text-center mt-4 logo">About Me</h3>
                <p className=" col-8 mx-auto mycontent"> 
                I am a computer science and engineering student at Gautam Buddha University, Greater Noida, India.
                I like programming and learning about new technologies. I'm Machine Learning and Data Science enthusiast. 
                Seeking an entry level job in Data Science field in a reputed company where 
                I can enhance my knowledge, skill and meet the company's goals and objectives with full integrity and zeal.
                Apart from these stuff i like playing cricket , batminton and listening music.
                </p>
                <h3 className="text-center mt-4 logo">Education</h3>

                {
                    Sdata.map((val, ind)=>{
                    return <Card key={ind}
                      imgsrc = {val.imgsrc}
                      title =  {val.title}
                      textdata = {val.textdata}
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

export default About;