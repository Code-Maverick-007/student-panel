import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CAREER SARTHI</h3>
            <p className="text-gray-400">Empowering students to make informed career decisions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/colleges" className="text-gray-400 hover:text-white transition-colors">Colleges</Link></li>
              <li><Link to="/career-explorer" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/scholarships" className="text-gray-400 hover:text-white transition-colors">Scholarships</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400">contact@careersarthi.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CAREER SARTHI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
