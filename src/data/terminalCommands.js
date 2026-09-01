import { personalInfo, stats, skillCategories, projects, achievements, education } from './portfolioData';

export const executeCommand = (rawInput) => {
  const input = rawInput.trim();
  if (!input) return null;

  const parts = input.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ').toLowerCase();

  switch (cmd) {
    case 'help':
      return {
        type: 'html',
        content: `
Available commands:
  <span class="text-neon-emerald font-bold">whoami</span>       - About Harsh Adhana
  <span class="text-neon-emerald font-bold">skills</span>       - Technical skill matrix
  <span class="text-neon-emerald font-bold">projects</span>     - List featured AI projects
  <span class="text-neon-emerald font-bold">project [name]</span>- Deep dive into a project (e.g. <span class="text-neon-cyan">project agentwatch</span>)
  <span class="text-neon-emerald font-bold">stats</span>        - Competitive stats & metrics
  <span class="text-neon-emerald font-bold">achievements</span> - Contest ranks & Hackathon honors
  <span class="text-neon-emerald font-bold">education</span>    - Academic background & CGPA
  <span class="text-neon-emerald font-bold">contact</span>      - Email, GitHub & LinkedIn links
  <span class="text-neon-emerald font-bold">ask [question]</span>- Query Harsh's AI Knowledge Base
  <span class="text-neon-emerald font-bold">clear</span>        - Clear terminal history
        `
      };

    case 'whoami':
    case 'bio':
    case 'about':
      return {
        type: 'html',
        content: `
<span class="text-neon-cyan font-bold">${personalInfo.name}</span> — <span class="text-slate-300">${personalInfo.title}</span>
<span class="text-slate-400 mt-1 block">${personalInfo.bio}</span>
<span class="text-xs text-neon-emerald mt-2 block">Location: ${personalInfo.location} | Status: 🟢 ${personalInfo.status}</span>
        `
      };

    case 'skills':
      return {
        type: 'html',
        content: skillCategories.map(cat => `
<span class="text-neon-emerald font-bold">▶ ${cat.title}:</span>
<span class="text-slate-300 ml-2">${cat.skills.map(s => s.name).join(' • ')}</span>
        `).join('\n')
      };

    case 'projects':
      return {
        type: 'html',
        content: projects.map((p, idx) => `
<span class="text-neon-cyan font-bold">[0${idx + 1}] ${p.title}</span> <span class="text-xs text-neon-emerald">(${p.category})</span>
  <span class="text-slate-400">${p.description}</span>
  <span class="text-slate-500 text-xs">Stack: ${p.techStack.join(', ')}</span>
        `).join('\n') + `\n\n<span class="text-slate-500 italic">Tip: Type 'project agentwatch' or 'project rag' for technical breakdown.</span>`
      };

    case 'project':
      if (!args) {
        return {
          type: 'text',
          content: "Usage: project <agentwatch | rag | summarizer | roadsense>"
        };
      }
      const match = projects.find(p => 
        p.id.includes(args) || 
        p.title.toLowerCase().includes(args)
      );
      if (match) {
        return {
          type: 'html',
          content: `
<span class="text-neon-cyan font-bold text-base">${match.title}</span> — <span class="text-slate-300">${match.subtitle}</span>
<span class="text-slate-400 mt-2 block">${match.longDescription}</span>

<span class="text-neon-emerald font-bold mt-2 block">System Architecture:</span>
<span class="text-slate-300 ml-2">${match.architecture}</span>

<span class="text-neon-emerald font-bold mt-2 block">Key Highlights:</span>
${match.highlights.map(h => `<span class="text-slate-400 ml-2">✓ ${h}</span>`).join('\n')}

<span class="text-slate-500 mt-2 block">Tech Stack: ${match.techStack.join(' • ')}</span>
<span class="text-neon-cyan text-xs mt-1 block">GitHub: ${match.github}</span>
          `
        };
      } else {
        return {
          type: 'text',
          content: `Project '${args}' not found. Try 'projects' to list all.`
        };
      }

    case 'stats':
    case 'metrics':
      return {
        type: 'html',
        content: stats.map(s => `
<span class="text-neon-emerald font-bold">${s.value}</span> — <span class="text-slate-200">${s.label}</span> <span class="text-slate-400">(${s.subtext})</span>
        `).join('\n')
      };

    case 'achievements':
      return {
        type: 'html',
        content: achievements.map(a => `
<span class="text-amber-400 font-bold">🏆 ${a.title}</span> <span class="text-slate-500">| ${a.organization}</span>
  <span class="text-slate-400">${a.description}</span>
        `).join('\n')
      };

    case 'education':
      return {
        type: 'html',
        content: `
<span class="text-neon-cyan font-bold">${education.degree} in ${education.major}</span>
<span class="text-slate-300">${education.institution} — ${education.location}</span>
<span class="text-neon-emerald font-bold mt-1 block">CGPA: ${education.cgpa} (${education.period})</span>
<span class="text-slate-400 text-xs mt-1 block">Key Courses: ${education.coursework.join(', ')}</span>
        `
      };

    case 'contact':
    case 'email':
      return {
        type: 'html',
        content: `
<span class="text-neon-emerald font-bold">Direct Line to Harsh Adhana:</span>
  📧 Email:    <a href="mailto:${personalInfo.email}" class="text-neon-cyan underline">${personalInfo.email}</a>
  🐙 GitHub:   <a href="${personalInfo.github}" target="_blank" class="text-neon-cyan underline">${personalInfo.github}</a>
  💼 LinkedIn: <a href="${personalInfo.linkedin}" target="_blank" class="text-neon-cyan underline">${personalInfo.linkedin}</a>
        `
      };

    case 'ask':
      if (!args) {
        return {
          type: 'text',
          content: "Usage: ask <your question about Harsh's AI projects or experience>"
        };
      }
      // Simulated intelligent agent response
      if (args.includes('rag') || args.includes('pdf')) {
        return {
          type: 'html',
          content: `<span class="text-neon-cyan">Agent Response:</span> Harsh built the <span class="text-neon-emerald">PDF RAG Chatbot</span> combining dense embeddings, semantic chunking, and cross-encoder reranking to ensure zero-hallucination document querying with direct page citations.`
        };
      } else if (args.includes('agent') || args.includes('agentwatch') || args.includes('langgraph')) {
        return {
          type: 'html',
          content: `<span class="text-neon-cyan">Agent Response:</span> In <span class="text-neon-emerald">AgentWatch</span>, Harsh built real-time trajectory inspectors and automated backtracking loops for autonomous agents using LangGraph, LangChain, and FastAPI.`
        };
      } else if (args.includes('dsa') || args.includes('leetcode') || args.includes('problem')) {
        return {
          type: 'html',
          content: `<span class="text-neon-cyan">Agent Response:</span> Harsh has solved <span class="text-neon-emerald">900+ DSA problems</span> and ranked in the <span class="text-amber-400">Top 11% globally (Rank 3,916 / 35,681)</span> in LeetCode Weekly Contest.`
        };
      } else if (args.includes('college') || args.includes('cgpa') || args.includes('gpa')) {
        return {
          type: 'html',
          content: `<span class="text-neon-cyan">Agent Response:</span> Harsh is pursuing B.Tech CSE at <span class="text-neon-emerald">I.T.S Engineering College</span>, Greater Noida with a high CGPA of <span class="text-neon-cyan">8.75</span>.`
        };
      } else {
        return {
          type: 'html',
          content: `<span class="text-neon-cyan">Agent Response:</span> Harsh is an AI/ML Engineer with deep expertise in Python, PyTorch, LangChain, RAG, and FastAPI. Feel free to reach out directly at <span class="text-neon-emerald">${personalInfo.email}</span>!`
        };
      }

    case 'sudo':
      return {
        type: 'html',
        content: `<span class="text-red-400 font-mono">Permission denied: Harsh Adhana holds root privileges on this portfolio system. 😄</span>`
      };

    default:
      return {
        type: 'html',
        content: `<span class="text-red-400">Command not recognized: '${input}'.</span> Type <span class="text-neon-emerald font-bold cursor-pointer" onclick="window.runTerminalHelp && window.runTerminalHelp()">help</span> to see available commands.`
      };
  }
};
