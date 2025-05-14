import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsPage from './ThePostsPage/PostsPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UsersPage from './TheUsersPage/UsersPage'

function App() {
  const [myData, setMyData] = useState(JSON);

  return (
    <Router>
      <Routes>
        <Route path="/ThePostsPage"
               element={<PostsPage myData={myData} setMyData={setMyData}/>}/>
        <Route path="/TheUsersPage"
               element={<UsersPage myData={myData} setMyData={setMyData}/>}/>

               <Route path="*"
              element={<div>
              Sorry - that page doesn't exist, try these:
                    <div>
                    <Link to="/ThePostsPage">Posts</Link>
                    </div>
                    <div>
                    <Link to="/TheUsersPage">Users</Link>
                    </div>
             
              </div>}/>
      </Routes>
    </Router>
  )
}

export default App
