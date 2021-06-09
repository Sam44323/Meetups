import React from "react";
import styles from "./MeetupDetails.module.css";

const MeetupDetails: React.FC<{
  url: string;
  title: string;
  address: string;
  description: string;
}> = ({ url, title, address, description }) => {
  return (
    <>
      <section className={styles.detail}>
        <img src={url} alt={title} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </section>
    </>
  );
};

export default MeetupDetails;
