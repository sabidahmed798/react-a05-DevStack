const Technologies = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-extrabold text-[#0F172A] text-[36px]">
        Explore the{" "}
        <span className="font-bold bg-gradient-to-r from-red-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748B] text-[16px]">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* left side  */}

      <div>
        <div>
          <img src="" alt="" />
          <button>Popular</button>
          <h2>React</h2>
          <p>
            A declarative, component-based
            <br />
            JavaScript library for building modern user
            <br />
            interfaces.
          </p>
          <div>
            <h4>Frontend</h4>
            <h4>Beginner-Friendly</h4>
            <img src="" alt="" />
            <p>4.9</p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div></div>
    </div>
  );
};

export default Technologies;
