import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#12131E] dark:bg-[#12131E] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">StudentWork</h3>
            <p className="text-gray-400 mb-4">
              Connecting students with opportunities for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-400 hover:text-purple-500">Browse Jobs</Link></li>
              <li><Link to="/gigs" className="text-gray-400 hover:text-purple-500">Side Gigs</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-purple-500">Learning</Link></li>
              <li><Link to="/resume-builder" className="text-gray-400 hover:text-purple-500">Resume Builder</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-gray-400 hover:text-purple-500">Post a Job</Link></li>
              <li><Link to="/talent-search" className="text-gray-400 hover:text-purple-500">Search Talent</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-purple-500">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-purple-500">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-500">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-purple-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-purple-500">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1F2937]">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} StudentWork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}