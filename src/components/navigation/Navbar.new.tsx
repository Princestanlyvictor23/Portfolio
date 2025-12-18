const Navbar = () => {
  return (
    <header className="bg-[#f5f4f0] border-b-2 border-black sticky top-0 z-50 py-3 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-['Playfair_Display'] text-2xl font-bold text-black">
          PSV.
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <li>
            <a href="#about" className="text-black hover:text-gray-600 transition font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-black hover:text-gray-600 transition font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-gray-600 transition font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-black hover:text-gray-600 transition font-medium">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-gray-600 transition font-medium">
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
