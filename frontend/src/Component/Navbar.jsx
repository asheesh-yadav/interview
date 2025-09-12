
import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navLinks} className="u-l">
        <Link to={"/"}><li style={styles.link}>Home</li></Link>
           <Link to={"/emp-form"}><li style={styles.link}>Employee</li></Link>
      
      </ul>
     <button>Login</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
 
};

export default Navbar;
