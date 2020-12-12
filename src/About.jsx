import React from 'react'
import Sdata from './Sdata'
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
                I am a Computer Science Engineering student at Gautam Buddha University, Greater Noida, India.
                I am a Web Developer, Data Science and Machine Learning enthusiast. I have also a huge interest in 
                Open-Source. I like programming and learning about new technologies. Apart from these stuff i like playing 
                cricket, batminton.

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