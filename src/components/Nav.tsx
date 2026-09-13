import Logo from "../assets/Background+Shadow.png";

const Nav = () => {
  return (
    <div className="bg-[#F1F5F9]">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src={Logo} alt="DevStack Logo" />

          <h2 className="mx-2 text-[20px] font-bold text-[#0F172A]">
            Dev <span className="text-[#DB2777]">Stack</span>
          </h2>
        </div>

        {/* Center */}
        <div className="hidden flex-1 md:block">
          <ul className="flex cursor-pointer justify-center gap-4 text-[14px] font-medium">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex justify-center gap-4 text-[14px]">
          <button type="button" className="cursor-pointer">
            Sign In
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#D91B7E] px-5 py-2 text-white"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
