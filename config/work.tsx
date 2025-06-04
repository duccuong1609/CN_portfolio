import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const workGroups = [
  {
    features: "Featured Project",
    image: "/odoo.PNG",
    title: "Warehouse Management System",
    description:
      "A addons system based on Odoo 18, developed to manage consignment and multi-warehouse transportation between Ho Chi Minh City and Cambodia. The system includes features for barcode scanning to retrieve demand based on consignment orders and custom reporting according to user needs.",
    href: [
      {
        label: "github",
        icon: <FaGithub size={20} />,
        href: "",
      },
      {
        label: "demo",
        icon: <FiExternalLink size={20} />,
        href: "",
      },
    ],
    tags: ["Odoo EE 18", "XML", "JavaScript", "Python", "VPS"],
  },
  {
    features: "Featured Project",
    image: "/pneumonia.PNG",
    title: "Pneumonia Detection",
    description:
      "An AI-powered web app that detects pneumonia from chest X-rays with high accuracy. Includes Grad-CAM heatmaps to highlight affected lung areas and improve interpretability.",
    href: [
      {
        label: "github",
        icon: <FaGithub size={20} />,
        href: "",
      },
      {
        label: "demo",
        icon: <FiExternalLink size={20} />,
        href: "",
      },
    ],
    tags: ["Vision Transformer", "FastAPI", "NextJS", "HeroUI", "Vercel"],
  },
  {
    features: "Featured Project",
    image: "/nirvana.jpg",
    title: "Nirvana - Telegame",
    description:
      "An innovative game that integrates with Telegram's OAuth for user authentication and Polygon wallet for cryptocurrency transactions. It supports deposits and withdrawals while managing a database of players, providing a secure and engaging gaming experience.",
    href: [
      {
        label: "github",
        icon: <FaGithub size={20} />,
        href: "https://github.com/nguyencuong1609/NirvanaGame.git",
      },
      {
        label: "demo",
        icon: <FiExternalLink size={20} />,
        href: "https://t.me/NirvanaAppBot",
      },
    ],
    tags: ["Telegram SDK", "WEB3", "Reactjs", "NeonDB", "Express"],
  },
  {
    features: "Featured Project",
    image: "/hrm.PNG",
    title: "Human Resource Management",
    description:
      "An innovative game that integrates with Telegram's OAuth for user authentication and Polygon wallet for cryptocurrency transactions. It supports deposits and withdrawals while managing a database of players, providing a secure and engaging gaming experience.",
    href: [
      {
        label: "github",
        icon: <FaGithub size={20} />,
        href: "",
      },
      {
        label: "demo",
        icon: <FiExternalLink size={20} />,
        href: "",
      },
    ],
    tags: ["Telegram SDK", "WEB3", "Reactjs", "NeonDB", "Express"],
  },
];
