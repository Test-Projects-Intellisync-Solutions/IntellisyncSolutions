export const faqSections = [
  {
    section: 'Acronyms',
    faqs: [
        {
            question: 'What does AI mean?',
            answer: 'AI stands for Artificial Intelligence—software that can learn and perform tasks typically requiring human intelligence.'
        },
        {
          question: 'What does AGI mean?',
          answer: 'AGI stands for Artificial "General" Intelligence—software that can perform any intellectual task that a human can.'
      },
        {
            question: 'What does GPT mean?',
            answer: 'GPT stands for Generative Pre-trained Transformer—a type of AI model that can generate human-like text based on a given input.'
        },
        {
            question: 'What does ML mean?',
            answer: 'ML stands for Machine Learning, a subset of AI where models learn patterns from data to make predictions or decisions.'
        },
        {
            question: 'What does NLP mean?',
            answer: 'NLP stands for Natural Language Processing, the branch of AI focused on understanding and generating human language.'
        },
        {
            question: 'What does LLM mean?',
            answer: 'LLM stands for Large Language Model—a very large neural network trained on vast text data to generate human‑like language (e.g., chatbots).'
        },
        {
            question: 'What does API mean?',
            answer: 'API stands for Application Programming Interface—a set of rules that lets different software applications communicate with each other.'
        },
        {
            question: 'What does MCP mean?',
            answer: 'MCP stands for Model Context Protocol—Intellisync’s framework. It allows your A.I. to access custom private tools, resources, memory, and data.'
        },
        {
            question: 'What is VPC?',
            answer: 'VPC stands for Virtual Private Cloud. It is a private cloud environment that is isolated from the public internet.'
        },
        {
            question: 'What does RAG mean?',
            answer: 'RAG stands for Retrieval‑Augmented Generation—an AI technique that first fetches relevant documents then uses them to craft accurate answers.'
        },
        {
            question: 'What is a DB?',
            answer: 'A DB stands for Database—a collection of data stored in a structured format.'
        },
        {
            question: 'What is a VPS?',
            answer: 'A VPS stands for Virtual Private Server—a virtual machine that runs on a physical server.'
        },
        {
            question: 'What is a VDB?',
            answer: 'A VDB stands for Vector Database—a database that stores data in a vector format that allows AI to understand the relationships between data points.'
        },
        {
            question: 'What does GPU mean?',
            answer: 'GPU stands for Graphics Processing Unit—a specialized chip that accelerates AI model training and inference.'
        },
        {
            question: 'What does UI mean?',
            answer: 'UI stands for User Interface—the part of a program or device that you interact with.'
        },
        {
            question: 'What does UX mean?',
            answer: 'UX stands for User Experience—the overall experience of using a product or service.'
        }
    ]
},
        {
            section: 'General',
            faqs: [
              {
                question: 'What is Artificial Intelligence (AI)?',
                answer: 'Artificial Intelligence is software that can learn from data and perform tasks that normally require human intelligence—like recognising patterns, making decisions, or generating text.'
              },
              {
                question: 'How is Machine Learning different from AI?',
                answer: 'Machine Learning is a subset of AI that focuses on training models to recognise patterns in data. AI is the broader goal; ML is one of the toolkits that gets us there.'
              },
              {
                question: 'Why are Large Language Models (LLMs) important?',
                answer: 'LLMs can read and generate human-style text, enabling chatbots, email drafting, and code suggestions without writing custom rules for every sentence.'
              },
              {
                question: 'Will AI replace human jobs?',
                answer: 'NO! AI replaces repetitive tasks, not people. People that know how to use AI will replace those that don\'t.'
              },
              {
                question: 'What is the difference between a chatbot and an AI agent?',
                answer: 'A chatbot is a pre-programmed system that can answer questions or perform tasks based on a set of rules. An AI agent, on the other hand, can learn from data and improve its performance over time.'
              },
              {
                question: 'What is the difference between a chatbot and an AI assistant?',
                answer: 'A chatbot is a pre-programmed system that can answer questions or perform tasks based on a set of rules. An AI assistant, on the other hand, can learn from data and improve its performance over time.'
              },
              {
                question: 'How does AI “learn” from data?',
                answer: 'During training, an algorithm looks at thousands or millions of examples, tweaks its internal parameters, and gradually improves its predictions—much like practising until you get better at a skill.'
              },
              {
                question: 'What are the main risks of using AI?',
                answer: 'Key risks include biased outputs, hallucinated facts, data-privacy leaks, and over-reliance on automated decisions. Always validate results and safeguard sensitive info. Pro-tip: Always keep "Humans-in-the-Loop"'
              },
              {
                question: 'Do I need coding skills to experiment with AI tools?',
                answer: 'No. Many platforms—including Intellisync GPT Builder—offer drag-and-drop or low-code experiences so anyone can start.'
              },
              {
                question: 'How much does it cost to get started with AI?',
                answer: 'Costs range from free community tiers to enterprise subscriptions. Most beginners can run small experiments for pennies or even free.'
              },
              {
                question: 'What’s the easiest way for a beginner to try AI?',
                answer: 'Start with a cloud-hosted chatbot or use a free tier of an AI service—no hardware or setup required.'
              },
              {
                question: 'Is my data safe when using cloud AI services?',
                answer: 'Look for providers that encrypt data in transit and at rest, follow SOC-2 or ISO standards, and give you control over data retention.'
              },
              {
                question: 'What is fine-tuning models with proprietary data?',
                answer: 'Fine-tuning with proprietary data can boost relevance and accuracy. The process often involves converting your documents into training data, vectorizing them, and producing a private model checkpoint. Always confirm data privacy and intellectual property protections.'
              }
            ]
          },
    {
        section: 'Technical',
        faqs: [
            {
                question: 'Is my data secure?',
                answer: 'Yes, data security should always be a top priority. Look for platforms that encrypt data in transit (e.g., TLS 1.3) and at rest (e.g., AES-256). It’s also important to verify whether vendors offer multi-tenant isolation, conduct regular vulnerability scans, and engage in third-party penetration testing. These practices help minimize risks and protect sensitive information in modern AI deployments.'
              },
            {
                question: 'Do you offer API access?',
                answer: 'API access is a key feature for extending functionality and automating workflows. Look for platforms that support REST or GraphQL endpoints, offer webhooks for real-time data events, and use industry-standard authentication protocols like OAuth 2.0. Analytics and usage dashboards are also useful for tracking performance and managing quotas.'
              },
              {
                question: 'Can you deploy on-premises instead of the cloud?',
                answer: 'Yes—on-premises deployment is common for organizations with strict data-residency or regulatory requirements. Look for vendors that support containerized or virtualized installations within your VPC or private data center. Air-gapped options and customer-managed encryption keys add further control.'
              },
              {
                question: 'Do you offer private MCP servers for enterprises?',
                answer: 'Enterprises often need isolated environments for compliance, performance, or internal policy reasons. A private AI server—or dedicated instance—can provide single sign-on (SSO), custom scaling, and advanced provisioning. This architecture supports enterprise-grade governance and integration needs.'
              },
              {
                question: 'Do you offer custom AI model fine-tuning?',
                answer: 'Yes—fine-tuning involves training a base model on domain-specific data to improve accuracy and relevance. When working with a provider, make sure your data remains confidential and that any fine-tuned model outputs are restricted to your account or deployment.'
              },
              {
                question: 'What compliance standards do I need to meet?',
                answer: 'Trustworthy AI providers follow industry compliance frameworks like SOC 2 Type II, ISO 27001, or HIPAA. For international customers, GDPR and regional data residency agreements are critical. Always ask about certifications and third-party audits.'
              },
              {
                question: 'How is data stored and retained?',
                answer: 'Data is typically stored in encrypted databases and object storage systems. Raw logs may be retained for debugging purposes but are often deleted after 30–90 days. Look for clear data retention policies and opt-out options for long-term analytics.'
              },
              {
                question: 'What is an uptime SLA?',
                answer: 'A good uptime SLA (Service Level Agreement) provides transparency and guarantees around platform availability. Common tiers include 99.9% or 99.99% uptime. High-reliability systems use multi-zone redundancy, automated failover, and 24/7 monitoring.'
              },
              {
                question: 'How do model updates work?',
                answer: 'AI platforms regularly release model updates to improve accuracy and reduce bias. Look for options to schedule updates, pin a preferred model version, or enable auto-upgrades during off-peak hours.'
              },
              {
                question: 'Can I integrate with third-party tools?',
                answer: 'Most platforms support third-party integration through APIs, SDKs, or native connectors. Tools like Slack, Stripe, Zapier, and HubSpot are common targets. If flexibility is key, look for webhook support and a GraphQL or REST interface.'
              },
              {
                question: 'Is there a rate limit on the API?',
                answer: 'Yes—API rate limits help manage system load and ensure fairness. Free plans usually allow limited daily calls, while higher tiers support higher volume and burst capacity. Enterprise agreements may include negotiated ceilings.'
              },
             
        ]
    },
    {
        section: 'IntelliSync Solutions',
        faqs: [
            {
                question: 'What is Intellisync Solutions?',
                answer: 'Intellisync is an AI-first software studio that turns complex machine-learning magic into click-and-go tools. From drag-and-drop chatbot builders to enterprise-grade Model Context Protocol (MCP) servers, we deliver automation, insights, and personalized agents without the usual technical pain.'
              },
              {
                question: 'How can I contact support?',
                answer: 'Our humans are on standby 9 AM–5 PM PT, Monday–Friday. Drop us a line at chris.june@intellisync.ca or open a live-chat ticket in your dashboard. Critical outages page us 24/7, so you’re never left hanging.'
              },
              {
                question: 'What Models do you use?',
                answer: 'Depending on your unique needs, we use OpenAI, Anthropic, and Meta models. Our engineering team can also use frontier quality open-source models that further reduce and in some cases eliminate the cost hurdle for both Business and personal use cases.'
              },
              {
                question: 'What problems does Intellisync solve for businesses?',
                answer: 'Every company is a one-of-one, so we build one-of-one AI. Our team designs executive-grade agents that interpret KPIs, forecast scenarios, coordinate projects, and adapt in real-time to shifts in your data. Whether you need a CFO-style dashboard that surfaces cash-flow insights or a support bot that speaks in your brand voice, we tailor each solution to your exact workflows—no generic “for the millions” templates. Thanks to our Model Context Protocol (MCP) layer, these agents connect securely to your CRM, ERP, or data warehouse without disrupting existing systems, giving you actionable intelligence and reclaimed time.'
              },
              {
                question: 'Do I need coding skills to use Intellisync products?',
                answer: 'Nope. Our dashboards are 100 % no-code: upload files, toggle settings, click “Deploy.” If you’re a dev, you *can* extend workflows through our REST and Webhook SDKs—but you never have to touch a line of code to get value.'
              },
              {
                question: 'How long does it take to get started?',
                answer: 'Typical timeline: **Kick-off Day 0**, data audit **Day 3**, working prototype **Day 10**, full launch **Day 20–30**. Smaller personal agents can go live in under 30 minutes using our GPT Builder.'
              },
              {
                question: 'What are your support hours?',
                answer: 'Core support is 9 AM–5 PM PT, Monday–Friday. Paid tiers get a 30-minute SLA during those hours, plus round-the-clock monitoring for P1 incidents.'
              },
              {
                question: 'Our business has custom needs. Can you help?',
                answer: 'Absolutely. We offer Discovery Sprints where our engineers workshop your unique workflow. We then design a private agent architecture unique to your business.'
              },
              {
                question: 'What is your business model?',
                answer: 'We operate a hybrid **SaaS + Professional Services** model: subscription tiers for self-serve tools, usage-based pricing for API calls, and fixed-price or retainer engagements for custom builds.'
              },
              {
                question: 'What problems does Intellisync solve for individuals?',
                answer: 'We build **personal AI sidekicks** that take the grunt work out of daily life and amplify the fun parts. Need an inbox-taming assistant, a workout tracker, a recipe-suggesting chef, a travel-planning concierge, or even a creative-writing buddy? Our agents learn your preferences, automate the boring tasks, and surface helpful insights—so you gain hours back for leisure, productivity, wellness, and pure entertainment. IntelliSync Solutions is your ultimate life hack.'
              },
        ]
    }
];
