import React from "react";
import styles from "./team.module.scss";

export default function Team() {
  const teamData = [
    {
      image:
        "https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.jpg?b=1&s=612x612&w=0&k=20&c=OVnez4j_qNlDwiKlTYSkcbchdC4YKMYWN3dXdh7u-vY=",
      name: "John Doe",
      email: "john@example.com",
      team: "Engineering",
      role: "Developer",
    },
    {
      image:
        "https://media.istockphoto.com/id/1131285202/photo/portrait-of-a-handsome-man.jpg?b=1&s=612x612&w=0&k=20&c=TZKiL9uDmLeB1M5hz-BdLIr073xv5YFqdxymc3zICYU=",
      name: "Jane Smith",
      email: "jane@example.com",
      team: "Engineering",
      role: "Designer",
    },
    {
      image:
        "https://media.istockphoto.com/id/1305462732/photo/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=ezuy8zI7t7IbiMfhoJjmKBzxoWsGcsaroqeuVcUzgCY=",
      name: "Michael Brown",
      email: "michael@example.com",
      team: "Marketing",
      role: "Marketing Manager",
    },
    {
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=",
      name: "Michael Brown",
      email: "michael@example.com",
      team: "Marketing",
      role: "Marketing Manager",
    },
  ];

  return (
    <div className={styles.team_container}>
      <h1 className={styles.heading}>Team Name</h1>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque
        aliquid, amet alias natus porro accusantium quia eius deserunt cum
        molestias, delectus optio esse minima! Sed eum commodi explicabo odit?
      </span>
      <div className={styles.card_container}>
        {teamData.map((team, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.profile_card}>
              <div className={styles.profile_image}>
                <img src={team.image} alt="profile" />
              </div>
              <div className={styles.detail}>
                <span className={styles.name}> {team.name}</span>
                <span>{team.role}</span>
                <span className={styles.email}>{team.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
