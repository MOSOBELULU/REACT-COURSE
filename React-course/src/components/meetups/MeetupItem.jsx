/*eslint-disable*/
import classes from './MeetupItem.module.css'
import Card from '../UI/Card'
import { useContext } from 'react'
import FavoriteCotext from '../../Store/Favorite-context'

export default function MeetupItem(props) {
  const favoriteCtx= useContext(FavoriteCotext);

  const itemsIsFavorite = favoriteCtx.itemsIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemsIsFavorite){
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }

  return (
    <div>
      <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemsIsFavorite ? 'Remove from favorite' : 'Add to Favorite'}</button>
        </div>
        </Card>
      </li>
    </div>
  )
}
