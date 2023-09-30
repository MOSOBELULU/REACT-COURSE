import { useContext } from "react"
import FavoriteCotext from "../Store/Favorite-context"
import MeetupList from "../components/meetups/MeetupList"


export default function Favorites() {
  const favoritesCtx = useContext(FavoriteCotext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content= <p>Oops! you have no Favorites! Add some😊</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }
  return (
    <div>
      <h1>MY FAVORITES</h1>
      {content}
    </div>
  )
}
