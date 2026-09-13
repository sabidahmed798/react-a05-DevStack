import Reacts from "../assets/react.png";
import stars from "../assets/star.png";
import Vue from "../assets/Vuejs.png";
import Svelte from "../assets/Svelte.png";
import Next from "../assets/Next.js.png";
import Node from "../assets/Nodejs.png";
import PostgreSQL from "../assets/PostgreSQL.png";
import Redis from "../assets/Redis.png";
import JavaScript from "../assets/JavaScript.png";
import typescript from "../assets/TypeScript.png";
import java from "../assets/Java.svg.png";
import Tailwind from "../assets/Tailwind CSS.png";
import Docker from "../assets/Docker.png";
const Technologies = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {/* React */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Reacts} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Popular
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">React</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A declarative, component-based
              <br />
              JavaScript library for building modern user
              <br />
              interfaces.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span className="justify-self-center ml-11">Beginner</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />
              {/* <span className="">4.9</span> */}
              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>
          {/* -------------------------- */}
          {/* Vue.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Vue} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-green-500">
                Versatile
              </span>
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">Vue.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              An approachable, performant, and versatile
              <br />
              framework for building web user interfaces.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span className="justify-self-center ml-19">Beginner</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />
              {/* <span className="">4.9</span> */}
              <h2 className="text-bold ml-auto ">4.8</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Svelte */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Svelte} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-orange-500">
                Fast
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Svelte</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              Cybernetically enhanced web apps with
              <br />
              compile-time reactivity and zero virtual
              <br />
              DOM overhead.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.8</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>
          {/* Next.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Next} alt="" />
            </div>

            <h2 className="text-base font-bold text-gray-900">Next.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              The React framework for full-stack web
              <br />
              applications with hybrid static & server
              <br />
              rendering.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />
              {/* <span className="">4.9</span> */}
              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Node.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Node} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-green-500">
                Standard
              </span>
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">Node.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              An asynchronous event-driven JavaScript
              <br />
              runtime built on Chrome's V8 engine.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Backend</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />
              {/* <span className="">4.9</span> */}
              <h2 className="text-bold ml-auto ">4.8</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* PostgreSQL */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={PostgreSQL} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Top SQL
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">PostgreSQL</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A powerful, open-source object-relational
              <br />
              database system with proven reliability.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Database</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />
              {/* <span className="">4.9</span> */}
              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Redis */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Redis} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-orange-500">
                Cache
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Redis</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              In-memory data structure store used as a
              <br />
              high-speed database, cache, and
              <br />
              message broker.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Database</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.8</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* JavaScript */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={JavaScript} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-orange-500">
                Ubiquitous
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">JavaScript</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              The versatile, ubiquitous scripting language
              <br />
              powering dynamic behavior across the
              <br />
              web.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Language</span>
              <span className="justify-self-center ml-19">Beginner</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* typescript */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={typescript} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Essential
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">TypeScript</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A strongly typed programming language
              <br />
              that builds on JavaScript for robust tooling.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Language</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>
          {/* Java */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={java} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Robust
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Java</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A secure, object-oriented programming
              <br />
              language designed for portability and <br />
              scale.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Language</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.6</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Tailwind CSS */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Tailwind} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Modern
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Tailwind CSS</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A utility-first CSS framework packed with
              <br />
              classes that can be composed to build
              <br />
              custom UI.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>Styling</span>
              <span className="justify-self-center ml-19">Beginner</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Docker */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <img src={Docker} alt="" />
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Containers
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Docker</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A strongly typed programming language
              <br />
              that builds on JavaScript for robust tooling.
            </p>

            <div className="grid grid-cols-4 mt-4  justify-between text-[10px] text-gray-500">
              <span>DevOps</span>
              <span className="justify-self-center ml-19">Intermediate</span>
              <img src={stars} alt="" className=" ml-28 h-[14px] w-[9px] " />

              <h2 className="text-bold ml-auto ">4.9</h2>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>
        </div>

        {/*  Stack */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-gray-900">Your Stack</h2>

          <p className="mt-1 text-[11px] text-gray-500">
            No technologies selected yet.
          </p>

          <div className="mt-4 flex h-20 items-center justify-center rounded-lg border border-dashed border-gray-200">
            <span className="text-xs text-gray-400">Your stack is empty.</span>
            <h2 className="text-xs text-gray-400">Your stack is empty.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
