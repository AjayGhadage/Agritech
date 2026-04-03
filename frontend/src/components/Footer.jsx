import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

// Inline social SVG icons (not available in newer lucide-react)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#1A2E24] pt-20 pb-10 text-white overflow-hidden mt-auto">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-700/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="AgriArya" className="w-12 h-12 object-contain rounded-xl bg-white/10 p-1" />
              <span className="font-black text-2xl tracking-tighter">Agri<span className="text-green-400">Arya</span></span>
            </Link>
            <p className="text-green-100/70 text-sm leading-relaxed">
              Empowering Indian farmers with AI-driven insights for soil analysis, disease detection, and real-time market data.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-700 transition-all duration-300">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-700 transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Twitter / X" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-700 transition-all duration-300">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-green-500 w-fit pb-1">Platform</h4>
            <ul className="space-y-4 text-green-100/70 text-sm">
              <li><Link to="/crop" className="hover:text-white transition-colors">AI Crop Analysis</Link></li>
              <li><Link to="/disease" className="hover:text-white transition-colors">Disease Detection</Link></li>
              <li><Link to="/prices" className="hover:text-white transition-colors">Live Market Prices</Link></li>
              <li><Link to="/advisory" className="hover:text-white transition-colors">Weather Advisory</Link></li>
              <li><Link to="/calendar" className="hover:text-white transition-colors">Farming Calendar</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-green-500 w-fit pb-1">Resources</h4>
            <ul className="space-y-4 text-green-100/70 text-sm">
              <li><Link to="/subsidies" className="hover:text-white transition-colors">Government Schemes</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors">Fertilizer Calculator</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Logistics Helper</Link></li>
              <li><Link to="/history" className="hover:text-white transition-colors">User Dashboard</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-green-500 w-fit pb-1">Get in Touch</h4>
            <ul className="space-y-4 text-green-100/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-400 mt-1 shrink-0" size={16} />
                <span>Green Innovation Hub, Savitribai Phule Pune University, Pune, MH 411007</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-400 shrink-0" size={16} />
                <span>support@agriarya.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-400 shrink-0" size={16} />
                <span>+91 91234 56789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-100/40 tracking-wider uppercase">
          <p>© 2026 AgriArya. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500 mx-1" /> for Indian Farmers
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
