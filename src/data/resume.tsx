import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Image } from "lucide-react";

export const DATA = {
  name: "Livear Pang",
  initials: "LP",
  tag: "livpth",
  url: "https://ltree0703.github.io",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hong+kong",
  description: "Software Engineer | HKU CS + Stat | Exchange @ UNSW",
  summary: "A native Macau resident, currently living in Hong Kong and pursuing a career in information technology. Also been living in Sydney for a semester exchange. Interested in full-stack software development and data analytics. I can speak English, Cantonese, Mandarin and a bit of Japanese.",
  avatarUrl:
    "https://res.cloudinary.com/deocfjjob/image/upload/v1758285230/icon_zcnyfj.jpg",
  skills: [
    "Python",
    "C++",
    "TypeScript",
    "Git",
    "Docker",
    "Linux",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "d3.js",
    "ROS2",
    "VESC",
    "Unity Engine",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/gallery", icon: Image, label: "Gallery" },
  ],
  contact: {
    email: "livear.pth2004@outlook.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ltree0703",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/livpth",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/pth_livear",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Airport Authority Hong Kong",
      href: "https://www.hongkongairport.com",
      badges: [],
      location: "On-site",
      title: "IT Trainee",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQH7aGitV9Vn0Q/company-logo_200_200/B56aCF1qoLI8AE-/0/1788951833310/airport_authority_hong_kong_logo?e=1790812800&v=beta&t=w5vN8oKu0uLSjTvUnWA1_wkMO306FX6vNvJzM79Csls",
      start: "Jul 2026",
      end: "Present",
      description: "",
    },
    {
      company: "ReMobility Limited",
      href: "https://remobility.net",
      badges: [],
      location: "On-site",
      title: "Software Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQEoEr25pfoxxw/company-logo_200_200/company-logo_200_200/0/1692981671776/remobilityhk_logo?e=1775692800&v=beta&t=83CDJ5G5nNqwNnyamT_9Oui3o0sYh18r-Qg8FHuhMto",
      start: "Jul 2025",
      end: "Nov 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "The University of Hong Kong",
      href: "https://www.hku.hk",
      degree:
        "Bachelor of Engineering in Computer Science, Minor in Statistics",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/32/University_of_Hong_Kong.svg",
      start: "2022",
      end: "2026",
    },
    {
      school: "University of New South Wales",
      href: "https://www.unsw.edu.au",
      degree: "Exchange Semester",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_New_South_Wales_Crest_Variant_2022.png",
      start: "2025",
      end: "2025",
    },
    {
      school: "Pearson Edexcel A-Levels",
      href: "https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels.html",
      degree: "3A* in Mathematics, Further Mathematics and Physics",
      logoUrl:
        "https://logosandtypes.com/wp-content/uploads/2020/07/pearson.svg",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Le-Spy",
      href: "https://lebron-james-wine.vercel.app",
      dates: "Jul 2025 - Aug 2025",
      active: false,
      description:
        "Data logging and visualization tool for robot performance analysis in ABU Robocon 2025 Mongolia",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "d3.js",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://lebron-james-wine.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Cathay Hackathon 2025",
      dates: "15-16 November, 2025",
      location: "Hong Kong",
      description:
        "Developed LiveAR - a web-based demo for AR-enhanced low-altitude urban tours. The project demonstrates a small travel/tour booking platform focused on eVTOL/helipad-based experiences around Hong Kong, with a rich client UI, map components, Clerk authentication, and a Postgres/Neon backend accessed with serverless SQL and Prisma.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/LTree0703/hackaholics-livear",
        },
      ],
    },
  ],
} as const;
