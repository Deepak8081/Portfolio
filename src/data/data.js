import moyoImg from "../assets/projects/moyo.png";
import cloudvaultImg from "../assets/projects/cloudvault.jpg";
import medcareImg from "../assets/projects/medcare.jpg";
import erpImg from "../assets/projects/erp.jpg";
import bageshwardhaamImg from "../assets/projects/bageshwardhaam.jpg";
import jobportalImg from "../assets/projects/jobportal.jpg";
import lms from "../assets/projects/learning.png";
import wanderlust from "../assets/projects/wanderlust.png";
import todo from "../assets/projects/todo.png";
import wheather from "../assets/projects/wheather.png";

export const Bio = {
  name: "Deepak",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
  ],
  description:
    "Full Stack & DevOps Engineer with 1.5+ years of experience specialized in building scalable, real-time architectures and automated cloud pipelines. Currently driving the technical development of MOYO — a hyper-local, all-in-one service ecosystem powering 170+ live services (domestic help, fabric care, repairs, healthcare, security, and real-time maintenance) from Noida. Skilled in Full Stack, MERN, Next.js, NestJS, PostgreSQL, Docker, and AWS CI/CD pipelines.",
  location: "Noida, India",
  phone: "+91 8081590646",
  phoneHref: "tel:+918081590646",
  whatsappHref:
    "https://wa.me/918081590646?text=" +
    encodeURIComponent(
      "Hi Deepak, I came across your portfolio and would love to connect!",
    ),
  github: "https://github.com/Deepak8081",
  resume:
    "https://drive.google.com/file/d/1K0ho_rkWsHbKs14pifqNLEa2frXLAGBn/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/deepak-1a5915256/",
  twitter: "https://twitter.com/deepak",
  insta: "https://www.instagram.com/deepak_chakaravarti",
};

