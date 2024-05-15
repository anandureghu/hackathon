import React from "react";
import styles from "./layout.module.scss";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default Layout;
