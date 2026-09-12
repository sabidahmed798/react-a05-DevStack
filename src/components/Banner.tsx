import Banners from "../assets/banner-image.png";
const Banner = () => {
  return (
    <div className=" grid grid-cols-2 container mx-auto m-h[420px] py-35.5 ">
      {/* banner left */}
      <div className="py-12.5 items-center justify-between ">
        <h1 className="text-[#0F172A] text-6xl font-extrabold ">
          Build Your Ideal <br />
          <span className=" font-bold bg-gradient-to-r from-red-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[18px] py-6 text-[#475569]">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>
        <div>
          <button className=" ml-0 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white px-5 py-2 mx-4 rounded-xl cursor-pointer shadow-md hover:opacity-90 transition duration-300">
            Explore Technologies
          </button>
          <button className="bg-white text-black border border-[#E5E7EB] px-5 py-2 rounded-xl cursor-pointer ">
            Learn More
          </button>
        </div>
      </div>

      {/* banner right */}
      <div className="justify-center ml-auto mx-17.25 py-25 px-5">
        <img src={Banners} alt="" />
      </div>
    </div>
  );
};

export default Banner;
