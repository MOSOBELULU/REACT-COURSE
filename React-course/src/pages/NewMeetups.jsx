/*eslint-disable*/
import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewmeetupForm"

export default function NewMeetups() {
  const history = useHistory()

  function addMeetupHandler(meetupData){
    fetch('https://meetup-8b5a3-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": 'application./json'
      }

    }).then(() => {
      history.replace('/');
    });
  }
  return (
    <div>
      <h1>NEW MEETUPS</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}
