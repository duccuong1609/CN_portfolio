import Image from "next/image";

export const experienceGroups = [
  {
    title: "FIRE GROUP",
    hashtag: "FIRE GROUP",
    href: "https://firegroup.vn/",
    icon: (
      <Image
        alt="firegroup"
        height={20}
        src="/logo/firegroup.png"
        style={{ width: "auto" }}
        width={20}
      />
    ),
    jobTittle: "Frontend Developer",
    time: "Sep 2025 - Present",
    description: [
      "Developed core features for the Zopi Shopify ecosystem, supporting social commerce and ad intelligence tools",
      "Built Collage Daily – a Shopify mini app enabling users to create and share shoppable product collages with feed-based UI",
      "Developed Zopi Adspy – an ad discovery platform for analyzing Facebook and TikTok ads linked to Shopify products",
      "Implemented React-based feed system with virtualization for handling large ad datasets efficiently",
    ],
  },
  {
    title: "WATA TECH",
    hashtag: "WATA TECH",
    href: "https://watatech.com.vn/",
    icon: (
      <Image
        alt="wata"
        height={20}
        src="/logo/watatech.png"
        style={{ width: "auto" }}
        width={20}
      />
    ),
    jobTittle: "Software Developer",
    time: "Dec 2023 - June 2025",
    description: [
      "Developed real-time stock monitoring dashboard for WMS platform using React and role-based access control",
      "Optimized large dataset rendering and UI interactions, reducing manual stock errors and operational delays by 35%",
      "Built production tracking interface with real-time alerts for MES system, improving supervisor decision-making speed",
      "Automated reporting workflows and backend APIs using Spring Boot and PostgreSQL to ensure instant production visibility",
    ]
  },
  {
    title: "IUH",
    hashtag: "IUH",
    href: "https://iuh.edu.vn/",
    icon: <Image alt="iuh" height={20} src="/logo/iuh.png" width={20} />,
    jobTittle: "Computer Science Student",
    time: "June 2021 - Present",
    description: [
      "Studied core concepts of Artificial Intelligence, including machine learning, deep learning, and data analysis as part of academic training.",
      "Developed web-based applications using React and Python, for coursework and personal AI-related projects.",
      "Collaborated with peers on AI and software development projects, focusing on integrating intelligent features into user-facing applications.",
      "Implemented machine learning models using Python and TensorFlow for academic projects, including image classification and predictive analytics.",
    ],
  },
];
