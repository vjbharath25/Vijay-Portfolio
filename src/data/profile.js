// ------------------------------------------------------------------
// Edit this file to update personal details across the whole site.
// ------------------------------------------------------------------
const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Vijay Bharath",
  role: "Java Full Stack Developer",
  level: "Fresher",
  location: "Tenkasi, Tamil Nadu, India",

  // TODO: replace these three with your real details
  email: "vbharath409@gmail.com",
  linkedin: "https://www.linkedin.com/in/vijaybharath-vb",
  github: "https://github.com/vjbharath25",

  // Replaceable assets: drop these files into the /public folder
  photo: `${base}vijay.png`,
  resume: `${base}Vijay_Bharath_Resume.pdf`,
  resumeFileName: "Vijay_Bharath_Resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    title: "Courier & Parcel Tracking System",
    status: "Completed",
    description:
      "A Java application that manages the full courier workflow, from registering customers and booking parcels to updating delivery status and tracing a parcel's journey by tracking number.",
    technologies: ["Java", "Hibernate", "MySQL", "Maven"],
    features: [
      "Customer Management",
      "Parcel Booking",
      "Tracking Number Search",
      "Parcel Status Update",
      "Delivery Agent Management",
      "Tracking History",
    ],
  },
  {
    title: "Smart Job Portal",
    status: "Ongoing",
    description:
      "A job portal project that is currently under development. More details will be added here as the project progresses.",
    technologies: [],
    features: [],
  },
];

export const internship = {
  company: "Iconix Software Solution",
  domain: "Full Stack AI-based Python Development",
  duration: "July 2025",
  summary:
    "An internship in full stack development using Python with an AI-based focus, which gave me hands-on exposure to how real software projects are built in a professional setting.",
};

export const education = {
  degree: "B.E. Computer Science and Engineering",
  college: "Sardar Raja College of Engineering",
  place: "Tenkasi",
};
