"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import useAuth from "@/hooks/useAuth";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const teams = [
    {
      label: "Your Team",
    },
  ];
  console.log({ user });
  const handleSigin = () => {
    router.push("/sign-in");
  };
  const handleTeam = () => {
    router.push("/team");
  };
  console.log({ pathname });
  return (
    <div className={styles.navbar}>
      <div className={styles.main} onClick={() => router.push("/")}>
        Hackathon
      </div>
      <div className={styles.items_container}>
        <ul className={styles.items}>
          {user && (
            <li
              onClick={() => handleTeam()}
              className={pathname === "/team" ? styles.tab : ""}
            >
              {teams.map((team) => team.label)}
            </li>
          )}
          {user ? (
            <div className={styles.profile}>
              Hi, <span className={styles.username}>{user?.fullName}</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <button
              className={styles.button}
              type="button"
              onClick={() => handleSigin()}
            >
              Sign in
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
