import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsPage from './ThePostsPage/PostsPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const [myData, setMyData] = useState(JSON);

  return (
    <Router>
      <Routes>
        <Route path="./ThePostsPage"
               element={<PostsPage myData={myData} setMyData={setMyData}/>}/>
        <Route path="./ThePostsPage"
               element={<PostsPage myData={myData} setMyData={setMyData}/>}/>
      </Routes>
    </Router>
  )
}

export default App
