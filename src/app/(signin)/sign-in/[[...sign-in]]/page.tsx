"use client";
import { SignIn } from "@clerk/nextjs";
import styles from "./signin.module.scss";

export default function Page() {
  return (
    <div className={styles.signin}>
      <SignIn path="/sign-in" />
    </div>
  );
}
