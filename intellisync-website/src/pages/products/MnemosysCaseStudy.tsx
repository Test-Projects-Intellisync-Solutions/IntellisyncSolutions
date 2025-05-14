import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: string;
  aiIntegration: string;
  value: string;
  extended: string;
};

const SERVICES: Service[] = [
  {
    title: "Citation Formatter",
    desc: "Automatically formats legal citations to jurisdictional standards.",
    icon: "📑",
    aiIntegration: "Powered by advanced NLP and MCP-driven servers for precise citation parsing and formatting.",
    value: "Reduces manual workload and increases accuracy for legal professionals.",
    extended: "Our Citation Formatter leverages NLP (Natural Language Processing) and MCP (Multi-Context Processing) to scan, interpret, and standardize legal references across jurisdictions. Hosted on secure, scalable servers, it ensures compliance and reduces errors, saving up to 70% of document preparation time.",
  },
  {
    title: "Clause Library",
    desc: "Curated repository of legal clauses for rapid contract drafting.",
    icon: "📚",
    aiIntegration: "Utilizes NLP to classify, search, and recommend optimal clauses based on context.",
    value: "Accelerates contract creation and ensures legal consistency.",
    extended: "The Clause Library uses AI-powered NLP algorithms to analyze contract requirements and suggest relevant clauses. Integrated with MCP servers, it adapts recommendations to your practice area, boosting drafting efficiency and reducing oversight risk.",
  },
  {
    title: "Client Intake",
    desc: "Streamlines onboarding with intelligent forms and automation.",
    icon: "📝",
    aiIntegration: "Employs NLP to extract and validate client information from submitted documents.",
    value: "Enhances client experience and minimizes data entry errors.",
    extended: "Client Intake leverages NLP to auto-populate forms and validate input, while MCP servers securely process and store sensitive data. This reduces onboarding friction and increases compliance with KYC/AML standards.",
  },
  {
    title: "Contract Analysis",
    desc: "AI-powered analysis to identify risks and obligations in contracts.",
    icon: "🔍",
    aiIntegration: "Combines NLP and MCP to flag clauses, obligations, and potential risks automatically.",
    value: "Mitigates legal risk and accelerates contract review cycles.",
    extended: "Contract Analysis uses deep NLP to extract and highlight key terms, obligations, and unusual clauses. MCP-driven analytics provide actionable insights, helping legal teams focus on what matters most while servers ensure secure document handling.",
  },
  {
    title: "Document Comparison and Analysis",
    desc: "Quickly compare and analyze changes in legal documents.",
    icon: "📄",
    aiIntegration: "NLP diff algorithms detect nuanced changes; MCP ensures context-aware analysis.",
    value: "Reduces review time and prevents critical changes from being missed.",
    extended: "Our comparison tool uses NLP to understand the meaning behind edits, not just the words. MCP servers provide context-aware analysis, alerting users to significant changes and potential legal impacts.",
  },
  {
    title: "Law Practice Services",
    desc: "Digital solutions for law firm operations, billing, and compliance.",
    icon: "⚖️",
    aiIntegration: "AI-driven automation streamlines administrative and compliance workflows.",
    value: "Boosts operational efficiency and ensures regulatory adherence.",
    extended: "Law Practice Services harness MCP and NLP to automate billing, scheduling, and compliance checks. Secure servers manage sensitive data, freeing up legal staff for higher-value work and reducing operational risk.",
  },
  {
    title: "Legal Research",
    desc: "Instant access to summarized, relevant legal results.",
    icon: "🔎",
    aiIntegration: "NLP-powered search delivers contextually relevant results from vast databases.",
    value: "Saves research time and improves legal argumentation.",
    extended: "Legal Research uses NLP to interpret queries and retrieve the most pertinent cases and statutes. MCP servers aggregate and summarize findings, providing actionable insights in seconds.",
  },
  {
    title: "Precedent Analysis",
    desc: "Find and analyze legal precedents to strengthen strategies.",
    icon: "📜",
    aiIntegration: "AI and NLP identify, compare, and summarize relevant precedents.",
    value: "Improves case outcomes with data-driven insights.",
    extended: "Precedent Analysis leverages NLP to extract key arguments and outcomes from past cases. MCP-powered analytics compare precedents, helping attorneys build stronger, evidence-based strategies.",
  },
  {
    title: "Case Prediction Analysis",
    desc: "AI predicts case outcomes and informs decisions.",
    icon: "🤖",
    aiIntegration: "Machine learning models trained on legal data forecast likely outcomes.",
    value: "Enables proactive strategy and client transparency.",
    extended: "Case Prediction Analysis uses NLP to understand case facts and MCP servers to process historical data, providing probability-based outcome predictions. This empowers legal teams to set realistic expectations and optimize case strategy.",
  },
];

const MnemosysCaseStudy: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] py-24 px-4 md:px-0 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-8 drop-shadow-lg text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Mnemosys: AI-Driven Legal Transformation
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-accent1 max-w-2xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          Discover how Mnemosys empowers leading law firms to revolutionize legal workflows, boost efficiency, and deliver superior client service using cutting-edge AI.
        </motion.p>

        {/* Services Grid */}
        <ServiceGrid services={SERVICES} />


        {/* Impact Statement/Testimonial */}
        <motion.div
          className="bg-black/30 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-accent2 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-accent1/10 blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-cta/10 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent1">
              <img 
                src="/images/testimonial-avatar.jpg" 
                alt="Client Testimonial" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-white text-lg italic mb-4">
                "Mnemosys has transformed our legal operations. Tasks that once took days now take hours, and our clients notice the difference."
              </p>
              <p className="text-accent1 font-semibold">Alex Carter, Managing Partner at Premier Law Group</p>
            </div>
          </div>
        </motion.div>

        {/* Back to Case Studies */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-1 text-cta hover:text-accent1 font-semibold transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-180" />
            Back to Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

// --- ServiceGrid Component ---
type ServiceGridProps = {
  services: Service[];
};

function ServiceGrid({ services }: ServiceGridProps) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
      {services.map((service, idx) => {
        const expanded = openIdx === idx;
        return (
          <motion.div
            key={service.title}
            className={`flex flex-col items-center bg-black/30 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-accent2 text-center min-h-[220px] transition-all duration-300 ${expanded ? 'ring-2 ring-cta' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.05, ease: 'easeOut' }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-header text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-accent1 font-body text-base mb-2">{service.desc}</p>
            <p className="text-sm text-cta font-semibold mb-2">{service.aiIntegration}</p>
            <p className="text-sm text-accent1 mb-4">{service.value}</p>
            <button
              className="inline-flex items-center gap-1 text-cta hover:text-accent1 font-semibold transition-colors group mb-2"
              onClick={() => setOpenIdx(expanded ? null : idx)}
              aria-expanded={expanded}
              aria-controls={`service-extended-${idx}`}
            >
              {expanded ? 'Hide Details' : 'Learn More'}
              <span className={`transition-transform ${expanded ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {expanded && (
              <motion.div
                id={`service-extended-${idx}`}
                className="mt-2 p-4 rounded-xl bg-gradient-to-br from-[#232946]/80 to-black/80 text-left text-white shadow-inner w-full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-base leading-relaxed">{service.extended}</div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default MnemosysCaseStudy;
