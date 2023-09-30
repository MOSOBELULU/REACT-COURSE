import {Route, Switch } from 'react-router-dom'
import AllMeetUps from './pages/AllMeetUps'
import NewMeetups from './pages/NewMeetups'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'



import './App.css'


function App() {


  return (
    
    <div>
    <Layout />
      <Switch>
      <Route path='/' exact>
        <AllMeetUps/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetups/>
      </Route>
      <Route path='/favorites'>
        <Favorites/>
      </Route>
      </Switch>
    </div>
  )
}

export default App
