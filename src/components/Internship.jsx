import { FaBriefcase } from "react-icons/fa";
import { internship } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Internship() {
  return (
    <section id="internship" className="section section--alt">
      <div className="container">
        <SectionHeading title="Internship" />
        <Reveal className="info-card">
          <div className="info-card__icon" aria-hidden="true">
            <FaBriefcase />
          </div>
          <div className="info-card__body">
            <h3>{internship.company}</h3>
            <p className="info-card__meta">{internship.domain}</p>
            <p className="info-card__date">{internship.duration}</p>
            <p>{internship.summary}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
