import Logo from "./assets/logo-text.png";
export function Nav() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center px-4 py-3">
        {" "}
        {/* Hamburger - Mobile */} <div className="md:hidden"> ☰ </div>
        {/* Logo */} <img src={Logo} alt="Logo" />
        {/* Menu - Desktop */}
        <ul className="hidden md:flex gap-5 items-center font-semibold text-[14px] text-[#334155]">
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>
            <a href="">Technologies</a>{" "}
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>{" "}
        </ul>
        {/* Buttons */}
        <div>
          <button className="font-semibold text-[18px] text-[#334155]">
            <a href="">Sign In</a>
          </button>{" "}
          <button className="btn rounded-full bg-[#D91B7E] text-white ml-4">
            Sign Up
          </button>
        </div>
        {/* Logo - Desktop */}
        <img src={Logo} alt="Logo" className="hidden md:block absolute" />
      </nav>
    </div>
  );
}
