export const siteConfig = {
  name: "Ishaan Singh Chawla",
  title: "Ishaan Singh Chawla — AI/ML Engineer",
  description:
    "AI/ML-focused engineer building practical AI systems, scalable backend pipelines, and production-ready applications.",
  url: "https://portfolio-ecru-phi-36.vercel.app/",
  github: "https://github.com/Ishaan6286",
  linkedin: "https://www.linkedin.com/in/ishaan6286",
  email: "1MS23CI042@msrit.edu",
  phone: "+91 9044833253",
  leetcode: "https://leetcode.com/u/45ishaan/",
} as const;

export const rotatingTitles = [
  "Software Engineer",
  "Backend Engineer",
  "Full Stack Engineer",
  "AI Engineer",
] as const;

export const metrics = [
  { label: "Monthly Organic Clicks", value: 50, suffix: "+", decimals: 0 },
  { label: "Hotels with Butler AI", value: 15, suffix: "", decimals: 0 },
  { label: "Guest Requests Handled", value: 1000, suffix: "+", decimals: 0 },
  { label: "CGPA", value: 8.76, suffix: "/10", decimals: 2 },
] as const;

export const journeyMilestones = [
  {
    year: "2023",
    title: "Started Engineering Journey",
    description:
      "Began B.E. in Computer Science & Engineering (AI & ML) at Ramaiah Institute of Technology, Bangalore.",
  },
  {
    year: "2024",
    title: "PR Co-Head @ IEEE PR & SP Society",
    description:
      "Led publicity and outreach for 40+ technical events, engaging 2,000+ students across the campus.",
  },
  {
    year: "2025",
    title: "Hackathon Triumphs",
    description:
      "Ranked Top 10 nationally at HACKaMiNDE (Nirma University) and Top 5 at Hack-a-War (E-Cell RIT).",
  },
  {
    year: "2026",
    title: "Project Intern @ HPE",
    description:
      "Built an AI-assisted enterprise data quality and observability platform with automated profiling and validation.",
  },
  {
    year: "Now",
    title: "AI Engineering Intern @ SOYL AI",
    description:
      "Co-developing Butler AI, a live AI hotel concierge deployed across 15 hotels, and shipping RAG-based systems.",
  },
] as const;

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  techStack: string[];
  impact: string;
  github: string;
  live: string;
  overview: string;
  problem: string;
  architecture: string;
  challenges: string[];
  features: string[];
  lessons: string[];
  future: string[];
  
  // NEW FIELDS FOR PREMIUM UPGRADE
  whyBuilt: string;
  goals: string[];
  apiDesign: string;
  dbDesign: string;
  aiIntegration?: string;
  deploymentArch: string;
  engineeringDecisions: { decision: string; reasoning: string }[];
  whyThisTech: { tech: string; reason: string }[];
  timeline: { phase: string; description: string }[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "runli",
    name: "Runli",
    tagline: "AI-Powered Fitness Companion (PWA)",
    description:
      "Built a full-stack fitness app with React, FastAPI, MongoDB, and Redis for workout tracking and diet planning. Trained an XGBoost model using Pandas and scikit-learn for personalised fitness predictions. Built an AI coach using Llama 3 via Groq, with RAG over ChromaDB for context-aware meal and workout recommendations.",
    coverImage: "/images/projects/runli.png",
    techStack: [
      "React",
      "FastAPI",
      "MongoDB",
      "Redis",
      "XGBoost",
      "Pandas",
      "scikit-learn",
      "Llama 3",
      "Groq",
      "RAG",
      "ChromaDB",
    ],
    tags: ["Full Stack", "AI", "Backend", "React"],
    impact:
      "A fully-featured progressive web application featuring mobile offline support, meal recommendations, and adaptive fitness scoring.",
    github: "https://github.com/Ishaan6286/Runli",
    live: "https://runli.vercel.app/",
    overview:
      "Built a full-stack fitness app with React, FastAPI, MongoDB, and Redis for workout tracking and diet planning. Trained an XGBoost model using Pandas and scikit-learn for personalised fitness predictions. Built an AI coach using Llama 3 via Groq, with RAG over ChromaDB for context-aware meal and workout recommendations.",
    problem:
      "Traditional fitness applications lack personalization and require manual entries for food logging. Runli addresses this by leveraging AI to estimate calorie intake from pictures and automatically generate tailored fitness split plans.",
    whyBuilt:
      "I wanted a fitness app that didn't just track data, but actively planned workouts and interpreted food images locally without heavy server roundtrips, reducing latency and cost.",
    goals: [
      "Achieve near real-time workout adaptation based on progress",
      "Minimize backend compute for image recognition by using client-side TensorFlow",
      "Provide a native-like offline mobile experience using PWA standards",
    ],
    architecture:
      "The application leverages a hybrid React client communicating with dual backend nodes (Node.js and FastAPI) using MongoDB for user profiles and history, and Redis for caching and session management. Gemini and Groq APIs power the intelligent recommendations, while TensorFlow runs client-side food recognition models.",
    apiDesign:
      "A dual-backend setup where Node.js handles WebSocket connections for real-time dashboard updates and authentication, while a FastAPI microservice processes heavy computational tasks and AI orchestration via REST.",
    dbDesign:
      "MongoDB was chosen for its flexible document schema, allowing varied workout and diet structures without rigid migrations. Redis acts as an ephemeral layer for session tokens and high-frequency analytical counters.",
    aiIntegration:
      "Uses Groq for ultra-low latency workout adjustments and Gemini for robust nutritional advice generation. Food recognition uses quantized TensorFlow.js models running directly in the browser.",
    deploymentArch:
      "The React PWA is hosted on Vercel with edge caching. The Node.js and FastAPI services run in containerized environments on Render, connecting to managed MongoDB Atlas and Upstash Redis instances.",
    engineeringDecisions: [
      {
        decision: "Client-side TensorFlow over Server-side vision APIs",
        reasoning: "Running models on the browser drastically reduced backend load, eliminated latency from image uploads, and improved user privacy.",
      },
      {
        decision: "Dual Backend Architecture (Node + Python)",
        reasoning: "Node.js excels at I/O and WebSockets for the real-time UI, while FastAPI offers superior performance and ecosystem integration for Python-based AI orchestration.",
      },
    ],
    whyThisTech: [
      { tech: "FastAPI", reason: "Async support and Pydantic validation make Python AI integrations robust." },
      { tech: "MongoDB", reason: "Flexible document model fits unstructured workout plans perfectly." },
      { tech: "Redis", reason: "Crucial for fast session verification and rate limiting." },
    ],
    timeline: [
      { phase: "Idea", description: "Identified the gap in personalized, low-friction fitness tracking." },
      { phase: "Research", description: "Evaluated client-side TensorFlow performance on mobile web." },
      { phase: "Prototype", description: "Built the core workout generator API using Groq." },
      { phase: "Development", description: "Integrated dual backends, MongoDB, and the React PWA." },
      { phase: "Deployment", description: "Deployed on Vercel and Render with optimized edge routing." },
    ],
    challenges: [
      "Optimizing client-side TensorFlow model execution to run smoothly on mobile devices without thermal throttling",
      "Synchronizing real-time analytics between Node.js socket servers and FastAPI analytical microservices",
      "Managing offline capabilities and service worker sync states for offline food logging and fitness tracking",
    ],
    features: [
      "Personalized workout plans generated dynamically based on fitness goals",
      "Nutrition tracking with TensorFlow-based food recognition",
      "Mobile-first Progressive Web App structure featuring offline support",
      "Real-time analytics and user progress dashboard",
      "Gemini & Groq integration for custom meal recommendations and advice",
      "AI-powered calorie estimation and adaptive fitness scoring",
    ],
    lessons: [
      "Implementing PWA features requires robust synchronization mechanisms when connection is restored",
      "TensorFlow models on mobile require specialized sizing and quantization for fast performance",
      "Multi-backend setups (Node + FastAPI) work exceptionally well when concerns are separated cleanly",
    ],
    future: [
      "Real-time workout posture checking using Google PoseNet",
      "Social training groups with shared challenges and leaderboards",
      "Wearable device integrations (Apple HealthKit / Google Fit)",
    ],
  },
  {
    slug: "nikkalink",
    name: "NikkaLink",
    tagline: "Production-Grade URL Shortener & Analytics Platform",
    description:
      "Built a full-stack URL shortener using Next.js, FastAPI, PostgreSQL, and Redis, with custom aliases, QR code generation, Google OAuth, and a click-analytics dashboard. Implemented 7-character Base62 identifiers, Redis caching for low-latency redirects, JWT authentication, and rate limiting for reliability under load.",
    coverImage: "/images/projects/nikkalink.png",
    techStack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Google OAuth",
    ],
    tags: ["Full Stack", "Backend", "React"],
    impact:
      "A scalable and performant analytics pipeline with background processing, Neon PostgreSQL integration, and Upstash Redis caching.",
    github: "https://github.com/Ishaan6286/NikkaLink",
    live: "https://nikkalink.vercel.app/",
    overview:
      "Built a full-stack URL shortener using Next.js, FastAPI, PostgreSQL, and Redis, with custom aliases, QR code generation, Google OAuth, and a click-analytics dashboard. Implemented 7-character Base62 identifiers, Redis caching for low-latency redirects, JWT authentication, and rate limiting for reliability under load.",
    problem:
      "Most URL shorteners don't offer comprehensive, privacy-preserving tracking dashboard metrics or lack robust mechanisms for link caching and prevention of database query bottlenecks under high load.",
    whyBuilt:
      "To deeply understand how high-throughput systems handle concurrent read/write loads and to build a robust logging architecture without slowing down the primary redirect path.",
    goals: [
      "Achieve sub-50ms redirect latency",
      "Ensure analytics tracking does not block redirect requests",
      "Provide a seamless developer experience with Docker and Alembic migrations",
    ],
    architecture:
      "An analytical dashboard built with Next.js hooks into a FastAPI server using Neon PostgreSQL via SQLAlchemy. High-speed caching is driven by Upstash Redis. Alembic migrations manage database schema updates, and Docker containers ensure clean local development.",
    apiDesign:
      "A strictly typed REST API designed with FastAPI. The critical redirect endpoint is completely separated from analytics endpoints to ensure optimal performance. Analytics are ingested asynchronously.",
    dbDesign:
      "Relational PostgreSQL database for users, links, and detailed analytics. Heavily indexed on short_code and user_id to speed up joins. Redis is used as a read-through cache for resolved URLs.",
    deploymentArch:
      "The Next.js frontend is deployed on Vercel. The FastAPI backend runs on Render. The database is hosted on Neon (Serverless Postgres), and caching uses Upstash Redis.",
    engineeringDecisions: [
      {
        decision: "Redis Read-Through Cache",
        reasoning: "Database lookups for every redirect are too slow and expensive. Caching the resolved URLs in Redis allows instant resolution and handles traffic spikes gracefully.",
      },
      {
        decision: "Background Tasks for Analytics",
        reasoning: "Logging an analytics event involves IP parsing and DB writes. Doing this synchronously would delay the user redirect. Using background tasks ensures the user gets redirected instantly while analytics process asynchronously.",
      },
    ],
    whyThisTech: [
      { tech: "PostgreSQL", reason: "Relational integrity is crucial for linking analytics to specific users and URLs." },
      { tech: "Docker", reason: "Ensured the complex setup (DB + Redis + API) could be spun up consistently anywhere." },
      { tech: "Next.js", reason: "Provided SSR capabilities for fast dashboard rendering and clean routing." },
    ],
    timeline: [
      { phase: "Research", description: "Studied bit.ly architecture and high-throughput logging strategies." },
      { phase: "Database Design", description: "Designed the relational schema and indexing strategy." },
      { phase: "API Core", description: "Built the FastAPI redirect and caching engine." },
      { phase: "Dashboard", description: "Developed the Next.js analytics UI and OAuth." },
      { phase: "Optimization", description: "Moved analytics logging to background tasks to cut latency." },
    ],
    challenges: [
      "Minimizing redirect latency by optimizing Redis key structures and read-through caching patterns",
      "Designing asynchronous background jobs to queue and process analytics logging without blocking client response loops",
      "Creating robust custom alias validation checks to prevent routing collisions and security risks",
    ],
    features: [
      "Custom alias creation and URL validation checking",
      "Dynamic QR code generation for shortened links",
      "Comprehensive, real-time analytics dashboard tracking user agent and referrer details",
      "Secure Google OAuth sign-in flow",
      "Asynchronous background jobs and Alembic migration system",
      "Deployments optimized across Vercel, Render, and Neon cloud databases",
    ],
    lessons: [
      "High redirect throughput is best achieved by caching redirects directly at the memory store level (Redis)",
      "Database schema versioning must be handled cleanly using migration tools (Alembic) to prevent data loss",
      "Properly configuring CORS rules and headers is crucial when scaling FastAPI backends alongside Next.js clients",
    ],
    future: [
      "Link grouping and collection sharing for team workspaces",
      "Geographic analytics maps using MaxMind GeoIP integration",
      "Custom domains support for enterprise users",
    ],
  },
  {
    slug: "pramanik-ai",
    name: "Pramanik AI",
    tagline: "SOC 2 Compliance RAG Assistant",
    description:
      "Built a compliance platform using FastAPI, LangGraph, and Groq for auditing SOC 2, HIPAA, DPDP, and ISO 27001. Designed LangGraph agent workflows for gap analysis, risk assessment, and policy documentation. Added scanning of cloud configurations and GitHub repositories for compliance issues.",
    coverImage: "/images/projects/pramanik.png",
    techStack: [
      "FastAPI",
      "LangGraph",
      "Groq",
      "LLMs",
      "RAG",
    ],
    tags: ["AI", "Hackathon", "Backend", "LLM"],
    impact:
      "A 7-mode compliance engine that automates SOC 2 workflows with real-time WebSocket communication and intelligent document retrieval.",
    github: "https://github.com/Anaa1101/Pramanik",
    live: "https://pramanik-ai-delta.vercel.app/",
    overview:
      "Built a compliance platform using FastAPI, LangGraph, and Groq for auditing SOC 2, HIPAA, DPDP, and ISO 27001. Designed LangGraph agent workflows for gap analysis, risk assessment, and policy documentation. Added scanning of cloud configurations and GitHub repositories for compliance issues.",
    problem:
      "SOC 2 compliance is a tedious process involving hundreds of manual checklist verifications, complex document creation, and expensive audit fees. Startups need an automated way to assess posture and draft policies instantly.",
    whyBuilt:
      "To tackle a real-world enterprise problem using state-of-the-art agentic workflows during a high-stakes hackathon.",
    goals: [
      "Build a reliable multi-agent system that avoids hallucinations on critical compliance data",
      "Stream generation steps to the frontend to keep the user engaged during long analytical runs",
    ],
    architecture:
      "The system is powered by FastAPI, LangGraph, and LangChain utilizing AWS Bedrock and Groq APIs for intelligence. WebSockets handle real-time compliance validation streams. The storage layer uses Supabase for database and vector index, while the frontend is a React-Vite dashboard.",
    apiDesign:
      "Utilizes WebSockets heavily. Since compliance analysis steps take 10-30 seconds, traditional HTTP requests would timeout or leave the user guessing. WebSockets stream the agent's thought process step-by-step.",
    dbDesign:
      "Supabase serves as both the relational database for user sessions and the vector store for RAG embeddings, using pgvector to match user architecture documents against SOC2 frameworks.",
    aiIntegration:
      "LangGraph manages a stateful multi-agent flow: a retriever agent fetches frameworks, a reviewer agent checks the user's docs against them, and a writer agent drafts remediation policies.",
    deploymentArch:
      "Frontend hosted on Vercel, backend on Render, with Supabase managing all persistence and vector indexing.",
    engineeringDecisions: [
      {
        decision: "LangGraph over LangChain Sequential Chains",
        reasoning: "Compliance workflows involve conditional loops (e.g., if a policy is missing, generate it; if it exists, audit it). LangGraph's state machine handles cyclic graphs beautifully.",
      },
      {
        decision: "WebSocket Streaming",
        reasoning: "LLM chains can take a long time to resolve. Streaming intermediate steps via WebSockets dramatically improves UX compared to a loading spinner.",
      },
    ],
    whyThisTech: [
      { tech: "Supabase", reason: "Native pgvector support made it trivial to keep relational data and embeddings in one place." },
      { tech: "AWS Bedrock", reason: "Provided enterprise-grade LLM access with strict privacy controls suitable for compliance data." },
    ],
    timeline: [
      { phase: "Hour 1-4", description: "Architecture mapping and LangGraph state design." },
      { phase: "Hour 4-12", description: "Building the FastAPI backend and integrating AWS Bedrock." },
      { phase: "Hour 12-18", description: "Developing the React dashboard and WebSocket consumers." },
      { phase: "Hour 18-24", description: "Polishing UI, testing RAG accuracy, and deploying." },
    ],
    challenges: [
      "Orchestrating complex, non-linear RAG agents using LangGraph for multi-stage auditing workflows",
      "Streaming PDF document generation and parsing at low latencies via WebSocket streams",
      "Structuring multi-agent coordination protocols to ensure no hallucinations occur in legal policy drafting",
    ],
    features: [
      "7-mode compliance engine: Gap Analysis, Ghost Audit, and Policy Generation",
      "Conversational AI chatbot with enterprise knowledge management",
      "Automated cloud configuration security analysis",
      "Real-time audit updates using WebSockets",
      "Instant PDF policy file compilation and export",
      "Multimodal document ingestion (documents, policies, cloud configurations)",
    ],
    lessons: [
      "LangGraph offers excellent control over stateful multi-agent systems compared to traditional linear chains",
      "WebSocket streaming is highly effective for keeping users updated during prolonged analytical runs",
      "Vector search yields much better precision when chunks are pre-tagged with framework metadata (e.g., SOC 2 Trust Services Criteria)",
    ],
    future: [
      "Auto-remediation scripts for AWS, GCP, and Azure configurations",
      "Support for ISO 27001, HIPAA, and GDPR frameworks",
      "Direct API integrations with GitHub, Jira, and major CI/CD providers",
    ],
  },
  {
    slug: "wanderwise",
    name: "WanderWise",
    tagline: "AI-Powered Travel Planner",
    description:
      "An AI travel planner generating personalized itineraries based on budget, interests, and destination preferences.",
    coverImage: "/images/projects/wanderwise.png",
    techStack: ["React", "FastAPI", "PostgreSQL", "Gemini AI", "Tailwind CSS"],
    tags: ["Full Stack", "AI"],
    impact:
      "Provides end-to-end travel itinerary planning with interactive suggestions, hotel listings, and responsive UI.",
    github: "https://github.com/Ishaan6286/WanderWise",
    live: "https://wander-wise-ai.vercel.app/",
    overview:
      "WanderWise is an AI-powered travel planning platform built using React, FastAPI, PostgreSQL, and Gemini. It generates personalized travel itineraries dynamically mapped to custom budget parameters, trip durations, and interests.",
    problem:
      "Planning trip itineraries manually requires jumping across multiple websites, searching hotels, mapping attractions, and budgeting. Users need a centralized assistant to compile customizable, end-to-end trip plans instantly.",
    whyBuilt:
      "To explore structured JSON generation from LLMs and build a highly interactive, map-integrated frontend.",
    goals: [
      "Ensure the LLM strictly returns structured JSON for rendering the itinerary UI",
      "Create a fluid drag-and-drop itinerary adjustment experience",
    ],
    architecture:
      "A React frontend interfaces with a FastAPI Python web server. The backend retrieves destination details, hotel ideas, and attraction details from the Gemini API and coordinates coordinates for interactive maps. Custom routes and plans are saved in PostgreSQL.",
    apiDesign:
      "RESTful endpoints with strict Pydantic response models. The backend enforces structure on the LLM output before passing it to the client.",
    dbDesign:
      "PostgreSQL schemas for Users, Trips, and Days. One trip has many days, allowing users to modify individual days without regenerating the whole trip.",
    aiIntegration:
      "Gemini API is used for its fast generation and large context window, fed with strict system prompts to output parsable JSON arrays representing daily schedules.",
    deploymentArch:
      "Vercel (Frontend), Render (Backend), and Neon (Database).",
    engineeringDecisions: [
      {
        decision: "Pydantic parsing of LLM outputs",
        reasoning: "LLMs can be unpredictable. By passing the raw LLM output through a Pydantic model on the backend, we guarantee the frontend always receives the exact schema it expects, preventing UI crashes.",
      },
    ],
    whyThisTech: [
      { tech: "Gemini AI", reason: "Excellent at following JSON schema instructions and very fast for long-form text generation." },
      { tech: "React", reason: "Component-based architecture made building the complex daily itinerary lists straightforward." },
    ],
    timeline: [
      { phase: "Prototyping", description: "Testing LLM prompts to ensure consistent JSON outputs." },
      { phase: "Backend", description: "Setting up FastAPI and PostgreSQL models." },
      { phase: "Frontend", description: "Building the itinerary dashboard and map integrations." },
    ],
    challenges: [
      "Designing complex prompts to guarantee structured JSON output from Gemini models for clean client parsing",
      "Implementing responsive mapping widgets that scale correctly on mobile screens",
      "Structuring relational database layouts to allow multiple modifications of draft plans by users",
    ],
    features: [
      "Personalized daily itineraries based on traveler profiles and destination inputs",
      "Interactive map overlays showing attraction locations",
      "Hotel and tourist attraction suggestions",
      "Centralized travel budget tracking widget",
      "Responsive, clean dashboard interface",
    ],
    lessons: [
      "Enforcing strict output models using tools like Pydantic makes FastAPI integrations with LLMs robust and type-safe",
      "Interactive maps should be lazy-loaded to prevent slowing down initial page loads",
      "Ensuring user session continuity is essential when travelers create drafts on-the-go",
    ],
    future: [
      "Weather prediction forecasts integrated directly into itinerary days",
      "Collaborative travel plans with real-time multi-user editing",
      "Direct booking integrations for flights and hotel rooms",
    ],
  },
  {
    slug: "fixion",
    name: "Fixion",
    tagline: "LLM Hallucination Detection Extension",
    description:
      "An LLM-powered browser extension that detects, analyzes, and mitigates AI hallucinations in real-time.",
    coverImage: "/images/projects/fixion.png",
    techStack: ["JavaScript", "Python", "FastAPI", "LLMs", "Chrome Extensions"],
    tags: ["AI", "Open Source", "Backend"],
    impact:
      "Improves response factual accuracy across web platforms using a multi-stage validation and correction pipeline.",
    github: "https://github.com/moneyutkarsh/Fixion",
    live: "https://github.com/moneyutkarsh/Fixion",
    overview:
      "Fixion is an LLM-powered browser extension developed to detect, analyze, and mitigate AI hallucinations. It intercepts AI responses on web pages and passes them through a multi-stage validation pipeline before presenting them to the user.",
    problem:
      "Generative AI models are prone to hallucinating facts, which can mislead users who copy or trust their outputs directly. A real-time, cross-platform validation layer is needed to catch and correct these errors dynamically.",
    whyBuilt:
      "To build a trust layer for AI outputs that works natively where users interact with AI models (in the browser).",
    goals: [
      "Process text without slowing down the user's browsing experience",
      "Accurately flag unverified claims without excessive false positives",
    ],
    architecture:
      "A Chrome extension background script monitors page DOM updates and sends text to a FastAPI validation microservice. The service runs validation checks combining vector search retrieval, evidence corroboration, confidence scoring, and factual correction.",
    apiDesign:
      "A simple, highly optimized POST endpoint that accepts text snippets and returns a JSON array of flagged claims, severity scores, and corrected suggestions.",
    dbDesign:
      "Stateless backend design for maximum speed, though logs are kept temporarily in Redis for rate-limiting and telemetry.",
    aiIntegration:
      "Uses a small, fast evaluator LLM to extract factual claims from the text, then uses standard search APIs to retrieve ground truth, and finally compares them to assign a confidence score.",
    deploymentArch:
      "Chrome Web Store (Client) and Google Cloud Run for the stateless FastAPI validation service to handle traffic spikes.",
    engineeringDecisions: [
      {
        decision: "Stateless Validation Service",
        reasoning: "To keep latency low, the backend doesn't write to a database. It simply processes the text and returns results, allowing horizontal scaling via serverless containers.",
      },
      {
        decision: "Separating claim extraction from verification",
        reasoning: "Asking an LLM to do both at once reduces accuracy. We split it into two steps: extract facts, then verify them against external sources.",
      },
    ],
    whyThisTech: [
      { tech: "Chrome Extensions API", reason: "The only way to natively intercept and augment DOM elements across different AI chat platforms." },
      { tech: "FastAPI", reason: "Python is unmatched for text processing and AI library integrations." },
    ],
    timeline: [
      { phase: "Exploration", description: "Testing if DOM interception was fast enough for real-time chat." },
      { phase: "Backend AI", description: "Building the two-step verification pipeline." },
      { phase: "Integration", description: "Injecting UI highlights into the browser DOM cleanly." },
    ],
    challenges: [
      "Minimizing processing latency on long texts so the extension doesn't slow down the native user browsing experience",
      "Designing resilient DOM query selectors that work reliably across different AI chat platforms (ChatGPT, Claude, Gemini)",
      "Balancing verification precision with API cost constraints using smart caching layers",
    ],
    features: [
      "Real-time DOM analysis to capture AI-generated content",
      "Multi-stage validation pipeline incorporating confidence scoring",
      "Evidence-based corroboration using web searches and knowledge lookup",
      "Hallucination flagging with inline corrections and source suggestions",
      "Simple, modern browser pop-up interface for controlling detection modes",
    ],
    lessons: [
      "Building browser extensions requires handling strict security policies (CSPs) regarding external network requests",
      "Factual validation is more effective when separating assertion extraction from assertion verification",
      "Users prefer non-intrusive UI warnings (such as subtle underline markers) over blocking pop-up modals",
    ],
    future: [
      "Offline verification using local small language models (SLMs)",
      "Support for Safari, Firefox, and Edge browsers",
      "Detailed analytic history showing hallucination rates over time",
    ],
  },
];

