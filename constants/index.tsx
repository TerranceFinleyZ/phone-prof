import projG from "../assets/projG.jpg";
import projF from "../assets/projF.jpg";
import projE from "../assets/projE.jpg";
import projD from "../assets/projD.jpg";
import projC from "../assets/projC.jpg";
import projB from "../assets/projB.jpg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Terrance Finley",
  role: "Sr. Software Engineer",
  subheading:
    "With 5 years of full-stack development experience under my belt, I'm a highly motivated and results-oriented developer. I'm looking for a collaborative and supportive company culture where I can contribute to meaningful projects and thrive within a talented team.",
};

export const PROJECTS = [
  {
    name: "Agency.",
    description: "Imperial-World: A web-building & AI image generator platform.",
    image: projG,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Web Design.",
    description: "Meza: offers website enhancement and AWS cloud deployment.",
    image: projF,
    link: "https://meza-web.netlify.app/",
  },
  {
    name: "Game Dev.",
    description: "Luma: Game studio using Python and Unreal Engine.",
    image: projE,
    link: "https://luma-gaming.netlify.app",
  },
  {
    name: "Blender & Graphic Design.",
    description:
      "Zipa: Assisting clients with marketing and branding.",
    image: projD,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "Engineering.",
    description: "Fleet Beacon: Mechatronics engineering for hardware and robotics.",
    image: projC,
    link: "https://github.com/your-github/fitconnect",
  },
  {
    name: "Photography & Film.",
    description: "Glow: Luxury fashion photography and choreography.",
    image: projB,
    link: "https://glow-lux.netlify.app/",
  },
];


