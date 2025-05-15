import './App.scss'
import PostsPage from './ThePostsPage/PostsPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UsersPage from './TheUsersPage/UsersPage';
import CreateUser from './CreateUserPage/CreateUser';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/ThePostsPage"
               element={<PostsPage/>}/>
        <Route path="/TheUsersPage"
               element={<UsersPage/>}/>
        <Route path="/CreateUser"
               element={<CreateUSer/>}/>
               
              <Route path="*"
              element={<div>
              Sorry - that page doesn't exist, try these:
                    <div>
                    <Link to="/ThePostsPage">Posts</Link>
                    </div>
                    <div>
                    <Link to="/TheUsersPage">Users</Link>
                    </div>
                    <div>
                    <Link to="/CreateUserPage">Create a new user account</Link>
                    </div>
              </div>}/>
      </Routes>
    </Router>
  )
}

export default App
