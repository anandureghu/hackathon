"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import styles from "./page.module.scss";

export default function Page() {
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
