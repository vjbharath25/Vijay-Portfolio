import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About me" />
        <Reveal className="about__body">
          <p>
            I am a Java Full Stack Developer fresher based in Tenkasi, Tamil Nadu, with a B.E. in
            Computer Science and Engineering from Sardar Raja College of Engineering. I enjoy
            building applications with Java, Spring Boot and Hibernate, using MySQL as my database.
          </p>
          <p>
            I have built a Courier &amp; Parcel Tracking System and am now working on a Smart Job
            Portal. In July 2025 I completed an internship at Iconix Software Solution in Full
            Stack AI-based Python Development.
          </p>
          <p>
            I am a motivated learner who likes clean, maintainable code, and I am looking for a
            role where I can contribute to a team, learn from experienced developers and grow as a
            full stack engineer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
