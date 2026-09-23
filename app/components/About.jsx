import React from "react";
import AnimatedContent from './AnimatedContent';

export default function About() {
  return (

    <section className="about my-10 bg-white  " id="about">

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
  <div className="aboutContent border border-slate-950 p-4 w-[90%]   md:w-[50%]  m-auto shadow-[20px_20px_0px_#020618]  ">
    <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
    <p className="text-lg text-slate-700 mt-3">
      I'm a Junior Frontend Developer specializing in React.js and Next.js. I
      enjoy building modern, responsive web applications with clean and
      maintainable code. I have hands-on experience with TypeScript, Tailwind
      CSS, JavaScript, REST APIs, and state management. Through my training and
      projects, I've worked on real-world applications such as e-commerce and
      social media platforms, focusing on creating smooth and user-friendly
      experiences. I'm continuously learning and improving my skills while
      building practical projects and exploring modern frontend technologies.
      
    </p>
    <p className="text-lg text-slate-700 mt-3">
      Education : Bachelor of Computer Science, Cairo University — Expected 2027
    </p>
    <p className="text-lg text-slate-700 mt-3">
      Courses : Frontend Development Diploma — Route Academy
    </p>
    <p className="text-lg text-slate-700 mt-3">
      Internships / Experience : React.js Intern — ITI
    </p>
  </div>
</AnimatedContent>;
  </section>
)
}


