import React from "react";
import Reacts from "../assets/react.png";

const Technologies = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {/* React */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              {/* <div className="text-2xl">⚛️</div> */}
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

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span>Beginner Friendly</span>
              <span className="text-yellow-500">★ 4.9</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Vue.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🟢</div>
              <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] text-green-500">
                Popular
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Vue.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              An approachable, performant and versatile framework for building
              web interfaces.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span>Beginner</span>
              <span className="text-yellow-500">★ 4.8</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Svelte */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🟠</div>
              <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] text-orange-500">
                Fast
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Svelte</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              Compiler-based framework that shifts work from the browser to
              build time.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Frontend</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.6</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Next.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">⚫</div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
                Framework
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Next.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              The React framework for the web with powerful features.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Framework</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.9</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Node.js */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🟢</div>
              <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] text-green-600">
                Backend
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Node.js</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A JavaScript runtime built on Chrome's V8 JavaScript engine.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Backend</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.8</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* PostgreSQL */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🐘</div>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-500">
                Database
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">PostgreSQL</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A powerful, open source object-relational database system.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Database</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.9</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* JavaScript */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🟨</div>
              <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] text-yellow-600">
                Essential
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">JavaScript</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              The versatile, lightweight programming language of the web.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Language</span>
              <span>Beginner</span>
              <span className="text-yellow-500">★ 4.9</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Java */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">☕</div>
              <span className="rounded-full bg-cyan-50 px-2 py-1 text-[10px] text-cyan-600">
                Robust
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Java</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A popular general-purpose programming language.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Language</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.7</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Tailwind CSS */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🌊</div>
              <span className="rounded-full bg-cyan-50 px-2 py-1 text-[10px] text-cyan-600">
                Modern
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Tailwind CSS</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A utility-first CSS framework for rapidly building modern UIs.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>Styling</span>
              <span>Beginner</span>
              <span className="text-yellow-500">★ 4.9</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>

          {/* Docker */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-2xl">🐳</div>
              <span className="rounded-full bg-cyan-50 px-2 py-1 text-[10px] text-cyan-600">
                Container
              </span>
            </div>

            <h2 className="text-base font-bold text-gray-900">Docker</h2>

            <p className="mt-2 h-12 text-[11px] leading-4 text-gray-500">
              A platform designed to help developers build and run applications.
            </p>

            <div className="mt-4 flex justify-between text-[10px] text-gray-500">
              <span>DevOps</span>
              <span>Intermediate</span>
              <span className="text-yellow-500">★ 4.7</span>
            </div>

            <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[11px] font-medium text-white hover:bg-slate-800">
              Add to Stack
            </button>
          </div>
        </div>

        {/* Your Stack */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-gray-900">Your Stack</h2>

          <p className="mt-1 text-[11px] text-gray-500">
            The technologies you have selected.
          </p>

          <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-gray-200">
            <span className="text-xs text-gray-400">Your stack is empty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
