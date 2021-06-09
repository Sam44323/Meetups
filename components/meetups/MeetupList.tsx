import React from "react";
import styles from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList: React.FC<{
  meetups: {
    id: string;
    image: string;
    title: string;
    address: string;
    description?: string;
  }[];
}> = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
