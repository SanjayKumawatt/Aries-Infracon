import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Shield, Activity, Workflow, 
  Database, Network, CheckCircle2, Terminal,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  // Smooth matte animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-zinc-50 text-zinc-900 font-sans overflow-hidden">
      
      {/* SECTION 1: Modern Split Layout (The Core Problem) */}
      <section className="py-24 lg:py-32 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
              <h2 className="text-[13px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
                The Infrastructure Gap
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-zinc-900 leading-tight">
                Consolidating Fragmented Property Operations.
              </h3>
              <div className="space-y-5 text-zinc-600 text-[17px] leading-relaxed">
                <p>
                  Modern commercial real estate suffers from severe data sprawl. Asset teams are forced to switch between isolated dashboards for property management, tenant monitoring, and facility access control. This disconnect creates operational blind spots and slows down critical infrastructure workflows.
                </p>
                <p>
                  Aries Infracon is actively writing the architecture to solve this single, concrete problem. We are building a unified SaaS environment designed to aggregate these disconnected property layers into one programmable dashboard.
                </p>
              </div>
            </motion.div>
            
            {/* Pexels Image with Matte Treatment */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="relative h-[500px] rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-700"></div>
              <img 
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Infrastructure Servers" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded border border-zinc-200">
                <span className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <Activity size={16} className="text-blue-600 animate-pulse" />
                  Actively Deploying Modules
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sticky Scroll Layout (Heavy Technical Content) */}
      <section className="py-24 lg:py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Left Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">
                    Core Modules Under Active Testing
                  </h3>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                    We prefer concrete implementation over marketing speak. Here are the specific operational software modules our engineers are deploying right now.
                  </p>
                  <Link to="/infrastructure">
                    <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors inline-flex items-center gap-2">
                      View Technical Docs <ArrowRight size={18} />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Right Content (Bento/Card List) */}
            <div className="lg:w-2/3 space-y-6">
              {[
                {
                  icon: <Server size={24} />, title: "Automated Resource API", 
                  desc: "Writing RESTful endpoints that allow facility managers to allocate infrastructure resources directly through our platform without accessing fragmented legacy systems."
                },
                {
                  icon: <Database size={24} />, title: "Aggregated Data Parsing", 
                  desc: "Testing data pipelines that pull operational logs from distinct property staging servers and compile them into a single, queryable database for rapid debugging."
                },
                {
                  icon: <Workflow size={24} />, title: "Infrastructure Workflows", 
                  desc: "Building a rules engine where portfolio managers can define conditional logic for operational scaling based on live occupancy and resource load metrics."
                },
                {
                  icon: <Network size={24} />, title: "Environment Syncing", 
                  desc: "Currently deploying synchronization scripts designed to keep development, staging, and production property configurations aligned automatically."
                }
              ].map((module, idx) => (
                <motion.div 
                  key={idx} 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-blue-400 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-blue-50 p-3 rounded text-blue-600 mt-1">
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 mb-2">{module.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{module.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Full Width Visual Break + Security Stance (PDF Compliant) */}
      <section className="relative py-32 bg-zinc-900 flex items-center justify-center overflow-hidden">
        {/* Pexels Image Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" 
            alt="Data Security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Shield className="mx-auto text-blue-500 mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              A Commitment to Security by Design.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              As a startup incorporated this year, we do not make unverifiable claims about "bank-grade encryption" for unbuilt systems. Instead, we are stating a clear operational commitment: Aries Infracon is actively building data protection protocols into our core architecture. We are committed to applying appropriate, industry-standard security measures upon our official launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Timeline / Startup Honesty (Modern Vertical Timeline Layout) */}
      <section className="py-24 lg:py-32 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 tracking-tight">Current Operational Status</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              We operate with strict transparency. We are a fresh company focused on building robust infrastructure, not exaggerating our history. Here is exactly what we are deploying today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold border-2 border-blue-600">1</div>
                <div className="w-0.5 h-full bg-blue-100 mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Core Foundation (Completed)</h4>
                <p className="text-zinc-600">Database schemas designed for property data models and repository structure initialized. Base authentication layers have been written.</p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md animate-pulse">2</div>
                <div className="w-0.5 h-full bg-zinc-200 mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Internal API Testing (Current Phase)</h4>
                <p className="text-zinc-600">Our engineering team is actively deploying core synchronization scripts to internal staging servers. Dashboards are being connected to live operational feeds.</p>
                {/* Visual Code Block Representation */}
                <div className="mt-4 bg-[#0f172a] p-4 rounded-md border border-zinc-700 font-mono text-[13px] text-blue-300 max-w-lg">
                   <p className="text-zinc-400"># Current deployment log</p>
                   <p><span className="text-green-400">SUCCESS</span>: Node.js cluster initialized</p>
                   <p><span className="text-yellow-400">PENDING</span>: Waiting for property data sync...</p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center font-bold border-2 border-zinc-200">3</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-400 mb-2">Beta Access Program (Upcoming)</h4>
                <p className="text-zinc-500">The platform will be opened to a select group of real estate professionals and operators for rigorous real-world validation and feedback gathering.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Alternate Image/Text Block */}
      <section className="py-24 lg:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Right, Text Left this time */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden border border-zinc-200">
              <img 
                src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software Engineering" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 lg:order-2">
              <Terminal className="text-blue-600 mb-6" size={40} />
              <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900">
                Built Without Legacy Constraints.
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Because we are building this infrastructure from the ground up today, we are not burdened by technical debt. Aries Infracon is writing code using modern, decoupled microservices. When the service launches, this architecture will ensure that a failure in a minor background task never disrupts your core property infrastructure workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Massive Pre-Footer CTA */}
      <section className="py-24 bg-blue-600 text-white border-t border-blue-700 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">
              Track Our Engineering Progress.
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              We are moving quickly towards our initial beta phase. Connect with our team to discuss your operational challenges and see if our upcoming infrastructure aligns with your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/reach-us">
                <button className="bg-white text-blue-700 px-8 py-4 rounded text-base font-bold hover:bg-zinc-100 transition-colors shadow-sm w-full sm:w-auto">
                  Initiate Discussion
                </button>
              </Link>
              <Link to="/the-company">
                <button className="bg-blue-700 border border-blue-500 text-white px-8 py-4 rounded text-base font-bold hover:bg-blue-800 transition-colors w-full sm:w-auto">
                  Review Company Mission
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomeContent;