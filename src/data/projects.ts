import type { Project } from "@/types";

export const professionalProjects: Project[] = [
  {
    id: "chat", number: "01", kind: "Professional",
    title: "Real-Time Live Chat & AI Assistant Platform",
    summary: "Real-time customer messaging with agent presence and AI reply suggestions backed by RAG.",
    tech: ["Next.js","TypeScript","Redux Toolkit","Node.js","Express.js","Socket.IO","WebSockets","Redis","OpenAI APIs","RAG","Python","FastAPI","MongoDB","MySQL","JWT","RBAC","Docker","CI/CD"],
    features: ["Real-time customer messaging","Live chat","Typing indicators","Read receipts","Agent presence","Automatic reconnection","AI reply suggestions","OpenAI integration","RAG-based knowledge retrieval","FastAPI AI services","JWT authentication","Role-based access control"],
    responsibilities: [
      "Real-time messaging with typing indicators, read receipts, agent presence, and automatic reconnection",
      "AI reply suggestions using OpenAI APIs and RAG-based knowledge retrieval",
      "FastAPI AI services, MongoDB chat history, and MySQL user/team data",
      "JWT authentication, role-based access control, Docker, and CI/CD",
    ],
    architecture: [
      { layer: "Frontend", tech: ["Next.js","TypeScript","Redux Toolkit"] },
      { layer: "API Layer", tech: ["Node.js","Express.js","Socket.IO","WebSockets"] },
      { layer: "Auth & Access", tech: ["JWT","RBAC"] },
      { layer: "Database", tech: ["MongoDB","MySQL","Redis"] },
      { layer: "AI Services", tech: ["Python","FastAPI"] },
      { layer: "LLM / RAG", tech: ["OpenAI APIs","RAG"] },
      { layer: "Delivery", tech: ["Docker","CI/CD"] },
    ],
  },
  {
    id: "ops", number: "02", kind: "Professional",
    title: "Real-Time Operations Dashboard with AI Insights",
    summary: "Live monitoring dashboard with AI-generated anomaly summaries and natural-language data queries.",
    tech: ["React.js","TypeScript","Material UI","Recharts","WebSockets","SSE","Node.js","Redis","BullMQ","FastAPI","OpenAI APIs","PostgreSQL","Jest","React Testing Library","Pytest"],
    features: ["Real-time monitoring","Live system metrics","Alerts","WebSockets","Server-Sent Events","Background jobs","Redis","BullMQ","AI anomaly summaries","Natural-language data queries","Text-to-SQL workflow","PostgreSQL optimization","Data visualizations","Automated testing"],
    responsibilities: [
      "Real-time dashboard with live metrics, alerts, and status updates over WebSockets and SSE",
      "Background jobs using Redis and BullMQ",
      "AI-generated anomaly summaries and natural-language queries through a text-to-SQL workflow",
      "PostgreSQL optimization, Recharts visualizations, frontend performance work, and automated testing",
    ],
    architecture: [
      { layer: "Frontend", tech: ["React.js","TypeScript","Material UI","Recharts"] },
      { layer: "Real-time Layer", tech: ["WebSockets","SSE"] },
      { layer: "Backend Services", tech: ["Node.js","Redis","BullMQ"] },
      { layer: "Database", tech: ["PostgreSQL"] },
      { layer: "AI Services", tech: ["FastAPI","OpenAI APIs"] },
      { layer: "Testing", tech: ["Jest","React Testing Library","Pytest"] },
    ],
  },
  {
    id: "hr", number: "03", kind: "Professional",
    title: "Multi-Tenant SaaS HR & Recruitment Platform with AI Resume Screening",
    summary: "Multi-tenant recruitment platform with AI resume parsing, candidate matching, and semantic search.",
    tech: ["Next.js","TypeScript","Redux Toolkit","Material UI","Node.js","Express.js","OpenAI APIs","Python","FastAPI","RAG","Embeddings","BullMQ","Redis","PostgreSQL","MongoDB","RBAC","Docker","CI/CD"],
    features: ["Recruiter portals","Administrator portals","Job posting","Candidate pipeline","Interview scheduling","Offer tracking","Multi-tenant architecture","Tenant-scoped data access","Role-based access control","AI resume parsing","Skill extraction","Experience extraction","AI candidate matching","Semantic candidate search","RAG","Asynchronous resume processing","Bulk resume uploads"],
    responsibilities: [
      "Recruiter and administrator portals covering job posting, candidate pipeline, interview scheduling, and offer tracking",
      "Multi-tenant architecture with tenant-scoped data access and role-based access control",
      "AI resume parsing, skill and experience extraction, candidate matching, and semantic search",
      "Asynchronous resume processing and bulk uploads with BullMQ and Redis",
    ],
    architecture: [
      { layer: "Frontend", tech: ["Next.js","TypeScript","Redux Toolkit","Material UI"] },
      { layer: "API Layer", tech: ["Node.js","Express.js","RBAC"] },
      { layer: "Background Processing", tech: ["BullMQ","Redis"] },
      { layer: "Database", tech: ["PostgreSQL","MongoDB"] },
      { layer: "AI Services", tech: ["Python","FastAPI"] },
      { layer: "LLM / RAG", tech: ["OpenAI APIs","Embeddings","RAG"] },
      { layer: "Delivery", tech: ["Docker","CI/CD"] },
    ],
  },
  {
    id: "shop", number: "04", kind: "Professional",
    title: "E-Commerce Order & Inventory Management System with AI Recommendations",
    summary: "Admin and vendor dashboards for orders and inventory, with AI product recommendations.",
    tech: ["React.js","TypeScript","Material UI","Node.js","Express.js","FastAPI","OpenAI embeddings","MySQL","Redis","Jest","Pytest"],
    features: ["Admin dashboard","Vendor dashboard","Order management","Inventory management","Product management","Sales reports","Search and filtering","RESTful APIs","Inventory consistency","AI product recommendations","Similar product discovery","Redis caching","MySQL optimization","Automated testing"],
    responsibilities: [
      "Admin and vendor dashboards for order, inventory, and product management",
      "Sales reports, search, and filtering on RESTful APIs, with inventory consistency",
      "MySQL optimization and Redis caching",
      "AI product recommendations and similar product discovery via FastAPI and OpenAI embeddings, plus automated testing",
    ],
    architecture: [
      { layer: "Frontend", tech: ["React.js","TypeScript","Material UI"] },
      { layer: "API Layer", tech: ["Node.js","Express.js"] },
      { layer: "Database & Cache", tech: ["MySQL","Redis"] },
      { layer: "AI Services", tech: ["FastAPI"] },
      { layer: "LLM / Embeddings", tech: ["OpenAI embeddings"] },
      { layer: "Testing", tech: ["Jest","Pytest"] },
    ],
  },
];

