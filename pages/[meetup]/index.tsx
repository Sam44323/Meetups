import React from "react";
import MeetupDetailsComponent from "../../components/meetups/MeetupDetails";

const MeetupDetails: React.FC = () => (
  <>
    <MeetupDetailsComponent
      url="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  </>
);

export default MeetupDetails;
