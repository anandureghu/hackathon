"use client";
import { useTimer } from "react-timer-hook";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import styles from "./page.module.scss";

export default function Page() {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date("03 Jun 2024"),
    onExpire: () => console.warn("onExpire called"),
  });

  const { user } = useAuth();
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register");
  };

  const handleLogin = () => {
    router.push("/sign-in");
  };

  return (
    <div className={styles.main_container}>
      <h1 className={styles.heading}>Heading</h1>
      <span className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur id
        commodi numquam praesentium, officiis dolores tempore, autem ipsum quo
        deserunt illum minus possimus pariatur quis voluptatum debitis tempora
        quam modi
      </span>
      <span className={styles.date}>Register Before: 3rd June 2024</span>
      <div className={styles.counter_container}>
        <div className={styles.counter}>
          <span className={styles.counter_value}>
            {"{"}
            {days}:
          </span>
          <span className={styles.counter_text}>Days</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.counter_value}>{hours}:</span>
          <span className={styles.counter_text}>Hours</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.counter_value}>{minutes}:</span>
          <span className={styles.counter_text}>Minutes</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.counter_value}>
            {seconds}
            {"}"}
          </span>
          <span className={styles.counter_text}>Seconds</span>
        </div>
      </div>

      <div className={styles.button_container}>
        {user ? (
          <button className={styles.button} onClick={() => handleRegister()}>
            REGISTER NOW
          </button>
        ) : (
          <button className={styles.button} onClick={() => handleLogin()}>
            Login to continue
          </button>
        )}
      </div>
    </div>
  );
}
