import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Database, Code2, Terminal, 
  Cpu, Lock, ArrowRight, GitMerge, Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
  // Staggered animations for a technical, cascading load effect
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full bg-zinc-50 text-zinc-900 font-sans selection:bg-[#1d4ed8] selection:text-white">
      
      {/* SECTION 1: Technical Hero (No images, Data-heavy "Dashboard" Aesthetic) */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-200">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
            The Core Implementation of Aries Infracon.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-12">
            We are replacing legacy real estate tracking with programmable, API-driven software. This document outlines the exact technical stack, database schemas, and microservices our engineering team is actively compiling and testing.
          </p>
        </motion.div>

        {/* Live Status Grid (Mockup of operational metrics) */}
        <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
          {[
            { label: "Environment", value: "Staging (Internal)" },
            { label: "Deployment", value: "Containerized" },
            { label: "API Protocol", value: "RESTful" },
            { label: "Security", value: "RBAC & JWT Testing" }
          ].map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white border border-zinc-200 p-5 rounded-lg shadow-sm">
              <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="block text-sm font-semibold text-zinc-900">{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 2: Architecture Layers (Deep Dive Vertical Stack Layout) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">Architecture Stack Breakdown</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              To consolidate property workflows, the infrastructure must be decoupled. We are building Aries Infracon using distinct operational layers to ensure that massive datasets from commercial properties do not create frontend latency.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Layer 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row gap-8 bg-zinc-50 border border-zinc-200 p-8 rounded-xl hover:border-[#3b82f6] transition-colors group">
              <div className="md:w-1/4 shrink-0">
                <div className="w-16 h-16 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors mb-4">
                  <Database size={28} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Layer 01</h3>
                <span className="text-sm font-semibold text-[#3b82f6]">Data Storage</span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <h4 className="text-2xl font-bold text-zinc-900">Custom Property Schemas</h4>
                <p className="text-zinc-600 leading-relaxed">
                  Off-the-shelf databases cannot handle the hierarchical complexity of commercial real estate. Our database engineers are writing custom schemas to securely isolate tenant logic, facility allocation records, and hardware telemetry. We are actively testing indexing strategies to ensure rapid query responses when the platform scales.
                </p>
              </div>
            </motion.div>

            {/* Layer 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row gap-8 bg-zinc-50 border border-zinc-200 p-8 rounded-xl hover:border-[#3b82f6] transition-colors group">
              <div className="md:w-1/4 shrink-0">
                <div className="w-16 h-16 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors mb-4">
                  <GitMerge size={28} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Layer 02</h3>
                <span className="text-sm font-semibold text-[#3b82f6]">API Gateway</span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <h4 className="text-2xl font-bold text-zinc-900">Aggregated Microservices</h4>
                <p className="text-zinc-600 leading-relaxed">
                  The core of Aries Infracon relies on our RESTful API gateway. Instead of a single monolithic backend, we are writing isolated microservices for billing, resource allocation, and facility access. Our current sprint is focused on finalizing the routing logic so these services can communicate seamlessly without data collision.
                </p>
              </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row gap-8 bg-zinc-50 border border-zinc-200 p-8 rounded-xl hover:border-[#3b82f6] transition-colors group">
              <div className="md:w-1/4 shrink-0">
                <div className="w-16 h-16 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors mb-4">
                  <Code2 size={28} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Layer 03</h3>
                <span className="text-sm font-semibold text-[#3b82f6]">Client Application</span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <h4 className="text-2xl font-bold text-zinc-900">Programmable Dashboards</h4>
                <p className="text-zinc-600 leading-relaxed">
                  The frontend architecture is being compiled using modern React frameworks. We are designing the interface to act as a command center, allowing property managers to execute infrastructure changes through the UI, which our APIs then translate into secure backend commands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Security & Deployment Protocols (Terminal Aesthetic) */}
      <section className="py-24 bg-[#0f172a] text-zinc-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
              <div className="bg-[#1e293b] rounded-lg border border-zinc-700 shadow-2xl overflow-hidden font-mono text-sm">
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-zinc-500 text-xs">deployment-protocol.sh</span>
                </div>
                <div className="p-6 space-y-4 text-blue-300">
                  <p><span className="text-zinc-500"># Initializing security audit...</span></p>
                  <p><span className="text-green-400">✓</span> Container isolated successfully.</p>
                  <p><span className="text-green-400">✓</span> JWT Authentication middleware applied.</p>
                  <p><span className="text-yellow-400">⚠</span> PENDING: Cross-Origin Resource Sharing (CORS) policy mapping.</p>
                  <p><span className="text-zinc-500"># Compiling core operational data...</span></p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <Lock className="text-[#3b82f6] mb-6" size={40} />
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">
                Security Implementation.
              </h2>
              <div className="space-y-5 leading-relaxed">
                <p>
                  Because we are handling sensitive commercial real estate data, security cannot be an afterthought. We do not claim to have "military-grade" encryption for a product that is still under internal development. That is marketing fiction.
                </p>
                <p>
                  Instead, we are transparently building enterprise-standard security into our foundation today. Our DevOps engineers are actively configuring container registries to ensure our staging environments are completely segregated from public networks. 
                </p>
                <p>
                  When Aries Infracon launches, it will deploy with strict Role-Based Access Control (RBAC), ensuring that infrastructure operations are executed only by authenticated, authorized personnel.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Heavy Text Block - The Development Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <Server className="mx-auto text-[#1d4ed8] mb-6" size={40} />
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-6">
              Active Staging Pipeline
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We are moving methodically towards our beta release. Below is a detailed look at the current state of our internal engineering pipeline and what we are compiling next.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                <Cpu size={20} className="text-[#3b82f6]" /> Integration Testing
              </h3>
              <p className="text-zinc-600 text-[15px] leading-relaxed border-l-2 border-[#1d4ed8] pl-4">
                Our team is currently running load tests on our primary databases to ensure they can sustain simultaneous queries from multiple simulated property dashboards without dropping packet data. We are refining our API response times before moving to external deployment.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                <Terminal size={20} className="text-[#3b82f6]" /> Developer Portal
              </h3>
              <p className="text-zinc-600 text-[15px] leading-relaxed border-l-2 border-[#1d4ed8] pl-4">
                Simultaneous to our core SaaS application, we are architecting an external API gateway. This will eventually allow enterprise clients to connect their existing legacy PropTech software directly into the Aries Infracon data layer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Simple CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-6">
              Require Deeper Technical Specs?
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10">
              If your organization is managing complex commercial infrastructure and wishes to review our API documentation or discuss beta access, connect with our engineering team.
            </p>
            <Link to="/reach-us">
              <button className="bg-[#1d4ed8] text-white px-8 py-4 rounded text-[15px] font-bold hover:bg-[#1e40af] transition-colors inline-flex items-center gap-2">
                Initiate Discussion <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;