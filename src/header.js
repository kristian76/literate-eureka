import React from "react";

const Header = props => (
  <header className="navbar">
    <section className="navbar-section" />
    <section className="navbar-section">
      <div className="dropdown">
        <a href="#" className="btn btn-link dropdown-toggle">
          View <i className="icon icon-caret" />
        </a>
        <ul className="menu" />
      </div>
    </section>
  </header>
);

export default Header;
