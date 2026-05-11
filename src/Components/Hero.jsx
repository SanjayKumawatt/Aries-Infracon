import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/hero.avif"

const Hero = () => {
  // Framer Motion Variants for smooth, professional animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    // Matching the solid blue background from your reference screenshot
    <section className="relative w-full bg-[#165add] text-white overflow-hidden py-20 lg:py-18 border-t border-blue-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Exact illustration provided by user */}
          <motion.div 
            className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center rounded-2xl p-6"
            // Keeping the subtle float effect to integrate it smoothly
            variants={floatVariants}
            animate="animate"
          >
            {/* Integrating the exact provided illustration - larger and more central */}
            <div className="relative w-full h-full max-w-xl flex items-center justify-center">
              <img
                src={logo} // Update path based on your project structure
                alt="Aries Infracon Real Estate Operations Dashboard Illustration"
                className="w-full h-auto object-contain max-h-[85%] z-10"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Heavy Content & CTAs - Updated for Real Estate Startup */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 lg:pl-6"
          >
            {/* Concrete Startup Headline - Operational Focus for Real Estate */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Deploying SaaS Infrastructure for Real Estate Operations.
            </motion.h1>

            {/* Heavy content but highly specific and operational (Solving ONE problem) */}
            <motion.div variants={itemVariants} className="space-y-4 text-blue-100 text-[17px] leading-relaxed">
              <p>
                Aries Infracon is actively building and deploying a centralized operational software platform designed for real estate workflows. Instead of fragmented property management tools, we are writing code to solve one clear problem: unifying commercial property infrastructure and data modules.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <Building className="shrink-0 mt-1" size={18} />
                  <span><strong>Actively Testing:</strong> Unified SaaS dashboards built for property infrastructure monitoring and allocation tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="shrink-0 mt-1" size={18} />
                  <span><strong>Current Deployment:</strong> Rolling out core backend modules to handle enterprise-level real estate data synchronization.</span>
                </li>
              </ul>
            </motion.div>

            {/* CTAs matching reference: One solid white, one transparent border */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6">
              <Link to="/reach-us">
                {/* Specific CTA Label as per rules */}
                <button className="bg-white text-[#165add] px-8 py-3.5 rounded text-base font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                  Request Beta Access
                </button>
              </Link>
              <Link to="/platform">
                <button className="border-2 border-white/80 text-white px-8 py-3.5 rounded text-base font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                  Review Implementation Details
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;