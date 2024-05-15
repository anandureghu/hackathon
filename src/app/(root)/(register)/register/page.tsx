"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import "react-tagsinput/react-tagsinput.css";
import { REGEX } from "@/main/consts";
import useAuth from "@/hooks/useAuth";
import styles from "./register.module.scss";

const RegisterPage = () => {
  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const [teamName, setTeamName] = useState<string>("");
  const { user } = useAuth();
  const handleSubmit = () => {
    const body = {
      teamName,
      teamMembers,
      userId: user?.id,
    };
    console.log(body);
    axios.post("/api/register", body).then(({ data }) => {
      console.log(data);
      toast.success("Success", {
        description: "Team created successfully",
      });
    });
  };
  return (
    <div className={styles.register}>
      <div className={styles.form_container}>
        <h1>Register your team</h1>

        <div className={styles.form}>
          <input
            type="text"
            name="team_name"
            placeholder="Team Name"
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            type="email"
            name="team_members"
            placeholder="Enter your team members email"
            onKeyUp={(e) => {
              e.preventDefault();
              const value = e.currentTarget.value;
              if (e.code === "Space" || e.code === "Enter") {
                if (value.match(REGEX.qburstEmail)) {
                  setTeamMembers([...teamMembers, value]);
                  e.currentTarget.value = " ";
                } else {
                  toast.error("please enter a valid email");
                }
              }
            }}
          />
          <label htmlFor="team_members" className="support_label block">
            type and press enter or space
          </label>
          <div className={styles.team_members}>
            {teamMembers.map((item, i) => {
              return (
                <span
                  key={"team-member-" + i + 1}
                  className={styles.team_member}
                >
                  {item}
                </span>
              );
            })}
            {teamMembers.length ? (
              <span
                className={`${styles.team_member} ${styles.clear_all}`}
                onClick={() => setTeamMembers([])}
              >
                Clear All
              </span>
            ) : null}
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
