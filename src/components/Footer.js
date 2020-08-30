import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span>Made by Susan Subedi © {new Date().getFullYear()}</span>
    </div>
  );
};

export default React.memo(Footer);
