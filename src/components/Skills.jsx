import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiEclipseide } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Hibernate", icon: SiHibernate },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Eclipse", icon: SiEclipseide },
      { name: "VS Code", icon: VscVscode },
      { name: "MySQL Workbench", icon: SiMysql },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading title="Technical skills" subtitle="The languages, frameworks and tools I work with." />
        <div className="skills__grid">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
