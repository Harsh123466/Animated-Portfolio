export const personalInfo = {
  name: "Harsh Adhana",
  title: "AI/ML & Software Engineer",
  tagline: "Engineering Agentic Systems, RAG Architectures & High-Performance Backends",
  bio: "Pre-final B.Tech Computer Science student with a 8.75 CGPA at I.T.S Engineering College. Passionate about engineering autonomous AI agent frameworks, robust RAG retrieval pipelines, and high-performance machine learning models. Solved 900+ DSA algorithmic challenges with competitive problem-solving rigor.",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "harshadhana640@gmail.com",
  github: "https://github.com/Harsh123466",
  githubUsername: "Harsh123466",
  linkedin: "https://www.linkedin.com/in/harsh-adhana-4b5042346/",
  leetcode: "https://leetcode.com/u/harshadhana2210/",
  leetcodeUsername: "harshadhana2210",
  status: "Available for AI/ML & Software Engineering Roles",
  statusColor: "#10b981", // neon emerald
};

export const stats = [
  {
    value: "900+",
    label: "DSA Problems Solved",
    subtext: "LeetCode & Competitive Platforms",
    icon: "Code2",
    accent: "text-neon-emerald"
  },
  {
    value: "8.75",
    label: "B.Tech CSE CGPA",
    subtext: "I.T.S Engineering College",
    icon: "GraduationCap",
    accent: "text-neon-cyan"
  },
  {
    value: "Top 11%",
    label: "LeetCode Weekly Rank",
    subtext: "Rank 3,916 of 35,681 Worldwide",
    icon: "Trophy",
    accent: "text-amber-400"
  },
  {
    value: "4+",
    label: "Production AI Systems",
    subtext: "Agentic, RAG & Vision Platforms",
    icon: "Cpu",
    accent: "text-neon-purple"
  }
];

