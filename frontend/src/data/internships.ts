export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "remote" | "hybrid" | "onsite";
  industry: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline: string;
  skills: string[];
  salary?: string;
  logo?: string;
}

export const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Marketing",
  "Education",
  "Engineering",
  "Consulting",
  "Design",
  "Legal",
  "Media"
];

export const skills = [
  "JavaScript",
  "React",
  "Python",
  "Java",
  "SQL",
  "Data Analysis",
  "Adobe Creative Suite",
  "Marketing",
  "Social Media",
  "Project Management",
  "Customer Service",
  "Research",
  "Communication",
  "SEO",
  "Content Writing"
];

export const locations = [
  "Remote",
  "New York",
  "San Francisco",
  "London",
  "Berlin",
  "Tokyo",
  "Sydney",
  "Toronto",
  "Paris",
  "Singapore"
];

export const companyTypes = [
  "Startup",
  "SME",
  "Enterprise",
  "Non-profit",
  "Government",
  "Agency"
];

export const mockInternships: Internship[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Ho Chi Minh City",
    type: "hybrid",
    industry: "Technology",
    description: "Join our dynamic team to build modern web applications using React and TypeScript. Work on real projects and learn from experienced developers in a supportive environment.",
    requirements: ["Currently pursuing a degree in Computer Science or related field", "Basic knowledge of JavaScript", "Eager to learn new technologies"],
    postedDate: "2025-03-20",
    deadline: "2025-05-15",
    skills: ["JavaScript", "React", "TypeScript", "HTML/CSS"],
    salary: "$25/hour",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=250&h=250&fit=crop"
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "BrandBoost",
    location: "Remote",
    type: "remote",
    industry: "Marketing",
    description: "Learn to create and optimize digital marketing campaigns across multiple platforms. Gain hands-on experience with SEO, content marketing, and social media strategy development.",
    requirements: ["Marketing, Communications, or Business major", "Strong writing skills", "Knowledge of social media platforms"],
    postedDate: "2025-03-25",
    deadline: "2025-04-30",
    skills: ["Social Media", "Content Writing", "SEO", "Analytics"],
    logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=250&h=250&fit=crop"
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "DataVision",
    location: "Singapore",
    type: "onsite",
    industry: "Technology",
    description: "Apply machine learning and statistical analysis to solve real business problems. Collaborate with a team of data scientists and engineers to develop innovative solutions.",
    requirements: ["Statistics, Mathematics, or Computer Science major", "Experience with Python", "Knowledge of statistical concepts"],
    postedDate: "2025-03-15",
    deadline: "2025-05-10",
    skills: ["Python", "Data Analysis", "Machine Learning", "SQL"],
    salary: "S$28/hour",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=250&h=250&fit=crop"
  },
  {
    id: "4",
    title: "UX/UI Design Intern",
    company: "CreativeMinds",
    location: "Ho Chi Minh City",
    type: "hybrid",
    industry: "Design",
    description: "Create intuitive and visually appealing user interfaces for web and mobile applications. Participate in user research, wireframing, prototyping, and usability testing.",
    requirements: ["Design or Human-Computer Interaction major", "Familiar with design tools like Figma or Adobe XD", "Basic understanding of UI/UX principles"],
    postedDate: "2025-03-22",
    deadline: "2025-05-20",
    skills: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    salary: "$25/hour",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=250&h=250&fit=crop"
  },
  {
    id: "5",
    title: "Software Engineer Intern",
    company: "CodeCraft",
    location: "Remote",
    type: "remote",
    industry: "Technology",
    description: "Develop backend services and APIs using modern technologies. Work alongside senior engineers to implement features, fix bugs, and improve system performance.",
    requirements: ["Computer Science or Engineering major", "Strong problem-solving skills", "Knowledge of at least one programming language"],
    postedDate: "2025-03-28",
    deadline: "2025-05-25",
    skills: ["Java", "Node.js", "API Development", "Git"],
    salary: "$26/hour",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=250&h=250&fit=crop"
  },
  {
    id: "6",
    title: "Cloud Engineering Intern",
    company: "CloudNative",
    location: "Hanoi",
    type: "hybrid",
    industry: "Technology",
    description: "Learn to design, deploy, and manage cloud infrastructure on major platforms like AWS and Azure. Gain hands-on experience with containerization, orchestration, and CI/CD pipelines.",
    requirements: ["IT, Computer Science, or related major", "Basic understanding of cloud concepts", "Interest in infrastructure and operations"],
    postedDate: "2025-04-01",
    deadline: "2025-04-28",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    salary: "$24/hour",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=250&h=250&fit=crop"
  },
  {
    id: "7",
    title: "Machine Learning Research Intern",
    company: "AIFuture",
    location: "Tokyo",
    type: "hybrid",
    industry: "Technology",
    description: "Work alongside our research team to develop and implement machine learning algorithms. You'll contribute to cutting-edge AI projects and gain experience with neural networks and data processing.",
    requirements: ["Graduate student in Computer Science, AI, or related field", "Experience with Python and machine learning libraries", "Strong mathematical background"],
    postedDate: "2025-03-26",
    deadline: "2025-05-15",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    salary: "¥2,500/hour",
    logo: "placeholder.svg"
  },
  {
    id: "8",
    title: "Financial Analyst Intern",
    company: "GlobalFinance",
    location: "New York",
    type: "onsite",
    industry: "Finance",
    description: "Assist in financial modeling, market research, and investment analysis. You'll learn how to evaluate investment opportunities and develop financial forecasts for clients.",
    requirements: ["Finance, Economics, or Accounting major", "Proficiency in financial modeling", "Strong Excel skills"],
    postedDate: "2025-03-18",
    deadline: "2025-04-30",
    skills: ["Financial Modeling", "Excel", "Research"],
    salary: "$26/hour",
    logo: "placeholder.svg"
  },
  {
    id: "9",
    title: "Product Management Intern",
    company: "InnovateTech",
    location: "San Francisco",
    type: "hybrid",
    industry: "Technology",
    description: "Work with our product team to develop and refine product features. You'll learn about user research, requirements gathering, and agile development methodologies.",
    requirements: ["Business, Engineering, or Computer Science major", "Strong analytical thinking", "Interest in technology products"],
    postedDate: "2025-04-02",
    deadline: "2025-05-20",
    skills: ["Project Management", "Research", "Communication"],
    salary: "$24/hour",
    logo: "placeholder.svg"
  },
  {
    id: "10",
    title: "Sustainability Analyst Intern",
    company: "GreenFuture",
    location: "Berlin",
    type: "hybrid",
    industry: "Consulting",
    description: "Support our sustainability consulting team in helping clients reduce their environmental impact. You'll assist with carbon footprint analysis, ESG reporting, and sustainable strategy development.",
    requirements: ["Environmental Science, Sustainability, or related major", "Knowledge of sustainability frameworks", "Passion for environmental issues"],
    postedDate: "2025-03-30",
    deadline: "2025-05-25",
    skills: ["Research", "Data Analysis", "Communication"],
    salary: "€16/hour",
    logo: "placeholder.svg"
  },
  {
    id: "11",
    title: "Human Resources Intern",
    company: "PeopleFirst",
    location: "Remote",
    type: "remote",
    industry: "Consulting",
    description: "Assist our HR team with recruitment, onboarding, and employee engagement initiatives. You'll learn about talent acquisition, HR policies, and organizational development.",
    requirements: ["Human Resources, Psychology, or Business major", "Strong interpersonal skills", "Attention to detail"],
    postedDate: "2025-03-22",
    deadline: "2025-05-10",
    skills: ["Communication", "Project Management", "Research"],
    logo: "placeholder.svg"
  },
  {
    id: "12",
    title: "Blockchain Development Intern",
    company: "ChainInnovate",
    location: "Singapore",
    type: "hybrid",
    industry: "Technology",
    description: "Join our blockchain team to develop decentralized applications and smart contracts. You'll work with Ethereum, Solidity, and Web3 technologies in a cutting-edge environment.",
    requirements: ["Computer Science or related major", "Basic knowledge of blockchain concepts", "Experience with JavaScript or Solidity"],
    postedDate: "2025-03-29",
    deadline: "2025-05-22",
    skills: ["JavaScript", "Blockchain", "Solidity"],
    salary: "S$28/hour",
    logo: "placeholder.svg"
  },
  {
    id: "13",
    title: "Social Media Marketing Intern",
    company: "DigitalEdge",
    location: "London",
    type: "hybrid",
    industry: "Marketing",
    description: "Help manage our clients' social media presence across platforms. You'll create content calendars, design graphics, analyze campaign performance, and engage with followers.",
    requirements: ["Marketing, Communications, or related major", "Experience with social media platforms", "Basic graphic design skills"],
    postedDate: "2025-04-05",
    deadline: "2025-05-30",
    skills: ["Social Media", "Content Writing", "Adobe Creative Suite"],
    salary: "£16/hour",
    logo: "placeholder.svg"
  },
  {
    id: "14",
    title: "Legal Intern",
    company: "GlobalLaw",
    location: "New York",
    type: "onsite",
    industry: "Legal",
    description: "Support our legal team in research, document review, and case preparation. You'll gain exposure to corporate law, intellectual property, and contract negotiations.",
    requirements: ["Law student (2L or 3L preferred)", "Strong research and writing skills", "Attention to detail"],
    postedDate: "2025-03-24",
    deadline: "2025-05-15",
    skills: ["Research", "Communication", "Legal Writing"],
    salary: "$23/hour",
    logo: "placeholder.svg"
  },
  {
    id: "15",
    title: "Biomedical Research Intern",
    company: "HealthInnovate",
    location: "Toronto",
    type: "onsite",
    industry: "Healthcare",
    description: "Assist our research team in conducting experiments, analyzing data, and preparing reports. You'll work on cutting-edge medical research projects in our state-of-the-art laboratory.",
    requirements: ["Biology, Chemistry, or related major", "Laboratory experience", "Understanding of research methodologies"],
    postedDate: "2025-03-19",
    deadline: "2025-05-08",
    skills: ["Research", "Data Analysis", "Laboratory Techniques"],
    salary: "CAD$22/hour",
    logo: "placeholder.svg"
  }
];

