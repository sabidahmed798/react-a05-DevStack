import Logo from "../assets/Background+Shadow.png";

const Nav = () => {
  return (
    //    logo and name
    <div className="bg-[#F1F5F9]">
      <nav className=" flex items-center  justify-cente py-6 container mx-auto">
        <img src={Logo} alt="" />
        <h2 className=" font-bold text-[20px] text-[#0F172A] mx-2">
          Dev <span className="text-[#DB2777]">Stack</span>
        </h2>

        {/* center */}
        <div className="flex-1 ">
          <ul className="flex justify-center gap-4 text-[14px] font-medium cursor-pointer ">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* right side */}
        <div className="flex justify-center gap-4 text-[14px]">
          <button className="cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] text-white px-5 py-2 rounded-full cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
