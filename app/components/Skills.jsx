
export default function Skills() {
  return (
    <section className="skills my-10" id="skills">
        <h2 className="text-4xl font-bold text-center text-slate-950">Skills</h2>
      <div className="skillsContent w-[80%] m-auto grid grid-cols-2 md:grid-cols-3 gap-5 mt-3">
        <span className="text-lg hover:bg-slate-100 font-bold duration-300  hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            HTML5
            <i className=" mx-2 fa-brands fa-html5"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            CSS3
            <i className=" mx-2 fa-brands fa-css"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            JavaScript(ES6+) <i className=" mx-2 fa-brands fa-js"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            React.js <i className=" mx-2 fa-brands fa-react"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            Next.js
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            Tailwind CSS
            <i className="fa-brands mx-2 fa-tailwind-css"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            Bootstrap
            <i className=" mx-2 fa-brands fa-bootstrap"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            git&github <i className=" mx-2 fa-brands fa-github"></i>
        </span>
        <span className="text-lg hover:bg-slate-100 font-bold duration-300 hover:text-slate-950 bg-slate-950 text-white px-5 py-3   text-center  border mt-3">
            REST APIs
        </span>
        
      </div>
    </section>
  )
}
