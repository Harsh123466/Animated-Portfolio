export const personalInfo = {
  name: "Harsh Adhana",
  title: "AI/ML Engineer",
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
    subtitle: "Context-Aware Document Intelligence",
    category: "Retrieval-Augmented Generation",
    description: "A document question-answering system that enables users to interact with PDF documents using Retrieval-Augmented Generation (RAG).",
    longDescription: "The system combines document chunking, dense vector embeddings, semantic retrieval, and Cross-Encoder reranking to improve the relevance of retrieved context before generating an answer.",
    highlights: [
      "Semantic Document Retrieval — Converts document chunks into dense vector representations and retrieves contextually relevant passages.",
      "Two-Stage Retrieval — Uses vector similarity search for initial candidate retrieval followed by Cross-Encoder reranking for improved relevance.",
      "Context-Aware Question Answering — Provides the LLM with the most relevant retrieved document context before generating responses.",
      "PDF-Based Knowledge Extraction — Allows users to query information directly from their uploaded documents.",
      "Reranking for Retrieval Quality — Uses a Cross-Encoder to evaluate query-document relevance and improve the final context selection.",
      "Interactive Chat Interface — Provides a conversational interface for asking questions about uploaded PDFs."
    ],
    architecture: "PDF Upload → Document Loading → Text Chunking → Embedding Generation → Vector Database → Similarity Retrieval → Cross-Encoder Reranking → LLM → Context-Aware Answer",
    techStack: ["Python", "LangChain", "Streamlit", "Sentence Transformers", "Cross-Encoder", "ChromaDB", "PyTorch", "RAG"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://huggingface.co/spaces/harshadhana/pdf-rag-chatbot",
    featured: true,
    badge: "Advanced RAG Pipeline",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50"
  },
  {
    id: "text-summarizer",
    title: "AI Text Summarizer",
    subtitle: "End-to-End NLP Application",
    category: "Natural Language Processing",
    description: "An AI-powered text summarization application that uses Hugging Face Transformers to automatically condense lengthy text into concise and meaningful summaries.",
    longDescription: "The project combines a FastAPI backend, Transformer-based NLP inference, and a responsive web interface to provide a simple end-to-end text summarization experience.",
    highlights: [
      "Transformer-Based Summarization — Uses pretrained Hugging Face Transformer models for abstractive text summarization.",
      "REST API Backend — FastAPI handles requests and connects the frontend with the NLP inference pipeline.",
      "Long-Text Processing — Designed to transform lengthy articles and textual content into shorter, easier-to-understand summaries.",
      "Clean Summary Generation — Produces concise summaries while retaining the important information from the original text.",
      "Responsive Web Interface — Provides a simple and user-friendly interface for entering text and viewing generated summaries.",
      "End-to-End NLP Pipeline — Demonstrates the complete flow from user input to model inference and final summary generation."
    ],
    architecture: "User Text → Web Client → FastAPI REST API → Hugging Face Transformer Model → Generated Summary → Web Client",
    techStack: ["Python", "FastAPI", "Hugging Face Transformers", "PyTorch", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harsh123466",
    liveDemo: "https://huggingface.co/spaces/harshadhana/text-summarizer",
    featured: true,
    badge: "Transformers & FastAPI",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-purple-500/50"
  },
  {
    id: "roadsense-ai",
    title: "RoadSense AI",
    subtitle: "Deep Learning for Road Condition Classification",
    category: "Computer Vision / Deep Learning",
    description: "RoadSense AI is a deep-learning computer vision system designed to classify road conditions based on road imagery.",
    longDescription: "The project uses transfer learning with pretrained CNN architectures to learn visual patterns associated with different levels of road damage and road-surface quality.",
    highlights: [
      "Transfer Learning — Uses pretrained deep-learning architectures such as EfficientNetB0 and ResNet18 for image classification.",
      "Road Condition Classification — Classifies road images into different severity/condition categories.",
      "Image Preprocessing & Augmentation — Applies preprocessing and augmentation techniques to improve model generalization.",
      "Deep Feature Extraction — CNN-based feature extraction enables the model to identify visual patterns associated with road damage.",
      "Model Evaluation — Evaluates model performance using training and validation metrics to analyze classification effectiveness.",
      "Interactive Prediction Interface — Provides a Streamlit interface for interacting with the trained model and obtaining road-condition predictions."
    ],
    architecture: "Road Image → Preprocessing & Augmentation → Pretrained CNN → Feature Extraction → Road Condition Classifier → Severity Rating",
    techStack: ["Python", "PyTorch", "EfficientNetB0", "ResNet18", "Deep Learning", "Scikit-learn", "NumPy", "React.js"],
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
