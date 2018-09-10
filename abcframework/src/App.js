import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './pages/home'
import Newspage from './pages/news'
import Rosterpage from './pages/roster'

const Home = () => (
  <Homepage />
)

const News = () => (
  <Newspage/>
)

const Roster = () => (
  <Rosterpage />
)



const App = () => (
  <Router>
    <div>
      <div className="navbar navbar-dark bg-dark" >
        <div className="navbar-brand">APEX</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link nav-item">Home</Link>
            <Link to="/news" className="nav-link nav-item">News</Link>
            <Link to="/roster" className="nav-link nav-item">Roster</Link>
          
          </div>
        </div>
      </div>

      <Route exact path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/roster" component={Roster}/>
    </div>
  </Router>
)
export default App