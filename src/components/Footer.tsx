import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">DataStream API</span>
            </div>
            <p className="text-slate-400 mb-4">
              Premium data APIs for modern applications. Reliable, fast, and comprehensive.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
              <Github className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
              <Mail className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 DataStream API. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;