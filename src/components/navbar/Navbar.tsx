import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.main}>Hackathon</div>
      <div className={styles.items_container}>
        <ul className={styles.items}>
          <li>Your Team</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