export const tripPlanner: Project = {
  id: "trip", kind: "Personal",
  title: "AI-Powered Holiday Trip Planner",
  summary: "An AI-powered application for planning holiday trips, deployed and live.",
  tech: [],            // TODO: add the real stack
  features: [],        // TODO: add real features
  responsibilities: [],
  architecture: [],
  liveUrl: "https://go-holidayz-ai-app1-jlip.vercel.app/",
  // screenshot: "/projects/trip-planner.webp",  // TODO: add a real screenshot
};

export const sneakerVerse: Project = {
  id: "sneaker", kind: "Personal",
  title: "SneakerVerse – 3D Sneaker Visualization Mobile Application",
  summary: "A mobile shopping app for viewing and customising sneakers as 3D models.",
  tech: ["React Native","Expo Router","React Three Fiber","Three.js","GLB assets","Context API"],
  features: ["Search","Category filtering","Product customization","Wishlist","Cart","Order tracking"],
  responsibilities: [],
  architecture: [
    { layer: "Mobile App", tech: ["React Native","Expo Router"] },
    { layer: "State", tech: ["Context API"] },
    { layer: "3D Rendering", tech: ["React Three Fiber","Three.js"] },
    { layer: "3D Assets", tech: ["GLB assets"] },
  ],
  githubUrl: "https://github.com/varathamani06/SneakerVerse",
};

export const allProjects = [...professionalProjects, tripPlanner, sneakerVerse];