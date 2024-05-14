"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Page() {
  const { user, isLoaded } = useUser();
  console.log({ user });

  return (
    <div className={styles.main_container}>
      <div className={styles.button_container}>
        {isLoaded && user ? (
          <>
            <button type="button" className={styles.button}>
              LOGOUT
            </button>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <Link href="/sign-in" className={styles.button}>
            LOGIN
          </Link>
        )}
        {/* <button type="button" className={styles.button}>
          REGISTER NOW
        </button> */}
      </div>
    </div>
  );
}
