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
                <p className=" col-8 mx-auto mycontent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
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