export type ApplicationStatus = "applied" | "interview" | "offer" | "rejected" | "saved";

export interface Application {
  internshipId: string;
  status: ApplicationStatus;
  appliedDate?: string;
  notes?: string;
}

export const mockApplications: Application[] = [
  {
    internshipId: "1",
    status: "interview",
    appliedDate: "2025-04-05",
    notes: "Phone interview scheduled for April 15"
  },
  {
    internshipId: "3",
    status: "applied",
    appliedDate: "2025-04-02"
  },
  {
    internshipId: "6",
    status: "saved"
  }
];

export interface CVTemplate {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  industry?: string;
}

export const cvTemplates: CVTemplate[] = [
  {
    id: "modern",
    name: "Modern Professional",
    thumbnail: "placeholder.svg",
    description: "Clean, contemporary design with a focus on skills and experience"
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    thumbnail: "placeholder.svg",
    description: "Vibrant layout perfect for design and creative roles",
    industry: "Design"
  },
  {
    id: "technical",
    name: "Technical Specialist",
    thumbnail: "placeholder.svg",
    description: "Detailed technical skills section ideal for engineering and IT roles",
    industry: "Technology"
  },
  {
    id: "minimal",
    name: "Minimal Classic",
    thumbnail: "placeholder.svg",
    description: "Traditional layout with a modern minimal aesthetic"
  },
  {
    id: "business",
    name: "Business Professional",
    thumbnail: "placeholder.svg",
    description: "Structured format perfect for business and finance roles",
    industry: "Finance"
  }
];
