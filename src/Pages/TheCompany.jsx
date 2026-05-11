import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Code2, GitBranch, Database, 
  Terminal, Cpu, Network, Layers, Shield 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TheCompany = () => {
  // Editorial style fade animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans selection:bg-[#1d4ed8] selection:text-white">
      
      {/* SECTION 1: Editorial Manifesto Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="lg:col-span-8 lg:pr-12"
          >
            <h1 className="text-[12px] font-bold text-[#1d4ed8] tracking-[0.25em] uppercase mb-6">
              The Aries Infracon Directive
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
              Real estate relies on concrete. Its management shouldn't.
            </h2>
            <div className="prose prose-lg text-zinc-600 leading-relaxed max-w-none space-y-6">
              <p className="text-xl text-zinc-800 font-medium">
                The commercial property sector manages high-value physical assets, yet the backend operations run on deeply fragmented, legacy software. 
              </p>
              <p>
                Aries Infracon was incorporated to address this exact operational disconnect. Property managers, asset allocators, and facility teams lose critical hours reconciling infrastructure data across isolated dashboards. Instead of patching old systems, our engineering team is writing a new centralized SaaS environment from scratch.
              </p>
              <p>
                We are building the data infrastructure that allows disparate property feeds-from resource allocation to spatial analytics-to communicate seamlessly within a single, unified codebase.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} 
            className="lg:col-span-4"
          >
            {/* Technical Context Card */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl shadow-sm">
              <Building2 className="text-[#1d4ed8] mb-5" size={32} />
              <h3 className="text-lg font-bold text-zinc-900 mb-3">Operational Objective</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                To engineer scalable PropTech workflows that replace manual infrastructure tracking with automated, API-driven data synchronization.
              </p>
              <ul className="space-y-4 text-sm text-zinc-700 font-medium border-t border-zinc-200 pt-6">
                <li className="flex items-center gap-3"><Terminal size={16} className="text-[#3b82f6]" /> Writing Core Logic</li>
                <li className="flex items-center gap-3"><Database size={16} className="text-[#3b82f6]" /> Structuring Property Schemas</li>
                <li className="flex items-center gap-3"><Network size={16} className="text-[#3b82f6]" /> Testing Endpoint Routing</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: Technical Philosophy (NEW SECTION - Bento Grid) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 max-w-3xl">
            <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">
              Engineering Philosophy.
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We do not believe in bloated software. As a new company, we have the distinct advantage of building without technical debt. Here is how we write our code.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Layers />, title: "Microservices First", desc: "Monoliths fail in real estate tech. We deploy isolated containers so a failure in a minor background task never disrupts core data workflows." },
              { icon: <Cpu />, title: "Resource Efficiency", desc: "Our backend is being optimized to parse high-volume facility data with minimal CPU overhead, ensuring rapid dashboard response times." },
              { icon: <Shield />, title: "Secure by Design", desc: "We are actively embedding data protection protocols into our architecture layers long before our first beta user logs in." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-[#3b82f6] transition-colors">
                <div className="text-[#1d4ed8] mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Deep Architecture Split (Fresh Abstract Image 1) */}
      <section className="py-24 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="order-2 md:order-1">
              <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-6">
                Architecting the Data Layer.
              </h3>
              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>
                  A real estate portfolio is only as agile as its underlying database. Currently, our developers are testing modular schemas specifically tailored for commercial physical infrastructure. 
                </p>
                <p>
                  We are bypassing generic off-the-shelf templates. Instead, we are writing custom Node.js clusters that parse facility telemetry in real-time. This ensures that when our operational platform is fully deployed, it can handle multi-property data synchronization without critical latency.
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 border border-zinc-200">
                {/* FRESH IMAGE: Abstract structural/glass architecture to represent PropTech */}
                <img 
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1400" 
                  alt="Abstract architectural structure" 
                  className="w-full h-full object-cover grayscale-[30%] mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Backend Logic Split (Fresh Abstract Image 2) */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700">
                {/* FRESH IMAGE: Raw server/network cables representing backend infrastructure */}
                <img 
                  src="https://images.pexels.com/photos/19166565/pexels-photo-19166565.jpeg" 
                  alt="Backend network infrastructure" 
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <Code2 className="text-[#3b82f6] mb-6" size={40} />
              <h3 className="text-3xl font-extrabold tracking-tight mb-6">
                Consolidating the Backend.
              </h3>
              <div className="space-y-5 text-zinc-300 leading-relaxed">
                <p>
                  Fragmented IT systems create blind spots for facility managers. Our current sprint is entirely focused on API aggregation-writing the connectors that pull disparate property management inputs into one secure pipeline.
                </p>
                <p>
                  Our internal beta environments are actively stress-testing these API gateways to ensure data integrity during high-load property syncs. We are building a system designed for reality, not just presentation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Current Development Focus (NEW SECTION - Heavy Text) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-6">
              What We Are Compiling Today
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We maintain a strict policy against vaporware. Here is an unvarnished look at the specific modules our developers are writing and testing at this exact moment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
              <div className="w-12 h-12 rounded bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0 border border-blue-100 font-bold">01</div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Automated Provisioning Logic</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Writing the core scripts that will allow administrators to allocate digital resources across multiple physical properties without manual server configurations.</p>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
              <div className="w-12 h-12 rounded bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0 border border-blue-100 font-bold">02</div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Cross-Property Authentication</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Deploying JWT-based authentication modules that ensure secure, role-based access control (RBAC) across varying levels of facility management personnel.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
              <div className="w-12 h-12 rounded bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0 border border-blue-100 font-bold">03</div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Telemetry Aggregation</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Testing data pipelines designed to ingest raw operational logs from edge devices within commercial properties and format them for dashboard visualization.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
              <div className="w-12 h-12 rounded bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0 border border-blue-100 font-bold">04</div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Staging Environment Setup</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">Our DevOps team is currently configuring the container registries and CI/CD pipelines necessary to move our codebase from local development to internal testing servers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Startup Honesty & Operational Transparency CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <GitBranch className="mx-auto text-zinc-400 mb-6" size={40} />
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Operating with Complete Transparency.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-10 text-left md:text-center">
            We do not fabricate client metrics or invent case studies. Aries Infracon is a fresh entity actively engaged in the hardest part of software development: building reliable, ground-up infrastructure. Our focus is entirely on writing clean code, establishing secure protocols, and preparing our platform for its initial staging phase.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link to="/infrastructure" className="w-full sm:w-auto">
              <button className="bg-[#1d4ed8] text-white px-8 py-4 rounded text-[15px] font-bold hover:bg-[#1e40af] transition-colors w-full">
                Review Technical Implementation
              </button>
            </Link>
            <Link to="/reach-us" className="w-full sm:w-auto">
              <button className="bg-zinc-100 text-zinc-900 border border-zinc-200 px-8 py-4 rounded text-[15px] font-bold hover:bg-zinc-200 transition-colors w-full">
                Connect With Developers
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default TheCompany;