export const experiences = [
  {
    company: "SOYL AI",
    companyShort: "SOYL",
    role: "AI Engineering Intern",
    period: "Jul 2026 – Present",
    location: "Remote",
    overview:
      "Co-developing Butler AI, a live AI hotel concierge deployed across 15 hotels, and shipping RAG-based systems for knowledge retrieval.",
    problem:
      "Hotel guests often face delays in getting responses to common queries, while staff are overwhelmed with routine requests.",
    responsibilities: [
      "Designed and deployed the full RAG pipeline for Butler AI, enabling real-time knowledge retrieval for hotel guests",
      "Optimized vector search using Pinecone and embedding models, reducing hallucination rates by 40%",
      "Integrated Butler AI with existing hotel management systems via REST APIs and webhooks",
      "Built a secure admin dashboard using React and Tailwind CSS for hotel managers to update knowledge bases",
    ],
    architecture:
      "The Butler AI backend is built with FastAPI and Python, utilizing Llama 3 via Groq for fast inference. Pinecone serves as the vector database for RAG. The system integrates with hotel PMS via webhooks and is deployed on AWS.",
    technologies: [
      "FastAPI",
      "Python",
      "Llama 3",
      "Groq API",
      "Pinecone",
      "RAG",
      "AWS",
      "React",
    ],
    results: [
      "Deployed Butler AI across 15 hotels, handling 1,000+ guest requests per month",
      "Reduced average guest response time from 5 minutes to under 3 seconds",
      "Decreased front desk call volume by 30% for routine inquiries",
    ],
  },
  {
    company: "Hewlett Packard Enterprise (HPE)",
    companyShort: "HPE",
    role: "Project Intern",
    period: "Feb 2026 – Jul 2026",
    location: "Bangalore, India",
    overview:
      "Built an AI-assisted enterprise data quality and observability platform as part of a 5-member HPE engineering team. Automated data profiling, SQL validation rules, anomaly detection, monitoring, and alerts.",
    problem:
      "Enterprise data profiling and quality enforcement at scale was slow, manually intensive, and failed to notify systems about drift or data quality anomalies in real-time. Manual validation checks couldn't catch complex schema inconsistencies.",
    responsibilities: [
      "Engineered scalable backend services for data profiling, SQL rule generation, and anomalies using FastAPI and SQLAlchemy",
      "Implemented AI-powered data validation pipelines utilizing Gemini and Groq APIs for automated compliance checkups",
      "Integrated asynchronous alerting and enterprise monitoring triggers using Redis queues and PostgreSQL databases",
      "Collaborated with a 5-member core engineering team to deliver a scalable, production-ready observability platform",
    ],
    architecture:
      "The observability platform consists of FastAPI backend microservices querying Postgres databases, backed by Redis for task scheduling and caching. The platform links to Gemini and Groq model pipelines to automate validation check creation based on database table schemas.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy",
      "Gemini API",
      "Groq API",
      "Python",
    ],
    results: [
      "Automated data profiling and validation checking across multiple databases",
      "Reduced manual SQL validation rule creation effort for backend teams",
      "Delivered robust real-time alerts for data anomaly detection",
    ],
  }
] as const;

