import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import './index.css'
import { FavoritesContextProvider } from './Store/Favorite-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoritesContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesContextProvider>
  
)
