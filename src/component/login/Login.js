import React from 'react'
import { Link } from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    return (
        <>
       <div className="container-fluid bg"  id="bg">
 <div className="row ">
  <div className="col-md-4 col-sm-4 col-xs-12"></div>  
   <div className="col-md-4 col-sm-4 col-xs-12">
    
   <form className="form-container">
       <h1 className="text-center1">Login</h1>
  <div className="form-group">
    <label forHtml="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="form-group">
    <label forHtml="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" forHtml="exampleCheck1">check me out</label>
  </div>
  <button type="submit" className="btn btn-success btn-block">Submit</button>
  <Link className="nav-link"  to="/register">Register here</Link>
</form>
           
        
    </div>
    </div>
        </div>
        </>
    )
}
