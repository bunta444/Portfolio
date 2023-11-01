import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  tesla,
  barelyunofficial,
  bgsplumbing,
  realestate,
  bookreview,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Creative Designeer",
    icon: backend,
  },
  {
    title: "Responsive Design",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Realtor",
    description:
      "A fast and responsive real estate website using React and RapidAPI. With seamless navigation and real-time data integration, users can effortlessly search and browse up-to-date property listings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakra ui",
        color: "green-text-gradient",
      },
      {
        name: "rapid api",
        color: "pink-text-gradient",
      },
      {
        name: "buisness",
        color: "yellow-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/bunta444/real-estate-app",
  },
  {
    name: "Barely Unofficial",
    description:
      "An e-commerce website using React and CSS frameworks like Bootstrap. The website boasts a sleek and modern design, enhanced by Bootstrap's responsive elements. With a user-friendly interface, customers can easily explore a wide range of products and enjoy a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "eccomerce",
        color: "yellow-text-gradient",
      },
    ],
    image: barelyunofficial,
    source_code_link: "https://github.com/bunta444/barely-unofficial",
  },
  {
    name: "BG's Plumbing",
    description:
      "A cutting-edge business website using React, Bootstrap, and CSS resulting in a sleek and responsive design, making it accessible across various devices. Through the website, customers can easily explore the company's services, view testimonials, and get in touch, solidifying the company's online presence and credibility in the plumbing industry.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "buisness",
        color: "yellow-text-gradient",
      },
    ],
    image: bgsplumbing,
    source_code_link: "https://github.com/bunta444/bgsplumbing",
  },
  {
    name: "Book Review Blog",
    description:
      "I developed a modern book review site using React and Bootstrap. With a sleek interface and powerful search feature, users can easily explore specific book reviews. The site's responsive design ensures seamless navigation across devices, offering an engaging platform for book enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "personal",
        color: "yellow-text-gradient",
      },
    ],
    image: bookreview,
    source_code_link: "https://github.com/bunta444/book-review",
  },
];

export { services, technologies, experiences, testimonials, projects };
