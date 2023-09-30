/*eslint-disable*/
import {createContext, useState} from 'react'

const FavoritesCotext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemsIsFavorite: (meetupId) => {},

})
  
 export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

function addFavoriteHandlder(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup)
    })
}


function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
}

function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
}

const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandlder,
    removeFavorite: removeFavoriteHandler,
    itemsIsFavorite: itemIsFavoriteHandler
};

    return <FavoritesCotext.Provider value={context}>
        {props.children}
    </FavoritesCotext.Provider>
}

export default FavoritesCotext;