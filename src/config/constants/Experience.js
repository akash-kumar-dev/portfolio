import {
  CodeForGovTech,
  codemod,
  ECell_IITB,
} from "../../assets";

const experiences = [
  {
    title: "Open Source Developer",
    company_name: "CodeForGovTech",
    icon: CodeForGovTech,
    iconBg: "#fff",
    date: "May 2024 - September 2024",
    points: [
      "Contributed to the NISE3 project under the a2i Bangladesh Organization as part of the Dedicated Mentorship Program (DMP'24).",
      "Redesigned and modified the user interface, developed an analytical dashboard for different user roles to improve usability, provide comprehensive insights, and enhance data accessibility.",
      "Tech Stack: PHP, Laravel, MySQL,Bootstrap"
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "E-Cell IIT Bombay",
    icon: ECell_IITB,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Played a key role in fostering an entrepreneurial mindset among students, bridging the gap between academia and the startup ecosystem.",
      "Led various initiatives, developing leadership and team management skills while promoting innovation-driven activities.",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "codemod",
    icon: codemod,
    iconBg: "#000",
    date: "August 2024 - September 2024",
    points: [
      "Developed codemods to simplify migrations, reducing developer effort and saving time.",
      "Migrated Sentry.js from version 7.x to 8.x, automating the transition using codemods.",
      "Migrated Webpack from version 4 to version 5, ensuring smooth upgrades and compatibility.",
      "Utilized technologies like Codemod Studio, jscodeshift, and Abstract Syntax Trees (AST) for code transformations.",
    ],
  },
];

export { experiences };
