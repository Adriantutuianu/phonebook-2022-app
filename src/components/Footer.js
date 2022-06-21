import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer>
      {" "}
      @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
    </footer>
  );
};

export default Footer;
