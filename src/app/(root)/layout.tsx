import React from "react";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <div className="">{children}</div>
    </main>
  );
};

export default Layout;
