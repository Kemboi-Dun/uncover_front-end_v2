import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="copyright">Copyright.&copy;{date}</div>
        <div className="privacy">
          <Link className="link" to="/">
            Privacy and Policy.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