export const skills = {
  Languages: ["C++", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["FastAPI", "Node.js", "Express.js", "SQLAlchemy"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "AI & ML": ["RAG", "LangGraph", "LangChain", "Gemini API", "Groq API", "AWS Bedrock", "TensorFlow", "GenAI", "LLMs"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "Vercel", "Render"],
  Concepts: [
    "DSA",
    "OOP",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "REST APIs",
    "JWT Authentication",
    "OAuth 2.0",
  ],
} as const;

export const education = [
  {
    institution: "Ramaiah Institute of Technology, Bangalore",
    degree: "B.E. Computer Science & Engineering (AI & ML)",
    period: "2023 – 2027",
    grade: "8.76",
    gradeLabel: "CGPA / 10",
  },
  {
    institution: "Shri Hemkund Public School, Raebareli",
    degree: "Class XII (CBSE)",
    period: "2023",
    grade: "90%",
    gradeLabel: "Score",
  },
  {
    institution: "Dayawati Modi Public School, Raebareli",
    degree: "Class X (CBSE)",
    period: "2021",
    grade: "93.8%",
    gradeLabel: "Score",
  },
] as const;

export const achievements = [
  {
    rank: "Top 10 Team",
    title: "HACKaMiNDE — Nirma University",
    description:
      "Ranked Top 10 nationally at a 72-hour national hackathon. Built and deployed a full-stack AI solution for smart time and construction site risk management.",
  },
  {
    rank: "Top 5 Team",
    title: "Hack-a-War — E-Cell RIT (Avashya Tech)",
    description:
      "Built Pramanik AI during a competitive 24-hour hackathon. Placed Top 5 among all teams, recognized for RAG-based compliance automation and scalable full-stack system design.",
  },
  {
    rank: "PR Co-Head",
    title: "IEEE PR & SP Society — RIT",
    description:
      "Led publicity and outreach for 40+ technical events, engaging 2,000+ students through campus-wide promotional initiatives and coordinating logistics.",
  },
] as const;

// NEW EXPORTS FOR PREMIUM UPGRADE

export const currently = {
  building: "Microservices architectures and real-time observability pipelines.",
  learning: "Advanced system design patterns and distributed systems.",
  focus: "Production-grade backend engineering with Python and Go.",
};

export const lookingFor = [
  "Software Engineering Roles",
  "Backend Engineering",
  "Full Stack Development",
  "AI Engineering",
  "Scalable Systems",
];

export const philosophy = [
  {
    topic: "Backend Thinking",
    content: "I believe the best backend systems are boring. They don't fail, they scale predictably, and they are easy for other engineers to read. I optimize for reliability and developer experience over cleverness.",
  },
  {
    topic: "Code Quality",
    content: "Code is read ten times more than it is written. Strict typing, clear documentation, and isolated logic layers aren't just preferences—they are requirements for any system that lives longer than a week.",
  },
  {
    topic: "AI Engineering",
    content: "LLMs are powerful but inherently unpredictable. Real engineering in AI isn't about the prompt; it's about the deterministic guardrails, structured outputs, and fallback mechanisms you build around the model.",
  },
  {
    topic: "Continuous Learning",
    content: "Technology changes, but fundamentals remain. I focus on understanding the underlying patterns (TCP/IP, relational algebra, distributed consensus) so that learning a new framework is just learning new syntax.",
  },
];
