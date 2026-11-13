import { useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile.js";
import useTyping from "../hooks/useTyping.js";

const PHRASES = ["Java & Spring Boot", "Hibernate & MySQL", "HTML, CSS & JavaScript"];

export default function Home() {
  const typed = useTyping(PHRASES);
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            {profile.role} <span className="hero__level">{profile.level}</span>
          </h2>
          <p className="hero__typing" aria-label="Technologies I work with">
            I work with <strong>{typed}</strong>
            <span className="hero__cursor" aria-hidden="true" />
          </p>
          <p className="hero__intro">
            A B.E. Computer Science and Engineering developer from Tenkasi who enjoys building
            reliable applications with Java, Spring Boot and Hibernate, backed by MySQL. I am
            looking for an opportunity to start my career as a full stack developer.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={profile.resume}
              download={profile.resumeFileName}
            >
              <FaDownload aria-hidden="true" /> Download Resume
            </a>
            <a className="btn btn--outline" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="photo-frame">
            {photoFailed ? (
              <div className="photo-frame__placeholder" aria-label="Profile photo placeholder">
                VB
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
          <span className="float-chip float-chip--one">Java</span>
          <span className="float-chip float-chip--two">Spring Boot</span>
        </div>
      </div>
    </section>
  );
}
