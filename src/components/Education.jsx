import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" />
        <Reveal className="info-card">
          <div className="info-card__icon" aria-hidden="true">
            <FaGraduationCap />
          </div>
          <div className="info-card__body">
            <h3>{education.degree}</h3>
            <p className="info-card__meta">{education.college}</p>
            <p className="info-card__date">{education.place}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
