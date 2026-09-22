export const profile = {
  name: "Varathamani V",
  role: "Full-Stack Developer | AI Developer",
  location: "Madurai, Tamil Nadu",
  email: "varathamani067@gmail.com",
  phone: "+91 9150133692",
  phoneHref: "tel:+919150133692",
  linkedin: "https://www.linkedin.com/in/v-varatha-mani-4975372a7/",
  github: "https://github.com/varathamani06",
  site: "https://my-port-folio2-silk.vercel.app/",
  resume: "/resume.pdf",
  tagline:
    "Building scalable web applications and AI-powered solutions with modern frontend, backend, database, and AI technologies.",
};

export const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];
export const sectionIds = ["home", ...navItems.map((n) => n.id)];