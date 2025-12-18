const Navbar = () => {
  return (
    <header className="bg-[#f9f7f1] border-b-2 border-black sticky top-0 z-50 py-3 px-6 transition-shadow duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="font-['Playfair_Display'] text-xl font-bold tracking-tighter hover:text-[#8b0000] transition-colors">
          P.S.V.
        </a>

          {/* LINKS */}
          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-sans text-gray-700 font-bold">
          <li>
            <a href="#about" className="hover:text-black hover-underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-black hover-underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black hover-underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black hover-underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black hover-underline">
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
