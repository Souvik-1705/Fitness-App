import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Sharma Fitness Studio</h3>
      <p>Kolkata | Personal Training & Online Coaching</p>
      <p>© {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
