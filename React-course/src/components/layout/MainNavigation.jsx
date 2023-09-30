import {Link} from 'react-router-dom'
import classes from'./MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesCotext from '../../Store/Favorite-context'

export default function MainNavigation() {
  const FavoritesCtx = useContext(FavoritesCotext)
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
            <li>
                <Link to='/'>All Meetups</Link>
            </li>
            <li>
                <Link to='/new-meetup'>New Meetups</Link>
            </li>
            <li>
                <Link to='/favorites'> Favorites
                <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span>
                </Link>
            </li>
        </ul>
      </nav>
      </header>
    </div>
  )
}
