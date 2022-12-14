import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://learn-create-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
      ).then(response => {
        return response.json();
      }).then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }
          meetups.push(meetup);
        }


        setIsLoading(false);
        setMeetupsData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={meetupsData} />
  </section>
}

export default AllMeetupsPage;