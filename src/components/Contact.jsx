import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          title="Contact"
          subtitle="Open to fresher opportunities as a Java Full Stack Developer."
        />
        <Reveal className="contact__wrap">
          <a className="btn btn--primary contact__mail" href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" /> Email me
          </a>

          <ul className="contact__list">
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FaLinkedinIn aria-hidden="true" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>
            </li>
            <li>
              <FaGithub aria-hidden="true" />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
