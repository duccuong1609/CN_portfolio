export interface AwardItem {
  title: string;
  description: string;
  date: string;
  href: string;
  images?: string[];
}

export const awards: AwardItem[] = [
  {
    title: "Employee of the Year 2024",
    description:
      "Awarded for outstanding performance and contribution to the company - WATA TECH.",
    date: "Jan 2025",
    href: "",
    images: ["/award/award_1.jpg"],
  },
  {
    title: "Champion Hackathon 2025 | App Builder Track",
    description:
      "Awarded for creative and innovative solution for the hackathon challenge - FIREGROUP.",
    date: "Dec 2025",
    href: "https://www.facebook.com/share/p/1AfiCZFgyN/",
    images: ["/award/award_2.jpeg", "/award/award_2_2.jpeg"],
  },
];
