import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

const NewMeetup: React.FC = () => {
  const addMeetupHandler = React.useCallback((data: MeetupData) => {
    console.log(data);
  }, []);
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetup;
