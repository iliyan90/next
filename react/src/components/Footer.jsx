import React from "react";
import "../style/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>Copyright</h3>
      <div>
        &copy;
        <span>{year}</span>
      </div>
      <h3>Iliyan Tarashev</h3>
    </div>
  );
};

export default Footer;
