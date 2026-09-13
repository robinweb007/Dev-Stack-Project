import FooterLogo from "./assets/logo-text.png";
export function Footer() {
  return (
    <>
      {/* footer */}
      <div
        className="md:mt-20 mb-4  mx-auto md:flex md:justify-around items-center
    "
      >
        {/* 1st section */}
        <div className="mb-4 mt-10">
          <img src={FooterLogo} alt="" />
          <p className="w-3/4 text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex font-semibold gap-4 mt-4 md:gap-4">
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* 2nd sectin */}
        <div className=" mb-4 mt-4 hidden md:block">
          <h2 className="font-bold">PRODUCT</h2>
          <ul className="text-[#64748B]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              {" "}
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        {/* 3rd section */}
        <div className="mb-4 mt-4 hidden md:block">
          <h2 className="font-bold">COMPANY</h2>
          <ul className="text-[#64748B]">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              {" "}
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        {/* 4th section */}
        <div className="mb-4 mt-4 hidden md:block">
          <h2 className="font-bold">LEGAL</h2>
          <ul className="text-[#64748B]">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      {/* last footer */}

      <div className="border-t mb-4 border-gray-300  flex justify-between p-5">
        <p className="text-[#64748B]">© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-4 text-[#64748B]">
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
        </ul>
      </div>
    </>
  );
}
