import React from "react";
import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem: React.FC<{ image: string; title: string; address: string }> =
  (props) => {
    return (
      <li className={styles.item}>
        <Card>
          <div className={styles.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={styles.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={styles.actions}>
            <button>Show Details</button>
          </div>
        </Card>
      </li>
    );
  };

export default MeetupItem;
