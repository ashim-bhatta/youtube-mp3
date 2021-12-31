import React from 'react'
import './variable.scss'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/Sigin'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Songs from './Pages/Songs'
import Playlist from './Pages/Playlist'
import Channels from './Pages/Channels'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/song-list' element={<Songs />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/channels' element={<Channels />} />
      </Routes>
    </Router>
  )
}

export default App
