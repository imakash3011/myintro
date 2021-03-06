import React from "react";
import email from "../src/images/email1.png"
import fb from "../src/images/fb1.png"
import insta from "../src/images/insta1.png"
import git from "../src/images/git1.png"
import twitter from "../src/images/twitter1.png"
import linkedin from "../src/images/linkedin1.png"




const Contact = () => {
  return (
    <>
      <section  className="d-flex contbody align-items-center ">
        <div className="container-fluid contbody ">
            <div className="col-10 mt-4 mx-auto">
            <h1 className="text-center mt-4 logo">Contact Me </h1>
            <p className="text-center col-4 mx-auto mt-4  ">Feel free to contact me if you wish to know more about me, just drop
            a message to anyone one of the following social media platform.</p>

            <div class="card text-center  col-6 mx-auto mt-4">
            <div class="card-body ">
                <h5 class="card-title logo">Glad to see you here</h5>
                <p class="card-text ">If you like my work and want to hire me, then kindly click on following button to send a mail to me.</p>
                <a href="mailto: imakashpatel3011@gmail.com" class="btn btn-outline-danger">Hire Me</a>
            </div>
            </div>

        <div class="d-flex text-center social col-8 mx-auto mt-4 mycard mb-5">
        <div class="card-body social mycard">            
            <a href="https://www.linkedin.com/in/imakash3011/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className=" icon order-0" alt="linkedin"></img></a>
            <a href="https://github.com/imakash3011" target="_blank" rel="noopener noreferrer"><img src={git} className="icon order-1" alt="github"></img></a>
            <a href="mailto: imakashpatel3011@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} className="icon order-2" alt="email"></img></a>
            <a href="https://twitter.com/imakash3011" target="_blank" rel="noopener noreferrer"><img src={twitter} className="icon order-3" alt="twitter"></img></a>
            <a href="https://www.facebook.com/imakash3011" target="_blank" rel="noopener noreferrer"><img src={fb} className="icon order-4" alt="facebook"></img></a>
            <a href="https://www.instagram.com/imakash3011/" target="_blank" rel="noopener noreferrer"><img src={insta} className="icon order-5" alt="instagram"></img></a>
        </div>
        </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
