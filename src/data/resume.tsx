import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Image } from "lucide-react";

export const DATA = {
  name: "Livear Pang",
  initials: "LP",
  tag: "livpth",
  url: "https://ltree0703.github.io",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hong+kong",
  description: "Final year computer science student, born and raised in Macau.",
  summary: "",
  avatarUrl:
    "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-19/543998508_18357841243082579_4437893180523027023_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QGs57huJSwq-TEKQPuwkYYX_FTHKQ7vM54pheH-Gl6s-N8YK_rLT3k-dyEEeG-nuEg&_nc_ohc=prpgcOpOFZsQ7kNvwEF4VnD&_nc_gid=y-ZvN07mMWkotgMZrmvuTA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfamCy4eHnuemkDE1DwBPf3RbyNl8TM6_j8h7D4zhY8f8w&oe=68D2BA56&_nc_sid=7a9f4b",
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
      company: "ReMobility Limited",
      href: "https://remobility.net",
      badges: [],
      location: "On-site",
      title: "Software Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQEoEr25pfoxxw/company-logo_200_200/company-logo_200_200/0/1692981671776/remobilityhk_logo?e=1758758400&v=beta&t=9wHmUxK2iSLhXDjxkVlw4luRPZNgCM0oQL0kH5YGUFI",
      start: "Jul 2025",
      end: "Aug 2025",
      description:
        "",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
  ],
} as const;
