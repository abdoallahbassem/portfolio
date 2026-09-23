import React from "react";
import AnimatedContent from "./AnimatedContent";

export default function Contact() {
  return (
    <section className=" my-10 bg-white  " id="contact">
      <h2 className="text-4xl font-bold text-center text-slate-950 mb-7">
        Contact Me
      </h2>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className="aboutContent border border-slate-950 p-3 w-[90%]   md:w-[50%]  m-auto shadow-[20px_20px_0px_#020618]  ">
          <h2 className="text-4xl my-2 mb-5 font-bold text-slate-900">
            Let's Work Together
          </h2>
          <p className="text-lg bg-slate-950 text-slate-100 p-3 mt-3">
            Email:{" "}
            <a
              href="mailto:abdoallahbassem@gmail.com"
              rel="noopener noreferrer"
            >
              abdoallahbassem@gmail.com <i className="fas mx-1 fa-envelope"></i>
            </a>
          </p>
          <p className="text-lg text-slate-700 mt-3 py-1 p-3">
            {" "}
            phone:{" "}
            <a href="tel:+201100467303">
              +20 1100467303 <i className="fas mx-1 fa-phone"></i>
            </a>
          </p>
          <p className="text-lg mt-3 bg-slate-950 text-slate-100  p-3">
            What's App:{" "}
            <a
              href="https://wa.me/201100467303"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <i className="fab mx-1 fa-whatsapp"></i>
            </a>
          </p>
          <p className="text-lg text-slate-700 mt-3 py-1 p-3">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/abdoallah-bassem-86316327b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my LinkedIn <i className="fab mx-1 fa-linkedin"></i>
            </a>
          </p>
          <p className="text-lg mt-3 bg-slate-950 text-slate-100  p-3">
            GitHub:{" "}
            <a
              href="https://github.com/abdoallahbassem"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub <i className="fab mx-1 fa-github"></i>
            </a>
          </p>
        </div>
      </AnimatedContent>
      
    </section>
  );
}
