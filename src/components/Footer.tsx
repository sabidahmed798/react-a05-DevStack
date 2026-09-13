import Logo from "../assets/Background+Shadow.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#F1F5F9] bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-7">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
          {/* LEFT SIDE */}
          <div>
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Dev Stack Logo"
                className="h-6 w-6 object-contain"
              />

              <h2 className="text-[13px] font-bold text-[#0F172A]">
                Dev <span className="text-[#DB2777]">Stack</span>
              </h2>
            </div>

            {/* Description */}
            <p className="mt-3 max-w-[310px] text-[9px] leading-[14px] text-[#94A3B8]">
              Curated tools, technologies, and resources for developers building
              <br />
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-[9px] font-medium text-[#334155] transition hover:text-[#DB2777]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[9px] font-medium text-[#334155] transition hover:text-[#DB2777]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[9px] font-medium text-[#334155] transition hover:text-[#DB2777]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-wide text-[#0F172A]">
                Product
              </h3>

              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-wide text-[#0F172A]">
                Company
              </h3>

              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-[9px] font-bold uppercase tracking-wide text-[#0F172A]">
                Legal
              </h3>

              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[9px] text-[#64748B] transition hover:text-[#DB2777]"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#F1F5F9]">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Copyright */}
          <p className="text-[8px] text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          {/* Privacy + Terms */}
          <div className="mr-10 flex items-center gap-5">
            <a
              href="#"
              className="text-[8px] text-[#94A3B8] transition hover:text-[#DB2777]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[8px] text-[#94A3B8] transition hover:text-[#DB2777]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
