import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

  
  export default function AllMeetUps() {
      const [isLoading, setIsLoading] = useState(true)
      const [loadedMeetups, setLoadedMeetups] = useState([])

      useEffect(() => {
        fetch('https://meetup-8b5a3-default-rtdb.firebaseio.com/meetups.json').then(response => {
          return response.json()
       }).then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup= {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }
           setIsLoading(false)
          setLoadedMeetups(meetups)
       });
      }, [])
    

    if (isLoading){
      return (
      <div>
        <p>Loading..</p>
      </div>
      )
    }

    return (
      <div>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
      </div>
    );
  }
  