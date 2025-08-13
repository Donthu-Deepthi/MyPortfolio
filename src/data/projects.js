import { BiLogoCss3, BiLogoMongodb, BiLogoNodejs, BiLogoHtml5, BiLogoJavascript } from "react-icons/bi";

const ProjectsData = [
  {
    id: "1",
    name: "URL Shortener",
    image: "./url-shortener-for-portfolio.png",
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb],
    description: "This website built to create and manage short links easily with a clean, responsive interface.",
    github: "https://github.com/Donthu-Deepthi/Url-Shortener",
    demo: "https://url-shortener-six-navy.vercel.app/",
  },
  {
    id: "2",
    name: "Teamwork Management System",
    image: "./teamwork-for-portfolio.png",
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb],
    description: "This application provides an interface for guides and students to track their work progress.",
    github: "https://github.com/Donthu-Deepthi/Team-Work-Management-System",
    demo: "https://team-work-mgmt-system.vercel.app/",
  },
  {
    id: "3",
    name: "Ecommerce Website",
    image: "./e-commerce-for-portfolio.png",
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoJavascript],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/Donthu-Deepthi/e-commerce",
    demo: "https://e-commerce-seven-rose-21.vercel.app/",
  },
];

export default ProjectsData;
