import React from 'react'
import { Link } from 'react-router-dom'
//  import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//  import  '../node_modules/bootstrap/dist/js/bootstrap.bundle'

export default function NavComp() {
    return (
        <div >
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#"><b>WORLD TRIP</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarText">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <Link className ="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className ="nav-item">
        <Link className ="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/package">Trip Package</Link>
      </li>
    </ul>
    <span className="navbar-text">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
     </ul>
    </span>
  </div>
</nav>
    

        </div>
    )
}
