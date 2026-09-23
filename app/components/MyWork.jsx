import React from "react";
import AnimatedContent from "./AnimatedContent";
import Link from "next/link";

export default function MyWork() {
  return (
    <section id="mywork" className="myWork my-10 ">
      <h2 className="text-4xl font-bold text-center text-slate-950 mb-10">My Work</h2>
      <div className="cards w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-7 my-10">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="card text-slate-950 border-1 border-slate-950 shadow-[10px_10px_0px_#020618]">
            <div className="header flex justify-between items-center p-2 border-b text-sm font-bold text-gray-600  border-slate-950 ">
              <span>01</span>
              <span>react</span>
            </div>
            <div className="project p-2 text-slate-600 border-b border-slate-950 ">
              <h3 className="text-xl font-bold  text-slate-950 mb-1 ">
                E-Commerce Store
              </h3>
              <p className=" text-slate-950 mb-2">
                Responsive e-commerce store with product categories, cart,
                wishlist, authentication, and checkout with online and cash
                payment options.
              </p>
              <p className="font-bold text-sm mb-1">
                tech stack :{" "}
                <span className="text-sm text-slate-500 ">
                  Next.js • TypeScript • Tailwind CSS • NextAuth • Stripe
                </span>
              </p>
            </div>
            <div className="btn flex gap-7 p-2 justify-center items-center">
              <Link href="https://e-commerce-397e.vercel.app/" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Project
                </button>
              </Link>
              <Link href="https://github.com/abdoallahbassem/E-Commerce.git" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Code
                </button>
              </Link>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="card text-slate-950 border-1 border-slate-950 shadow-[10px_10px_0px_#020618]">
            <div className="header flex justify-between items-center p-2 border-b text-sm font-bold text-gray-600 border-slate-950">
              <span>02</span>
              <span>react</span>
            </div>

            <div className="project p-2 text-slate-600 border-b border-slate-950">
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Social Media App
              </h3>

              <p className="text-slate-950 mb-2">
                Responsive social media app with posts, comments, likes, shares,
                bookmarks, notifications, and user profiles.
              </p>

              <p className="font-bold text-sm mb-1">
                tech stack:{" "}
                <span className="text-sm text-slate-500">
                  React • Tailwind CSS • React Query • Axios
                </span>
              </p>
            </div>

            <div className="btn flex gap-7 p-2 justify-center items-center">
              <Link href="https://social-app-wvko.vercel.app/" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Project
                </button>
              </Link>

              <Link href="https://github.com/abdoallahbassem/social-app.git" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Code
                </button>
              </Link>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="card text-slate-950 border-1 border-slate-950 shadow-[10px_10px_0px_#020618]">
            <div className="header flex justify-between items-center p-2 border-b text-sm font-bold text-gray-600 border-slate-950">
              <span>03</span>
              <span>javascript</span>
            </div>

            <div className="project p-2 text-slate-600 border-b border-slate-950">
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Product Management
              </h3>

              <p className="text-slate-950 mb-2">
                Product management system with create, update, delete, search,
                validation, and persistent data using LocalStorage.
              </p>

              <p className="font-bold text-sm mb-1">
                tech stack:{" "}
                <span className="text-sm text-slate-500">
                  HTML • CSS • JavaScript • LocalStorage
                </span>
              </p>
            </div>

            <div className="btn flex gap-7 p-2 justify-center items-center">
              <Link href="https://cruds-operations-app.vercel.app/" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Project
                </button>
              </Link>

              <Link href="https://github.com/abdoallahbassem/cruds-operations-app" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Code
                </button>
              </Link>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="card text-slate-950 border-1 border-slate-950 shadow-[10px_10px_0px_#020618]">
            <div className="header flex justify-between items-center p-2 border-b text-sm font-bold text-gray-600 border-slate-950">
              <span>04</span>
              <span>html / css</span>
            </div>

            <div className="project p-2 text-slate-600 border-b border-slate-950">
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Responsive Website
              </h3>

              <p className="text-slate-950 mb-2">
                Clean and responsive website built with a focus on modern
                design, responsive layouts, and a consistent user experience
                across devices.
              </p>

              <p className="font-bold text-sm mb-1">
                tech stack:{" "}
                <span className="text-sm text-slate-500">HTML • CSS</span>
              </p>
            </div>

            <div className="btn flex gap-7 p-2 justify-center items-center">
              <Link href="https://daniels-nine-omega.vercel.app/" target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Project
                </button>
              </Link>

              <Link href="https://github.com/abdoallahbassem/daniels"  target="_blank">
                <button className="cursor-pointer  bg-slate-950 px-4 py-2 font-bold shadow-sm shadow-slate-500 hover:bg-slate-300 hover:text-slate-950 duration-200 text-white">
                  View Code
                </button>
              </Link>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
