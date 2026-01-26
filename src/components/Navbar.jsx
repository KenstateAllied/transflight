import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header data-aos="fade-up" className="bg-black shadow relative z-[100]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-red-600">
          <img className='w-[70px] h-[70px] rounded-full' src="/logos/uasin-gishu.jpg" alt="Dhwanika Logo" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="hover:text-red-600">Countries</span>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full z-[999] bg-white text-black shadow-lg p-4 w-[900px]">
                <div className="grid grid-cols-5 gap-6">
                  {/* India */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Top Study Destinations</h4>
                    <ul className="space-y-1 text-sm">
                       <li>Australia</li>
                      <li>UK</li>
                      <li>Canada</li>
                      <li>USA</li>
                      <li>Ireland</li>
                      <li>China</li>
                       <li>France</li>
                      <li>Italy</li>
                      <li>Germany</li>
                      <li>Switzerland</li>
                      <li>Greece</li>
                      <li>Turkey</li>
                    </ul>
                  </div>
                  {/* Asia */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Top Unskilled Destinations</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Dubai</li>
                      <li>Israel - Jordan</li>
                      <li>Oman</li>
                      <li>Saudi Arabia</li>
                      <li>Uzbekistan</li>
                    </ul>
                  </div>
                  {/* Europe */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Top skilled Destinations</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Australia</li>
                      <li>UK</li>
                      <li>Canada</li>
                      <li>USA</li>
                      <li>Ireland</li>
                      <li>China</li>
                       <li>France</li>
                      <li>Italy</li>
                      <li>Germany</li>
                      <li>Switzerland</li>
                      <li>Greece</li>
                      <li>Turkey</li>
                    </ul>
                  </div>
                  {/* Middle East */}

                  {/* Other Regions */}
                
                </div>
              </div>
            )}
          </li>

          <li><Link to="/visas" className="hover:text-red-600">Visas</Link></li>
          <li><Link to="/flights" className="hover:text-red-600">Studies</Link></li>
          <li><Link to="/hotels" className="hover:text-red-600">Work</Link></li>
          <li><Link to="/offers" className="hover:text-red-600">Roadmap</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600">About</Link></li>
            <li><Link to="/offers" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Offers</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center">Login</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
