import banner from "./assets/banner-stack.png";
export function Banner() {
  return (
    <div className="md:flex items-center mx-auto container pb-3">
      {/* banner text section */}
      <div className="md:text-left">
        <h1 className="md:text-[60px] text-2xl text-[#0F172A] font-bold md:font-extrabold">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#D81B7E]  to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] text-[18px] md:w-3/6 py-2 ">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-6 items-center mt-2">
          <button className="btn w-42 h-10  rounded-2xl bg-gradient-to-r from-[#D81B7E]  to-[#7C3AED] text-white">
            Explore Technologies
          </button>
          <button className="btn w-42 h-10 rounded-2xl">Learn More</button>
        </div>
      </div>
      {/* image section */}
      <img src={banner} alt="" />
    </div>
  );
}
