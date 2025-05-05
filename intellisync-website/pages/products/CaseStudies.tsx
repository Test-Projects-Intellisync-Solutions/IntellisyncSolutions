import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "AI-Powered Operations for FinTech",
    desc: "Deployed a custom AI solution that increased operational efficiency by 30% and reduced manual workload by 2,000+ hours annually.",
    link: "/case-studies/fintech",
    image: "/images/case-study-fintech.jpg"
  },
  {
    title: "Personal Productivity AI",
    desc: "Helped individuals automate scheduling and reminders, improving daily productivity and reducing missed tasks by 40%.",
    link: "/case-studies/personal-productivity",
    image: "/images/case-study-productivity.jpg"
  },
  {
    title: "Enterprise Automation at Scale",
    desc: "Integrated AI-driven automation for a global enterprise, resulting in 500+ successful deployments and measurable ROI.",
    link: "/case-studies/enterprise-automation",
    image: "/images/case-study-enterprise.jpg"
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-gradient-to-br from-[#090d1f] via-[#1a1a2e] to-[#232946] py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-tr from-cta via-accent1 to-white bg-clip-text text-transparent mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Proven Impact
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-accent1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            Real-world results from our custom AI implementations across various industries
          </motion.p>
        </div>
        
        {/* Featured case study with large image */}
        <motion.div 
          className="relative w-full mb-16 overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img 
              src="/assets/images/CaseStudy.png" 
              alt="Featured Case Study" 
              className="object-cover rounded-2xl w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d1f]/40 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Success Story: Financial Services Transformation</h3>
            <p className="text-accent1 text-lg mb-4 max-w-2xl">
              How we helped a leading financial institution reduce operational costs by 45% while improving customer satisfaction scores by 28%
            </p>
            <a
              href="/case-studies/financial-services"
              className="inline-flex items-center gap-1 text-cta hover:text-accent1 font-semibold transition-colors group w-fit"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.title}
              className="flex flex-col bg-black/30 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md border border-accent2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + idx * 0.1, ease: 'easeOut' }}
            >
              <div className="relative w-full h-48">
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-header text-lg font-bold text-white mb-2">{cs.title}</span>
                <span className="text-accent1 font-body text-base mb-4">{cs.desc}</span>
                <div className="mt-auto">
                  <a
                    href={cs.link}
                    className="inline-flex items-center gap-1 text-cta hover:text-accent1 font-semibold transition-colors group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom testimonial section */}
        <motion.div
          className="mt-16 bg-black/30 rounded-2xl p-8 shadow-lg backdrop-blur-md border border-accent2 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-accent1/10 blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-cta/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/images/testimonial-avatar.jpg" 
                alt="Client Testimonial" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-white text-lg italic mb-4">
                "Intellisync's AI solutions have transformed how we operate. The ROI was evident within the first quarter, and their ongoing support has been exceptional."
              </p>
              <p className="text-accent1 font-semibold">Sarah Johnson, CTO at Enterprise Solutions Inc.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
