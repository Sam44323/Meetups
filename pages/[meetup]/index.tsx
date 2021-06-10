import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import React from "react";
import MeetupDetailsComponent from "../../components/meetups/MeetupDetails";

const MeetupDetails: React.FC<{
  meetupData: {
    url: string;
    title: string;
    address: string;
    description: string;
  };
}> = ({ meetupData }) => {
  console.log(meetupData);
  return (
    <>
      <MeetupDetailsComponent
        url={meetupData.url}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetup: "m1",
        },
      },
      {
        params: {
          meetup: "m2",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const meetupId = context.params!.meetupId;

  return {
    props: {
      meetupData: {
        url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
};

export default MeetupDetails;
