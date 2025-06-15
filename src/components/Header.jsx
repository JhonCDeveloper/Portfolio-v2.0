function Header() {
  return (
    <header className=" bg-mainBlack text-fontGray p-4 md:p-6">
      <ul className="flex justify-around gap-5 md:justify-end items-center">
        <li className="text-lg font-mona hover:text-darkRed hover:font-bold"><a href="#home">HOME</a></li>
        <li className="text-lg font-mona hover:text-darkRed hover:font-bold"><a href="#projects">PROJECTS</a></li>
        <li className="text-lg font-mona hover:text-darkRed hover:font-bold"><a href="#about">ABOUT</a></li>
        <li className="text-lg font-mona hover:text-darkRed hover:font-bold"><a href="#contact">CONTACT</a></li>
      </ul>
    </header>
  );
}

export default Header;