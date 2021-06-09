import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup: React.FC = () => (
  <>
    <NewMeetupForm onAddMeetup={() => null} />
  </>
);

export default NewMeetup;
