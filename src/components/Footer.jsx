import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="footer__social">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <FaLinkedinIn />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
