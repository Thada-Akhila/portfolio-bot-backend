import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const PROFILE = {
  name: "Akhila Thada",
  title: "Full-Stack MERN Developer",
  experience: "1.4 years",
  location: "Hyderabad, Telangana",
  phone: "+91-8008254248",
  email: "thadaakhila@gmail.com",
  github: "https://github.com/Thada-Akhila",
  linkedin: "https://linkedin.com/in/akhila-thada-2a8b30298",

  summary: `Full-Stack MERN Developer with 1.4 years of hands-on experience building responsive,
  scalable web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in REST API
  development, JWT and OAuth 2.0 authentication, role-based access control (RBAC), and third-party API
  integrations including payment gateways and Google APIs. Comfortable working across the full stack —
  from designing database schemas and backend business logic to building clean, reusable React UI
  components. Familiar with Redis caching and cron-based automation workflows.`,

  skills: {
    frontend: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST API Development"],
    databases: ["MongoDB", "MySQL", "Redis (working knowledge)"],
    authSecurity: ["JWT", "OAuth 2.0", "Sessions", "RBAC"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Axios"],
    deployment: ["Vercel (basic)", "Hostinger VPS (basic exposure)"],
  },

  experience: [
    {
      company: "Aspire TekHub Solutions",
      role: "Full Stack Developer",
      duration: "Oct 2025 – Present",
      location: "Hyderabad, India",
      highlights: [
        "Built and maintained MERN stack applications supporting business workflow automation and admin management systems",
        "Designed and documented REST APIs using Node.js and Express.js, covering CRUD operations, business logic, and data validation",
        "Implemented secure authentication using JWT with refresh token rotation, HTTP-only cookies, and role-based access control (RBAC)",
        "Integrated Redis caching and rate limiting middleware to reduce redundant database calls and improve API throughput",
        "Integrated payment gateway APIs (including webhook validation and signature verification) for reliable transaction processing",
        "Developed responsive, reusable UI components using React.js and Tailwind CSS, following component-driven development practices",
        "Worked with MongoDB and MySQL — designed schemas, wrote aggregation pipelines, and optimized queries for data-heavy operations",
        "Collaborated on code reviews, debugging, and feature planning as part of an agile development workflow",
      ],
    },
    {
      company: "LevnTech",
      role: "Frontend Developer (React.js)",
      duration: "Apr 2024 – Nov 2024",
      location: "Hyderabad, India",
      highlights: [
        "Built responsive, mobile-friendly user interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3",
        "Created modular, reusable React components and integrated backend REST APIs using Axios with centralized error handling",
        "Implemented OAuth 2.0 (Google Sign-In) and JWT-based session management for secure user authentication",
        "Integrated Google Calendar APIs to fetch calendar events, extract Google Meet links, and display them in a custom UI",
        "Developed a calendar-based meeting automation workflow using Node.js schedulers (cron jobs) and MongoDB for event tracking",
        "Improved UX through client-side form validation, dynamic rendering, conditional UI states, and responsive layout handling",
      ],
    },
  ],

  projects: [
    {
      name: "Calendar-Based Meeting Automation System",
      description: "Integrated Google OAuth 2.0 for secure user authorization and used Google Calendar APIs to fetch scheduled events and extract Meet links. Built Node.js cron job workflows to continuously monitor upcoming meetings and trigger automated bot-based joining at the right time. Stored and managed meeting records in MongoDB with asynchronous processing for audio/video session handling and status tracking. Handled edge cases like token refresh, meeting cancellations, and API rate limits.",
      tech: ["Node.js", "Google OAuth 2.0", "Google Calendar API", "MongoDB", "Cron Jobs"],
      github: "https://github.com/Thada-Akhila",
    },
    {
      name: "Logs Monitoring API",
      description: "Built a backend REST API for log ingestion, structured storage, and retrieval using Node.js and MongoDB. Designed endpoints for filtering logs by level, timestamp, and service name. Applied Redis caching on frequent queries to reduce database load and improve response times.",
      tech: ["Node.js", "Express.js", "MongoDB", "Redis", "REST API"],
      github: "https://github.com/Thada-Akhila/NodeJS_Logs",
    },
    {
      name: "Aspire Brand Store & Admin Dashboard",
      description: "Developed a full-featured MERN eCommerce platform with separate customer-facing and admin interfaces. Built REST APIs covering product listing, category management, inventory tracking, and order lifecycle management. Implemented JWT authentication with RBAC — different access levels for admin, staff, and customers. Designed responsive UI using React.js and Tailwind CSS.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Tailwind CSS"],
      github: "https://github.com/Sajid-sid/Aspire-Brand-Store-website",
    },
    {
      name: "AI Portfolio Bot",
      description: "A personal AI assistant chatbot built with React + Node.js + Groq API (Llama 3) that answers recruiter and interviewer questions about me in real time with streaming responses via Server-Sent Events.",
      tech: ["React.js", "Node.js", "Express.js", "Groq API", "Llama 3", "SSE"],
      github: "https://github.com/Thada-Akhila",
    },
  ],

  education: {
    degree: "B.Tech in Computer Science",
    institution: "Vaageswari College of Engineering",
    year: "2023",
    cgpa: "7.5 / 10",
  },

  githubRepos: [
    { name: "NodeJS_Logs", url: "https://github.com/Thada-Akhila/NodeJS_Logs" },
    { name: "ABS_Admin_Dashboard_Frontend", url: "https://github.com/Sajid-sid/ABS_Admin_Dashboard_Frontend" },
    { name: "Aspire-Brand-Store-website", url: "https://github.com/Sajid-sid/Aspire-Brand-Store-website" },
    { name: "Aspire-Brand-Store--API", url: "https://github.com/Sajid-sid/Aspire-Brand-Store--API" },
    { name: "App-cost-calculator-backend", url: "https://github.com/Sajid-sid/App-cost-calculator-backend" },
    { name: "Aspire_Beauty_Fornt-End", url: "https://github.com/Sajid-sid/Aspire_Beauty_Fornt-End" },
    { name: "Aspire-Beauty-Dashboard-Backend", url: "https://github.com/Sajid-sid/Aspire-Beauty-Dashboard-Backend" },
    { name: "Aspire_Beauty_Dashboard_Front-End", url: "https://github.com/Sajid-sid/Aspire_Beauty_Dashboard_Front-End" },
  ],

  funFacts: [
    "I have 1.4 years of professional full-stack development experience",
    "I built a Calendar-Based Meeting Automation System using Google APIs and cron jobs",
    "I integrated payment gateway APIs handling real transactions with webhook validation",
    "I have worked with Redis caching, JWT refresh token rotation, and HTTP-only cookies in production",
    "I am comfortable across the entire MERN stack from database schema design to React UI",
  ],
};

