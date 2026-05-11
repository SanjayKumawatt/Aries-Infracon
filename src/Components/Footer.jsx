import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe, Building2, ArrowRight } from 'lucide-react';
import logo from '../assets/logofooter.png'

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-zinc-300 pt-20 pb-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Company Identity - EXACT MCA NAME */}
          <div className="space-y-6">
            <div className="flex items-center gap-1">

              <img src={logo} className='h-16' alt="" />
              <div className='flex flex-col mt-3'>
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none uppercase">
                  ARIES INFRACON
                </span>
                <span className="text-[10px] font-semibold text-blue-400 tracking-[0.3em] uppercase mt-2">
                  Private Limited
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              An operational real estate tech startup focused on consolidating complex property workflows through centralized SaaS infrastructure. We are actively writing code to solve infrastructure data fragmentation.
            </p>
          </div>

          {/* Column 2: Navigation (Using unique operational page names) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-base">Platform Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/the-company" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Company Mission
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Core Implementation
                </Link>
              </li>
              <li>
                <Link to="/reach-us" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Initiate Discussion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (Mandatory Rule: Exact Address & Visible Email) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-base">Registered Office</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1/218-s, Lda Flats, Wazir Hasan Road, Gokhley Marg, Lucknow, Lucknow, Uttar Pradesh, India, 226001.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>contact@infraconaries.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-blue-500 shrink-0" />
                <span>infraconaries.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Status (Adds startup-honest weight to the footer) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-base">Current Activity</h4>
            <div className="bg-zinc-800/50 p-5 rounded border border-zinc-700">
              <p className="text-xs leading-relaxed text-zinc-400 mb-4">
                Our engineering team is currently deploying V1 of our property infrastructure API. We operate with strict transparency regarding our development phases.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                Active Testing Phase
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Final Audit Info */}
        <div className="pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[12px] text-zinc-500 font-medium">
            © 2026 ARIES INFRACON PRIVATE LIMITED. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-[12px] text-zinc-500">
            <span className="flex items-center gap-2">
              <Building2 size={14} />
              Domain: infraconaries.in
            </span>
            <span className="hidden sm:block">|</span>
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;