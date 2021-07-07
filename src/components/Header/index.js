// Write your JS code here
import './index.css'
import {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import NotFound from '../NotFound'

const Header = () => (
  <div className="bg-container">
    <div className="inner-container">
      <div className="blog-container">
        <img
          className="img-logo-style"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="wave-text">Wave</h1>
      </div>
      <ul className="nav-items-container">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default Header
