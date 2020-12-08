import React from "react";
import email from "../src/images/email.png"
import fb from "../src/images/fb.png"
import insta from "../src/images/insta.png"
import git from "../src/images/git.png"
import twitter from "../src/images/twitter.png"
import linkedin from "../src/images/linkedin.png"



const Contact = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center mt-1">
        <div className="container-fluid ">
            <div className="col-10 mx-auto">
            <h1 className="text-center logo">Contact Us</h1>
            <p className="text-center col-4 mx-auto mt-4 ">If you wish to know more about me, just drop
            a message to anyone one of the following social media platform.</p>

            <div class="card text-center col-6 mx-auto mt-4">
            <div class="card-body">
                <h5 class="card-title">Glad to see you here</h5>
                <p class="card-text">If you like my work and want to hire me, than kindly click on following button to send a mail to me.</p>
                <a href="#" class="btn btn-outline-danger">Hire Me</a>
            </div>
            </div>

        <div class="d-flex text-center col-8 mx-auto mt-5 mycard">
        <div class="card-body mycard">
            <img src={linkedin} className=" icon order-0"></img>
            <img src={git} className="icon order-1"></img>
            <img src={email} className="icon order-2"></img>
            <img src={twitter} className="icon order-3"></img>
            <img src={fb} className="icon order-4"></img>
            <img src={insta} className="icon order-5"></img>
        </div>
        </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
