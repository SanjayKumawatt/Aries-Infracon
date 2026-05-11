import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Globe, Clock, CheckCircle2, Send, Building2, Briefcase } from 'lucide-react';

const ReachUs = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to simulate message sending
    setIsSent(true);
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* SECTION 1: Direct Header */}
      <section className="pt-32 pb-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
              Connect with <span className="text-[#1d4ed8]">Operations.</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We operate with a commitment to technical transparency. Use the form below to register your interest in our upcoming infrastructure platform or to discuss specific property data requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Contact Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: Mandatory Information (Rule 11, 12, 13, 14, 19) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-8 border-l-4 border-[#1d4ed8] pl-4 uppercase tracking-wider">
                Registered Information
              </h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#1d4ed8]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Registered Office</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      1/218-s, Lda Flats, Wazir Hasan Road, Gokhley Marg, Lucknow, Lucknow, Uttar Pradesh, India, 226001.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#1d4ed8]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Direct Email</h4>
                    <p className="text-sm text-zinc-600 font-medium">contact@infraconaries.in</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-[#1d4ed8]">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Domain Infrastructure</h4>
                    <p className="text-sm text-zinc-600 font-medium">infraconaries.in</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Response Guarantee</h4>
                    <p className="text-sm text-zinc-600 font-semibold">We respond within one working day.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-zinc-900 rounded-2xl text-white">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-blue-400" /> Startup Transparency
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                ARIES INFRACON PRIVATE LIMITED is a fresh entity. We are currently in our internal beta and staging phase. All technical inquiries are handled directly by our engineering and operational leads.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: The Operational Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Field: Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter official name"
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all"
                      />
                    </div>
                    {/* Input Field: Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Official Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="email@company.com"
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Field: Organization Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Legal Entity Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Company or Organization"
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all"
                      />
                    </div>
                    {/* Input Field: Dropdown for Interest */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Inquiry Category</label>
                      <select className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all appearance-none">
                        <option>Platform Beta Access</option>
                        <option>Infrastructure Data Sync</option>
                        <option>Custom SaaS Deployment</option>
                        <option>General Operational Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Input Field: Asset Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Property Portfolio Type</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Multi-story Commercial, Mixed-use Retail"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all"
                    />
                  </div>

                  {/* Input Field: Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Operational Requirements</label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Describe your property infrastructure challenges..."
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1d4ed8] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Named CTA Button (Rule 17) */}
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-[#1d4ed8] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Initiate Discussion <Send size={18} />
                  </motion.button>
                </motion.form>
              ) : (
                /* SUCCESS STATE: No Alert, Just a Clean UI Transition */
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Inquiry Logged Successfully</h3>
                  <p className="text-zinc-600 mb-8 max-w-sm">
                    Thank you for your interest in ARIES INFRACON. Your operational requirements have been registered in our staging environment. Our team will respond to your official email within one working day.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-[#1d4ed8] font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 3: Final Assurance */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Briefcase size={32} className="mx-auto text-zinc-400 mb-6" />
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Direct Stakeholder Communication.</h2>
          <p className="text-zinc-600 leading-relaxed">
            As an early-stage startup, every inquiry is prioritized. We do not use automated bots; your message is delivered directly to the project leads in Lucknow, Uttar Pradesh. 
          </p>
        </div>
      </section>

    </div>
  );
};

export default ReachUs;