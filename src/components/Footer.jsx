import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer   data-aos="fade-up" className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Uasin Gishu Overseas Project</h3>
          <p className="text-sm text-gray-400">Your trusted partner for work & studies abroad.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/offers" className="hover:text-red-500">Offers</Link></li>
            <li><Link to="/blog" className="hover:text-red-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Overseas</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/tours/domestic" className="hover:text-red-500">Work</Link></li>
            <li><Link to="/tours/international" className="hover:text-red-500">Studies</Link></li>
            <li><Link to="/plan-trip" className="hover:text-red-500">Plan ahead</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Facebook</a></li>
            <li><a href="#" className="hover:text-red-500">Instagram</a></li>
            <li><a href="#" className="hover:text-red-500">Twitter</a></li>
            <li><a href="#" className="hover:text-red-500">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Uasin Gishu Overseas Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