export const skillCategories = [
  {
    id: "genai",
    title: "Gen AI & Agentic Systems",
    description: "Multi-agent workflows, vector retrieval pipelines, and LLM orchestration.",
    skills: [
      { name: "Agentic AI", level: "Advanced", icon: "Bot", highlight: true },
      { name: "LangChain", level: "Advanced", icon: "Boxes", highlight: true },
      { name: "LangGraph", level: "Advanced", icon: "GitFork", highlight: true },
      { name: "RAG Pipelines", level: "Advanced", icon: "DatabaseZap", highlight: true },
      { name: "Gen AI", level: "Advanced", icon: "Sparkles", highlight: true },
      { name: "Hugging Face Transformers", level: "Proficient", icon: "Cpu", highlight: false }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    description: "End-to-end model development, computer vision, and scientific computing.",
    skills: [
      { name: "PyTorch", level: "Advanced", icon: "Flame", highlight: true },
      { name: "Deep Learning", level: "Advanced", icon: "Brain", highlight: true },
      { name: "Machine Learning", level: "Advanced", icon: "Activity", highlight: true },
      { name: "Scikit-learn", level: "Advanced", icon: "Binary", highlight: false },
      { name: "Pandas", level: "Advanced", icon: "Table", highlight: false },
      { name: "NumPy", level: "Advanced", icon: "Sigma", highlight: false }
    ]
  },
  {
    id: "core",
    title: "Core Programming & Systems",
    description: "Strong algorithmic foundations, object-oriented design, and memory efficiency.",
    skills: [
      { name: "Python", level: "Expert", icon: "Terminal", highlight: true },
      { name: "C++", level: "Advanced", icon: "Code", highlight: true },
      { name: "SQL", level: "Proficient", icon: "Database", highlight: false },
      { name: "Data Structures & Algo", level: "Expert (900+)", icon: "Cpu", highlight: true }
    ]
  },
  {
    id: "web",
    title: "Web, APIs & Tooling",
    description: "Modern full-stack interfaces, fast API backends, and deployment workflows.",
    skills: [
      { name: "FastAPI", level: "Advanced", icon: "Zap", highlight: true },
      { name: "React", level: "Advanced", icon: "Atom", highlight: true },
      { name: "Streamlit", level: "Advanced", icon: "Layout", highlight: false },
      { name: "Git / GitHub", level: "Advanced", icon: "GitBranch", highlight: false }
    ]
  }
];

export const projects = [
  {
    id: "agentwatch",
    title: "AgentWatch",
    subtitle: "Autonomous AI-Agent Observability & Self-Recovery Platform",
    period: "Aug 2026 — Present",
    category: "Agentic AI / Infrastructure",
    description: "An AI-agent observability and reliability platform designed to monitor, trace, evaluate, and recover autonomous AI-agent executions.",
    longDescription: "AgentWatch is an AI-agent observability and reliability platform designed to monitor, trace, evaluate, and recover autonomous AI-agent executions. It observes agent runs in real time, records agent and tool interactions, detects failures and abnormal execution patterns, and provides the foundation for automated recovery and evidence-based verification.",
    whyProject: "Modern AI agents can fail silently: they may enter loops, repeatedly call failing tools, produce unsupported answers, or incorrectly claim that a task has been completed. AgentWatch acts as an observability and reliability layer around AI agents, making their behavior traceable, measurable, verifiable, and recoverable.",
    highlights: [
      "Real-time Agent Monitoring — Tracks agent execution, tool calls, successes, failures, and execution states.",
      "Execution Tracing — Records multi-step agent trajectories for debugging and observability.",
      "Failure Detection — Identifies tool failures, repeated failures, stuck execution patterns, and unsuccessful agent runs.",
      "Self-Recovery — Designed to enable agents to recover from failures instead of simply terminating.",
      "Evidence Verification — Verifies whether an agent's final response is supported by the evidence collected during execution.",
      "Agent Safety — Provides monitoring and guardrails for potentially unsafe or unreliable agent behavior.",
      "Telemetry & Analytics — Tracks execution status and provides a foundation for analyzing latency, tool usage, and agent reliability."
    ],
    architecture: "User Task → FastAPI → LangGraph Agent → Tools → AgentWatch Tracing & Monitoring → Verification / Recovery",
    techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "Groq", "SQLAlchemy", "PostgreSQL/SQLite", "React", "Tailwind CSS"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://github.com/Harsh123466",
    featured: true,
    badge: "Flagship Agentic System",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/50"
  },
  {
    id: "pdf-rag-chatbot",
    title: "PDF RAG Chatbot",
    subtitle: "Context-Aware Document Intelligence with Cross-Encoder Reranking",
    category: "Retrieval-Augmented Generation",
    description: "A production document question-answering system leveraging advanced RAG pipelines, dense vector embeddings, and cross-encoder reranking for pinpoint factual accuracy.",
    longDescription: "Engineered to overcome standard vector search limitations. PDF RAG Chatbot implements hybrid chunking (semantic + sliding window), dense vector embeddings, metadata filtering, and two-stage cross-encoder reranking to eliminate hallucination when querying dense research papers and manuals.",
    highlights: [
      "Two-stage retrieval pipeline: Vector ANN search + Cross-Encoder reranker",
      "Sub-document source citation with direct page & passage reference",
      "Dynamic chunking optimized for tables, code snippets, and hierarchical headers",
      "Interactive chat interface with token-by-token streaming responses"
    ],
    architecture: "PDF Ingestion & Semantic Chunking → Embedding Model → Vector Index → Cross-Encoder Reranker → LLM Context Assembler",
    techStack: ["RAG", "LangChain", "Python", "FastAPI", "React", "Vector DB", "PyTorch"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://github.com/Harsh123466",
    featured: true,
    badge: "Advanced RAG Pipeline",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50"
  },
  {
    id: "text-summarizer",
    title: "AI Text Summarizer",
    subtitle: "End-to-End NLP Pipeline with Hugging Face Transformers",
    category: "Natural Language Processing",
    description: "An AI-powered text summarization application built using Hugging Face Transformers, FastAPI backend, and a modern responsive frontend.",
    longDescription: "Features fine-tuned abstractive and extractive summarization models capable of condensing long articles, technical papers, and transcripts into key executive insights, bullet-point digests, and critical action items with latency under 400ms.",
    highlights: [
      "Fine-tuned Transformer models for abstractive and extractive modes",
      "FastAPI asynchronous inference server with batch request handling",
      "Real-time summary length, tone customization, and bullet synthesis",
      "Modern responsive UI with syntax highlighting and instant clipboard export"
    ],
    architecture: "FastAPI REST API → Hugging Face Transformer Pipeline (BART/T5) → Token Optimizer → Clean Web Client",
    techStack: ["Python", "FastAPI", "Hugging Face", "PyTorch", "React", "Tailwind CSS"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://github.com/Harsh123466",
    featured: true,
    badge: "Transformers & Fast API",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-purple-500/50"
  },
  {
    id: "roadsense-ai",
    title: "RoadSense AI",
    subtitle: "Deep Learning Computer Vision for Road Hazard Classification",
    category: "Computer Vision / Deep Learning",
    description: "An AI-based road-condition classification and pothole/hazard detection platform using deep convolutional neural networks.",
    longDescription: "RoadSense AI analyzes live video feeds and dashcam imagery to detect potholes, cracks, surface deformities, and severe road distress in real-time. Built with PyTorch and computer vision data augmentation pipelines.",
    highlights: [
      "Custom CNN / Transfer Learning architecture for high-accuracy road defect detection",
      "Optimized inference engine capable of running on edge devices",
      "Visual bounding box overlay and severity heatmaps for road infrastructure reporting",
      "Comprehensive evaluation on diverse weather, lighting, and asphalt conditions"
    ],
    architecture: "Video Frame Extractor → Preprocessing & Augmentation → PyTorch Deep CNN → Hazard Classifier & Severity Scorer",
    techStack: ["PyTorch", "Deep Learning", "Python", "Scikit-learn", "NumPy", "Streamlit"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://github.com/Harsh123466",
    featured: true,
    badge: "Computer Vision & PyTorch",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "hover:border-amber-500/50"
  }
];

export const achievements = [
  {
    id: "dsa",
    title: "900+ DSA Problems Solved",
    organization: "LeetCode & Competitive Coding",
    period: "Continuous",
    description: "Solved over 900 algorithmic and data structure problems spanning Dynamic Programming, Graph Algorithms, Trees, and System Optimization in C++ and Python.",
    tag: "Algorithms & Problem Solving",
    highlight: "900+ Solved",
    icon: "Code2",
    accent: "text-neon-emerald",
    link: "https://leetcode.com/u/harshadhana2210/"
  },
  {
    id: "leetcode-contest",
    title: "LeetCode Weekly Contest Rank 3,916 / 35,681",
    organization: "LeetCode Worldwide",
    period: "Global Contest",
    description: "Placed among the Top 11% worldwide competitors in LeetCode Global Weekly Contest, demonstrating rapid problem analysis and time-pressured debugging skills.",
    tag: "Top 11% Global Ranking",
    highlight: "Rank 3,916",
    icon: "Trophy",
    accent: "text-amber-400",
    link: "https://leetcode.com/u/harshadhana2210/"
  },
  {
    id: "hackathon-leader",
    title: "3rd Place in College Hackathon & Team Leader",
    organization: "I.T.S Engineering College",
    period: "Hackathon Event",
    description: "Led a cross-functional engineering team to 3rd place victory by architecting and delivering an end-to-end working software solution within a 24-hour sprint.",
    tag: "Hackathon 3rd Place & Leadership",
    highlight: "3rd Place Podium",
    icon: "Medal",
    accent: "text-neon-cyan"
  }
];

export const education = {
  institution: "I.T.S Engineering College",
  location: "Greater Noida, Uttar Pradesh, India",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science & Engineering (CSE)",
  cgpa: "8.75 / 10.0",
  period: "2022 — Present",
  coursework: [
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms",
    "Artificial Intelligence & Machine Learning",
    "Database Management Systems (SQL)",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming (C++)"
  ]
};

export const faqs = [
  {
    question: "What are Harsh's core technical specializations?",
    answer: "Harsh specializes in Generative AI (LangChain, LangGraph, RAG pipelines), Agentic AI architectures, Deep Learning with PyTorch, and building production-grade asynchronous backends using FastAPI and Python."
  },
  {
    question: "How is Harsh's competitive programming and algorithmic background?",
    answer: "Harsh has solved over 900 DSA challenges across LeetCode and competitive programming platforms, achieved a global Weekly Contest rank of 3,916 out of 35,681 participants (Top 11%), and maintains a high 8.75 CGPA in B.Tech CSE."
  },
  {
    question: "What kind of roles is Harsh actively seeking?",
    answer: "Harsh is actively looking for AI Engineer, Machine Learning Engineer, Generative AI / Agentic AI Engineer, and Software Development Engineer (SDE) roles and internships."
  },
  {
    question: "How to get in touch for collaboration or interview opportunities?",
    answer: "You can email Harsh directly at harshadhana640@gmail.com, connect on LinkedIn, or fill out the quick project briefing form below. He responds within 24 hours."
  }
];
