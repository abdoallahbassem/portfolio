import LightRays from "./background";
import MyWork from "./MyWork";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
export default function Hero() {
  return (
    <>
      <section className="hero relative h-screen bg-slate-950 overflow-hidden">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-2.5 border border-slate-800 bg-slate-950/40 backdrop-blur-md shadow-lg text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">
            About Me
          </a>
          <a href="#mywork" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="/Abdallah_Bassem_CV-1.pdf"
            target="_blank"
            download
            className="flex items-center gap-1.5 px-3 py-1  bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors text-xs"
          >
            Resume{" "}
            <i className="fas fa-download text-slate-950 text-[10px]"></i>
          </a>
        </nav>

        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />{" "}
        </div>
        <div className="relative z-10 flex h-full flex-col  items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-12">
            <div className="welcome w-[90%] md:w-full ">
              <h1 className="text-5xl font-bold text-white">
                Hi, I'm Abdallah <br /> <span>Front-End Developer</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                I build modern, responsive web applications using React and
                Next.js.
              </p>
            </div>
          </div>
          <div className="btns flex gap-4">
            <a href="#mywork">
              <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                View My Work
              </button>
            </a>
            <a href="#contact">
              <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm hover:bg-slate-300 hover:text-slate-950 duration-200 shadow-slate-500 text-white">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>
      <About />
      <MyWork />
      <Skills />
      <Contact />
      <footer className="bg-slate-950   text-center py-4 mt-10">
        <p className="text-white my-2 text-sm">
          © 2026 Abdallah Bassem  
        </p>
        <p className="text-white text-sm">
          Built with Next.js & Tailwind CSS
        </p>

      </footer>
    </>
  );
}