export const stats = [
  { label: "Years Experience", number: 1.5, decimals: 1, suffix: "+" },
  { label: "Live Services Shipped", number: 170, decimals: 0, suffix: "+" },
  { label: "Projects Built", number: 10, decimals: 0, suffix: "+" },
  { label: "Roles Held", number: 4, decimals: 0, suffix: "" },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Material UI",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "GitHub Actions",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Redis",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      {
        name: "Knex.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knexjs/knexjs-original.svg",
      },
      {
        name: "Prisma",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Moyo International Private Limited",
    date: "November 2025 - Present",
    desc: "Architecting a hyper-local, all-in-one service ecosystem powering 170+ live services — covering domestic help, fabric care, repairs, healthcare, security, and real-time maintenance. Designed secure RESTful APIs using NestJS and Express to map 170+ service workflows. Built high-performance dashboards and admin panels using React and Next.js. Containerized application components with Docker and automated deployments via GitHub Actions and Jenkins on AWS EC2 clusters. Structured high-throughput relational models in PostgreSQL with Knex and Prisma to optimize query times for booking engines.",
    skills: [
      "React Js",
      "Next.js",
      "Node Js",
      "Express Js",
      "NestJS",
      "MongoDb",
      "PostgreSQL",
      "Tailwind CSS",
      "AWS",
      "Docker",
      "CI/CD",
      "Knex.js",
      "Prisma",
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Global IT Sources",
    date: "July 2025 - November 2025",
    desc: "Worked as a Full Stack Developer building and maintaining web applications using the MERN stack. Collaborated on feature development, API design, and database optimization to deliver scalable solutions for digital marketing and SEO platforms.",
    skills: ["React Js", "Node Js", "Express Js", "MongoDb", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Sinfolix Technologies",
    date: "Jan 2025 - Jun 2025",
    desc: "Worked as a Full Stack Developer on the web application — building the frontend with React JS, Tailwind CSS, Framer Motion, and contributing to backend API and integration work.",
    skills: ["React Js", "Node Js", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Sync Intern",
    date: "Sept 2023 - Oct 2023",
    desc: "Worked on the frontend of the web application using HTML, CSS and JS.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    role: "Frontend Engineer Intern",
    company: "Code Clause",
    date: "June 2023 - July 2023",
    desc: "Worked on the frontend of the web application using HTML, CSS and JS.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: 0,
    school: "Kali Charan Nigam Institute of Technology Banda",
    date: "Oct 2021 - Jun 2025",
    grade: "7.77 CGPA",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    desc: "Completed a Bachelor's degree in Computer Science and Engineering across 8 semesters with a final CGPA of 7.77.",
  },
  {
    id: 1,
    school: "Bramhanand Inter College Banda",
    date: "Apr 2019 - Apr 2021",
    grade: "64%",
    degree: "UP Board (XII), Mathematics",
    desc: "Completed class 12 high school education at Bramhanand Inter College, Banda.",
  },
  {
    id: 2,
    school: "Sunrise Public School Baberu Banda",
    date: "Apr 2017 - Apr 2019",
    grade: "76%",
    degree: "UP Board (X), Science",
    desc: "Completed class 10 education at Sunrise Public School, Baberu, Banda.",
  },
];

export const projects = [
  {
    id: 0,
    title: "MOYO — All-in-One Service Ecosystem",
    date: "Nov 2025 - Present",
    description:
      "A production-grade, hyper-local service platform powering 170+ live services across Noida. The backend is split into 3 microservices: two Node.js/Express services for user and vendor workflows, and one NestJS service for the core booking engine. PostgreSQL runs across all services with Knex.js and Prisma, deployed on AWS EC2 with Docker and Redis caching for high-throughput bookings.",
    image: moyoImg,
    tags: [
      "React Js",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Redis",
    ],
    github: "https://github.com/Deepak8081",
  },
  // {
  //   id: 1,
  //   title: "CloudVault — Enterprise Cloud Storage Platform",
  //   date: "Jun 2025 - Aug 2025",
  //   description:
  //     "A scalable enterprise cloud storage platform with encrypted uploads via AWS S3, real-time collaboration over WebSockets, role-based access control, and automated file versioning. React dashboard, Node/Express microservices, PostgreSQL metadata, Redis sessions, deployed on AWS EC2 with Docker and CI/CD.",
  //   image: cloudvaultImg,
  //   tags: ["React Js", "Node Js", "PostgreSQL", "Redis", "AWS S3", "Docker"],
  //   github: "https://github.com/Deepak8081",
  // },
  // {
  //   id: 2,
  //   title: "MedCare — Healthcare Appointment & Telemedicine",
  //   date: "Mar 2025 - May 2025",
  //   description:
  //     "A full-featured healthcare platform for booking appointments, video consultations, and secure medical record management. Next.js frontend, NestJS API gateway, PostgreSQL, real-time chat via Socket.io, Stripe payments, and JWT auth, shipped with Docker and GitHub Actions on AWS EC2.",
  //   image: medcareImg,
  //   tags: ["Next.js", "NestJS", "PostgreSQL", "Socket.io", "Stripe", "Docker"],
  //   github: "https://github.com/Deepak8081",
  // },
  {
    id: 3,
    title: "ERP System — Enterprise Resource Planning",
    date: "Jul 2025 - Sep 2025",
    description:
      "An internal company management platform for employee operations: real-time chat, attendance tracking, SEO report submissions, and access limited to the office network. Admins assign tasks, generate invoices, and view daily/weekly/monthly performance reports.",
    image: erpImg,
    tags: ["React", "Shadcn UI", "Tailwind CSS", "Node Js", "MongoDb"],
    github: "https://github.com/Deepak8081/ERP",
  },
  {
    id: 4,
    title: "Bageshwardhaam Website",
    date: "Jun 2025",
    description:
      "A modern, responsive platform sharing spiritual events, live updates, and information about Bageshwar Dham — event schedules, media galleries, and contact information with fast, dynamic content management.",
    image: bageshwardhaamImg,
    tags: ["React", "Shadcn UI", "Tailwind CSS", "Node Js", "MongoDb"],
    github: "https://github.com/rahul-madaan/Bageshwardham",
    webapp: "https://bageshwardhaam.co.in/",
  },
  {
    id: 5,
    title: "Job Portal — Recruitment Platform",
    date: "Mar 2025 - May 2025",
    description:
      "A platform connecting job seekers with employers — profile creation, job search and applications, application tracking, job postings, and candidate communication management.",
    image: jobportalImg,
    tags: ["React", "Shadcn UI", "Tailwind CSS", "Node Js", "MongoDb"],
    github: "https://github.com/Deepak8081/Job_Portal",
  },
  {
    id: 6,
    title: "Learning Management System",
    date: "Oct 2024 - Nov 2024",
    description:
      "A platform for online education and training — course creation and management tools for educators alongside a seamless learning experience for students.",
    image: lms,
    tags: ["React", "Shadcn UI", "Node Js", "MongoDb"],
    github: "https://github.com/Deepak8081/Learning-Management-System-",
  },
  {
    id: 7,
    title: "Wanderlust — Travel & Property Booking",
    date: "Jul 2024 - Aug 2024",
    description:
      "A full-stack Airbnb-inspired application for listing and booking properties, with user authentication, reviews, and payment gateway integration. Built with MongoDB, Express.js, and Node.js.",
    image: wanderlust,
    tags: ["HTML", "CSS", "Bootstrap", "MongoDb", "Node Js"],
    github: "https://github.com/Deepak8081/Wanderlust",
  },
  {
    id: 8,
    title: "Weather App",
    date: "Mar 2024 - Apr 2024",
    description:
      "A sleek weather application providing real-time updates and forecasts worldwide, built with React for a dynamic experience and Material UI for a polished, responsive interface.",
    image: wheather,
    tags: ["React Js", "Material UI", "NodeMailer"],
    github: "https://github.com/Deepak8081/weather_app",
    webapp: "https://weather-2u9p6yl8v-deepak8081s-projects.vercel.app",
  },
  {
    id: 9,
    title: "Todo Web App",
    date: "Jun 2024",
    description:
      "A dynamic todo app with a sidebar to view, create, edit, and delete tasks — built for effortless day-to-day task management.",
    image: todo,
    tags: ["React Js", "Local Storage", "CSS"],
    github:
      "https://github.com/Deepak8081/reactJS_todoList/tree/main/reactJs_todoList-main",
    webapp: "https://react-todo-app-deepak8081s-projects.vercel.app/",
  },
];
