import Banners from "../assets/banner-image.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid min-h-[420px] grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
      {/* Banner Left */}
      <div className="py-6 md:py-12">
        <h1 className="text-4xl font-extrabold leading-tight text-[#0F172A] md:text-6xl">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-red-500 via-fuchsia-600 to-purple-700 bg-clip-text font-bold text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="py-6 text-[16px] leading-7 text-[#475569] md:text-[18px]">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden md:block" />
          compare them side by side, and put together the stack that fits your
          <br className="hidden md:block" />
          next project.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-5 py-2 text-white shadow-md transition duration-300 hover:opacity-90"
          >
            Explore Technologies
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-xl border border-[#E5E7EB] bg-white px-5 py-2 text-black"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Banner Right */}
      <div className="flex justify-center">
        <img
          src={Banners}
          alt="Development Stack"
          className="w-full max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Banner;
