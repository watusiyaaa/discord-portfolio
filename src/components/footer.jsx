import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* twitter */}
      <a
        href="https://x.com/Itsjeanne_8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="social"
      >
        <FaTwitter />
      </a>

      {/* instagram */}
      <a
        href="https://www.instagram.com/watusiyaaa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social"
      >
        <FaInstagram />
      </a>

      {/* youtube */}
      <a
        href="https://youtube.com/@jinnnn_8?si=vPykWkvR5aQ9rzZC"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
        className="social"
      >
        <FaYoutube />
      </a>

      {/* tiktok */}
      <a
        href="https://www.tiktok.com/@watusiyaaa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="social"
      >
        <FaTiktok />
      </a>

      {/* github */}
      <a
        href="https://github.com/watusiyaaa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
        className="social"
      >
        <FaGithub />
      </a>
    </div>
  );
}
