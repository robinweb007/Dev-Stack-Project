import FooterLogo from './assets/logo-text.png'
export function Footer() {

  return (
    <div className='mt-10 mb-4 container mx-auto
    '>
      {/* 1st section */}
      <div>
        <img src={FooterLogo} alt="" />
        <p className='w-3/4'>
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <ul className='flex font-semibold mt-4 md:gap-4'>
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
      <div>
        <h2>PRODUCT</h2>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
