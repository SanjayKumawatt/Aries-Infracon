import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, BarChart3, Fingerprint,
    Workflow, ArrowRight, Layers, Zap,
    MonitorSmartphone, ShieldCheck, Database,
    GitBranch, Share2, Box, Globe, Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    return (
        <div className="w-full bg-white text-zinc-900 font-sans selection:bg-[#1d4ed8] selection:text-white">

            {/* SECTION 1: Strategic Hero (The Narrative) */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-zinc-50 border-b border-zinc-200">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto mb-16">

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.05] mb-8">
                            A Unified Ecosystem for <span className="text-[#1d4ed8]">Property Assets.</span>
                        </h1>
                        <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                            Aries Infracon is engineering a centralized operational environment. We are actively writing the logic to ingest, normalize, and visualize fragmented commercial infrastructure data through a single programmable SaaS interface.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-white p-3">
                        {/* FRESH IMAGE: Modern Abstract Tech Visualization */}
                        <img
                            src="https://images.pexels.com/photos/30596267/pexels-photo-30596267.jpeg"
                            alt="Data Infrastructure Mapping"
                            className="w-full h-auto rounded-2xl grayscale-[20%] object-cover max-h-[500px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: The Logic Breakdown (Bento Grid) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-6 underline decoration-blue-600/20 underline-offset-8">
                            Core Platform Capabilities.
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
                            We focus on concrete software deliverables over vague promises. Here are the specific operational layers our developers are currently deploying and testing in our staging environment.
                        </p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">

                        <motion.div variants={fadeUp} className="md:col-span-8 bg-zinc-50 border border-zinc-200 rounded-3xl p-10 hover:border-blue-400 transition-all group overflow-hidden relative">
                            <div className="relative z-10">
                                <LayoutDashboard className="text-[#1d4ed8] mb-6" size={40} />
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Unified Portfolio Command</h3>
                                <p className="text-zinc-600 leading-relaxed max-w-lg mb-8">
                                    We are building the primary dashboard to act as a single source of truth for commercial real estate. By writing custom connectors for isolated property management tools, our platform aggregates critical asset data-from tenant occupancy to spatial analytics-into one interactive command center.
                                </p>
                                <div className="flex gap-4 mb-8">
                                    <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">Resource Tracking</div>
                                    <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">Asset Lifecycle</div>
                                </div>
                            </div>
                            {/* FRESH IMAGE: Minimal Tech Detail */}
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="absolute bottom-[-20%] right-[-10%] w-1/2 opacity-20 grayscale group-hover:scale-110 transition-transform duration-700" alt="Tech Hardware" />
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-white hover:border-blue-500 transition-all">
                            <Database className="text-blue-400 mb-6" size={32} />
                            <h3 className="text-xl font-bold mb-4">Normalization Tier</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Our developers are actively testing the Node.js clusters responsible for parsing and cleaning unstructured property logs before they hit the visual dashboard layer.
                            </p>
                            <div className="h-px bg-zinc-800 w-full mb-6"></div>
                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Active Testing Phase</span>
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-5 bg-blue-50 border border-blue-100 rounded-3xl p-10 hover:border-[#1d4ed8] transition-all">
                            <Zap className="text-[#1d4ed8] mb-6" size={32} />
                            <h3 className="text-xl font-bold text-zinc-900 mb-4">Live Operational Sync</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Deploying WebSockets to ensure that critical property alerts-like facility infrastructure issues-reach the dashboard within milliseconds of detection. We are writing the logic for sub-second latency across multi-property feeds.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-7 bg-white border border-zinc-200 rounded-3xl p-10 hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/2">
                                    <Fingerprint className="text-[#1d4ed8] mb-6" size={32} />
                                    <h3 className="text-xl font-bold text-zinc-900 mb-4">Role-Based Access (RBAC)</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed">
                                        Engineering strict authentication layers to ensure data isolation. Field operators, facility managers, and portfolio executives will each see tailored dashboard views based on their verified security clearance.
                                    </p>
                                </div>
                                <div className="md:w-1/2 bg-zinc-50 p-4 rounded-xl border border-zinc-100 font-mono text-[10px] text-blue-600">
                                    <p>{`// Authentication Logic Update`}</p>
                                    <p>{`const verifyToken = (req, res) => {`}</p>
                                    <p className="pl-4">{`if(!valid) return 403;`}</p>
                                    <p className="pl-4">{`grantAccess(role);`}</p>
                                    <p>{`}`}</p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: The Integration Layer (Text-Heavy Mid Section) */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-tight">
                                Built to replace fragmented legacy systems.
                            </h2>
                            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                                <p>
                                    Most property management platforms fail because they are "monolithic"-one giant codebase that breaks when one small feature fails. Aries Infracon is architecting its platform using <strong>decoupled microservices</strong>.
                                </p>
                                <p>
                                    This means our data ingestion, tenant billing, and facility telemetry modules are all isolated. If our team updates the billing module, the core infrastructure tracking remains completely unaffected. This is not just "planned"-our DevOps team is actively configuring these containerized environments in our staging registry today.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
                            {/* FRESH IMAGE: Abstract Blue Light Data Flow */}
                            <img
                                src="https://images.pexels.com/photos/18734769/pexels-photo-18734769.jpeg"
                                alt="Tech Microchips"
                                className="w-full h-[450px] object-cover rounded-2xl grayscale-[20%]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Platform Sub-Modules (The Grid) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">Internal Staging Modules.</h2>
                        <p className="text-zinc-600 text-lg">We are moving through our development cycles by testing these specific sub-platforms within our ecosystem.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <MonitorSmartphone />, title: "Field-Edge App", desc: "A mobile-responsive portal for on-site personnel to update infrastructure data in real-time." },
                            { icon: <Globe />, title: "Portfolio Mapper", desc: "A geographic visualization layer for tracking asset distribution across multiple cities." },
                            { icon: <Share2 />, title: "Integration Bridge", desc: "The set of API connectors that allow external legacy software to feed data into our platform." },
                            { icon: <Layers />, title: "Spatial Analytics", desc: "The logic engine that calculates facility utilization and resource load metrics automatically." }
                        ].map((module, i) => (
                            <motion.div key={i} variants={fadeUp} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
                                <div className="text-blue-600 mb-6">{module.icon}</div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-3">{module.title}</h4>
                                <p className="text-sm text-zinc-500 leading-relaxed">{module.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Operational Flow (Vertical Sequence) */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
                        <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">From Ingestion to Visualization.</h2>
                        <p className="text-zinc-600 leading-relaxed">Here is the exact data lifecycle we are writing the code for.</p>
                    </motion.div>

                    <div className="space-y-8">
                        {[
                            { num: "01", title: "API Endpoint Call", text: "External property sensors or manual inputs hit our secure RESTful API gateway with raw, unstructured JSON data packets." },
                            { num: "02", title: "Normalization Sprint", text: "Our Node.js worker threads parse the data, applying proprietary normalization schemas to ensure it fits our unified property model." },
                            { num: "03", title: "Schema Validation", text: "The normalized data is validated against our PostgreSQL schemas to ensure data integrity before it enters the persistent storage layer." },
                            { num: "04", title: "State Update", text: "The React-based frontend receives an update via WebSockets, instantly re-rendering the dashboard to reflect the most current operational state." }
                        ].map((step, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm border border-zinc-100">
                                <span className="text-3xl font-black text-blue-100">{step.num}</span>
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h4>
                                    <p className="text-zinc-600 text-[15px] leading-relaxed">{step.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: High Intensity Dark Showcase (Glassmorphism) */}
            <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1d4ed8]/15 blur-[150px] rounded-full"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <ShieldCheck className="text-blue-500 mb-8" size={56} />
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Security-First Engineering.</h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    As a fresh company, we operate with zero legacy baggage. We do not claim to have "military-grade" security for a product that is currently under internal validation. Instead, we are stating our engineering commitment.
                                </p>
                                <p>
                                    We are actively building enterprise-standard protection into every layer of our platform. Our DevOps engineers are configuring our staging environments to ensure total data isolation, using JWT-based authentication and strict CORS policies.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl relative">
                            <h4 className="text-white font-bold mb-6 flex items-center gap-2"><Code2 size={20} className="text-blue-400" /> Platform Deployment Log</h4>
                            <div className="space-y-4 font-mono text-[13px] text-zinc-500">
                                <p className="text-green-500">// SUCCESS: Auth Module Initialized</p>
                                <p>// PENDING: Load Testing (Staging v1.0.4)</p>
                                <p>// STATUS: 204 Active Microservices Running</p>
                                <div className="h-2 w-full bg-zinc-800 rounded-full mt-8 overflow-hidden">
                                    <div className="h-full w-2/3 bg-blue-600 animate-pulse"></div>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest pt-2">Build Integrity: Verified</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Feature Deep Dive (Heavy Detail) */}
            <section className="py-24 bg-white border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h3 className="text-2xl font-bold mb-4">Infrastructure Mapper</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                We are writing the geometry engine that will allow property managers to upload floor plans and map digital sensors directly to physical locations, creating a 1:1 digital twin of the infrastructure.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h3 className="text-2xl font-bold mb-4">Telemetry Pipeline</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                The data pipeline is being built to handle high-frequency telemetry-thousands of events per second-without dropping packet integrity, ensuring that resource usage tracking is 100% accurate.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h3 className="text-2xl font-bold mb-4">Asset Governance</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Testing the rules engine that will allow administrators to set automated alerts for resource thresholds, maintenance cycles, and tenant non-compliance events.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: API Documentation Vision */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <GitBranch className="mx-auto text-[#1d4ed8] mb-6" size={40} />
                        <h2 className="text-3xl font-extrabold mb-6 tracking-tight uppercase">Programmable Real Estate.</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                            Aries Infracon is being built as an "API-first" ecosystem. This means every dashboard feature we deploy is also being documented as a secure, programmable endpoint for our future enterprise partners to integrate into their own systems.
                        </p>
                        <Link to="/infrastructure" className="text-[#1d4ed8] font-bold flex items-center gap-2 justify-center hover:underline">
                            Technical Implementation Docs <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 9: Visual Branding (Fresh Abstract Image) */}
            <section className="h-[400px] w-full overflow-hidden relative">
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
                    alt="Tech Pattern"
                    className="w-full h-full object-cover grayscale opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40">
                    <span className="text-white text-5xl md:text-7xl font-black opacity-10 tracking-[1em] uppercase">Architecture</span>
                </div>
            </section>

            {/* SECTION 10: Final CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-8">
                            Track Our Build Cycle.
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-12">
                            We are moving quickly towards our initial real-world validation. If you manage commercial infrastructure and wish to discuss our current staging deployment, connect with our engineering team today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/reach-us" className="w-full sm:w-auto">
                                <button className="bg-[#1d4ed8] text-white px-10 py-5 rounded-xl text-base font-bold hover:bg-[#1e40af] transition-all shadow-xl w-full">
                                    Request Beta Integration
                                </button>
                            </Link>
                            <Link to="/the-company" className="w-full sm:w-auto">
                                <button className="bg-zinc-100 text-zinc-900 border border-zinc-200 px-10 py-5 rounded-xl text-base font-bold hover:bg-zinc-200 transition-all w-full">
                                    Meet the Team
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Platform;