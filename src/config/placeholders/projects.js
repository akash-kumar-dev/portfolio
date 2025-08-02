import { title } from "framer-motion/client";
import { BrailleAutocorrectImg, CampusConnectImg, PiiDetectionImg, PortfolioImg, ScholarSyncImg } from "../../assets/images";

const projects = [
  {
    title: "PII Detection & Image Masking System",
    description: "AI-powered document privacy tool that automatically detects and masks PII in images using OCR and local LLM models.",
    image: PiiDetectionImg,
    techStack: ["Python", "image-processing", "fastapi", "LLM", "Ollama", "OCR", "react"],
    liveUrl: "",
    githubUrl: "https://github.com/akash-kumar-dev/PII-Detection-Masking-System",
  },
  {
    title: "ScholarSync",
    description: "A platform that parses resumes (PDF/DOCX) using AI models and regex, scrapes Google Scholar profiles, and provides personalized project suggestions based on user skills and academic achievements.",
    image: ScholarSyncImg,
    techStack: ["Next.js", "TypeScript", "React", "cheerio", "Regex", "web-scraping", "mammoth.js", "pdf-parse", "Tailwind CSS"],
    liveUrl: "https://scholarsync-henna.vercel.app/",
    githubUrl: "https://github.com/akash-kumar-dev/scholarsync",
  },
  {
    title: "Braille Autocorrect and Suggestion System",
    description: "A sophisticated autocorrect and suggestion system for Braille input using the QWERTY keyboard format. This project aims to improve the typing experience for visually impaired individuals by providing real-time suggestions, auto-correction, and visual feedback.",
    image: BrailleAutocorrectImg,
    techStack: ["React", "Tailwind CSS", "Data Structures", "Levenshtein Distance", "JavaScript"],
    liveUrl: "https://braille-suggestions.vercel.app/",
    githubUrl: "https://github.com/akash-kumar-dev/braille-autocorrect",
  },
  {
    title: "CampusConnect",
    description: "A marketplace exclusively for college students. A platform for connecting college students, allowing seniors to list items for sale or donation to juniors.",
    image: CampusConnectImg,
    techStack: ["TurboRepo", "Prisma ORM", "PostgreSQL", "Next.js", "NextAuth", "Tailwind CSS"],
    liveUrl: "https://acampusconnect.vercel.app",
    githubUrl: "https://github.com/akash-kumar-dev/CampusConnect",
  },
  {
    title: "Portfolio",
    description: "A personal website showcasing my projects, skills, and professional experience.",
    image: PortfolioImg,
    techStack: ["React.js", "Framer Motion", "Bootstrap", "CSS3"],
    liveUrl: "https://akashkumar-dev.vercel.app",
    githubUrl: "https://github.com/akash-kumar-dev/portfolio",
  },
];

export default projects;