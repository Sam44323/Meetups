import { GetStaticProps } from "next";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    address: "Some address 5,12345 Some City",
    description: "This a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    address: "Some address 5,12345 Some City",
    description: "This a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    address: "Some address 5,12345 Some City",
    description: "This a third meetup",
  },
];

const Meetup: React.FC<{
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}> = ({ meetups }) => (
  <>
    <MeetupList meetups={meetups} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default Meetup;
