import Image from "next/image";

export const experienceGroups = [
  {
    title: "WATA TECH",
    hashtag: "WATA TECH",
    href: "https://watatech.com.vn/",
    icon: <Image alt="wata" height={20} src="/logo/watatech.png" width={20} />,
    jobTittle: "Software Developer",
    time: "June 2024 - June 2025",
    description: [
      "Developed and maintained web applications using React, Node.js, Java Spring Boot, and PostgreSQL.",
      "Led a warehouse management system (WMS) project on the Odoo platform, collaborating with cross-functional teams to design and implement new features.",
      "Performed quality assurance testing across multiple platforms to ensure cross-browser compatibility and mobile responsiveness",
      "Participated in code reviews and mentored team members to improve code quality and development skills.",
    ],
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