function buildSystemPrompt() {
  return `You are an AI assistant representing ${PROFILE.name}, a ${PROFILE.title} with ${PROFILE.experience} of hands-on experience, based in ${PROFILE.location}.
Your job is to answer questions from recruiters, hiring managers, and developers about ${PROFILE.name}.

Speak in first person as ${PROFILE.name}. Be confident, professional, and concise.
Keep answers under 160 words unless the question genuinely requires more detail.
If asked something you cannot answer, say you would be happy to connect directly via email.

PROFESSIONAL SUMMARY:
${PROFILE.summary}

TECHNICAL SKILLS:
- Frontend: ${PROFILE.skills.frontend.join(", ")}
- Backend: ${PROFILE.skills.backend.join(", ")}
- Databases: ${PROFILE.skills.databases.join(", ")}
- Auth & Security: ${PROFILE.skills.authSecurity.join(", ")}
- Tools: ${PROFILE.skills.tools.join(", ")}
- Deployment: ${PROFILE.skills.deployment.join(", ")}

WORK EXPERIENCE:
${PROFILE.experience.map(e =>
  `${e.role} at ${e.company} (${e.duration}, ${e.location})\n  - ${e.highlights.join("\n  - ")}`
).join("\n\n")}

PROJECTS:
${PROFILE.projects.map(p =>
  `${p.name}: ${p.description}\n  Tech: ${p.tech.join(", ")}`
).join("\n\n")}

EDUCATION:
${PROFILE.education.degree} — ${PROFILE.education.institution} (${PROFILE.education.year}), CGPA: ${PROFILE.education.cgpa}

CONTACT:
- Email: ${PROFILE.email}
- Phone: ${PROFILE.phone}
- GitHub: ${PROFILE.github}
- LinkedIn: ${PROFILE.linkedin}

GITHUB REPOS (9 total):
${PROFILE.githubRepos.map(r => `- ${r.name}: ${r.url}`).join("\n")}

KEY FACTS:
${PROFILE.funFacts.join("\n")}

Always represent ${PROFILE.name} professionally and in the best light.`;
}

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages))
    return res.status(400).json({ error: "messages array is required" });
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      max_tokens: 1024,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error("Groq API error:", err.message);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

app.post("/api/chat/stream", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages))
    return res.status(400).json({ error: "messages array is required" });

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      max_tokens: 1024,
      stream: true,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    });
    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content || "";
      if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
    }
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error("Streaming error:", err.message);
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    res.end();
  }
});

app.get("/api/profile", (req, res) => {
  res.json({
    name: PROFILE.name,
    title: PROFILE.title,
    experience: PROFILE.experience,
    location: PROFILE.location,
    email: PROFILE.email,
    github: PROFILE.github,
    linkedin: PROFILE.linkedin,
    skills: PROFILE.skills,
    suggestedQuestions: [
      "What is your MERN stack experience?",
      "Tell me about the Meeting Automation project",
      "What authentication methods have you implemented?",
      "How have you used Redis in production?",
      "Are you open to new opportunities?",
    ],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Portfolio Bot backend running on http://localhost:${PORT}`);
});
