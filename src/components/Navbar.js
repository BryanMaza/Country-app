import React from "react";

function Navbar({ changeTheme, darkmode }) {
  return (
    <nav className="nav">
      <h3>Where in the world?</h3>
      <button onClick={changeTheme}>
        {darkmode ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
        Dark Mode
      </button>
    </nav>
  );
}

export default Navbar;
