import "./Footer.css";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>CampusConnect AI</h2>

          <p>
            Empowering campus recruitment through
            innovation and intelligent technology.
          </p>

        </div>

        <div>

          <h3>Platform</h3>

          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Login</a>

        </div>

        <div>

          <h3>Portals</h3>

          <a href="#">Student</a>
          <a href="#">Recruiter</a>
          <a href="#">Admin</a>

        </div>

        <div>

          <h3>Connect</h3>

         <div className="socials">
  <Globe size={20} />
  <Mail size={20} />
  <Phone size={20} />
  <MapPin size={20} />
</div>

        </div>

      </div>

      <div className="copyright">

        © 2026 CampusConnect AI. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;