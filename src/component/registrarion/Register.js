import React from 'react'
import { Link } from 'react-router-dom'
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
    return (
        <div>
           <div className="container-fluid mb-0 mt-5"  id="register">
<div className="row ">
<div className="col-10 mx-auto">
    <div className="text-center">
              
        <form id="form">
           <h1 className="text-center1">Register</h1>
           <div className="form-row">
             <div className="form-group col-md-6">
               <label forHtml="inputEmail4">Name</label>
               <input  type="text" className="form-control " id="fn" placeholder="first name" required />
              
             </div>
             <div className="form-group col-md-6">
               <label forHtml="inputPassword4">Last Name</label>
               <input  type="text" className="form-control" id="ln" placeholder="last name"/>
             </div>
           </div>
           <div className="form-group">
             <label forHtml="inputAddress">Email</label>
             <input  type="email" className="form-control" id="email" placeholder="enter your email" required/>
           
           </div>
          
           <div className="form-group">
             <label forHtml="formGroupExampleInput">Password</label>
             <input type="password" className="form-control" id="pwd" placeholder="password" required/>
             
           </div>
           <div className="form-group">
             <label forHtml="formGroupExampleInput2">Phone</label>
             <input type="text" className="form-control" id="phone" placeholder="phone" required />
            
           </div>


         <div className="form-row"> 
              {/* <div className="form-group col-md-6">
               <label forHtml="inputCity">City</label>
               <input type="text" className="form-control" id="inputCity"/>
             </div> */}
             {/* <!-- className="form-check form-check-inline" -->
              <!-- ---------------check box----------------- --> */}
              <div  className="form-check form-check-inline" x >
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
               <label className="form-check-label" forHtml="inlineRadio1">Male</label>
             </div>
             <div className="form-check form-check-inline">
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
               <label className="form-check-label" forHtml="inlineRadio2">Female</label>
             </div>
             <div className="form-check form-check-inline">
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
               <label className="form-check-label" forHtml="inlineRadio3">Others</label>
             </div>


             <div   className="form-group col-md-4">
               <label forHtml="inputState">State</label>
               <select  id="inputState" className="form-control">
                 <option selected disabled hidden >Choose...</option>
                 <option>Bihar</option>
                 <option>Karnataka</option>
                 <option>Delhi</option>
                 <option>Mumbai</option>
               </select>
              
             </div>
         </div>
         <textarea name="text-area" id="text-area" maxlength="200"  cols="60" rows="3" placeholder="you can leave feedback here....." ></textarea>
          
         <button type="submit" id="submit" className="btn btn-danger btn-block" onclick="return validateForm()">Sign in</button>
         <Link className="nav-link"  to="/login">go to login</Link>
         
         </form>




         </div>
         
        </div>
        
        </div>
        
        </div>



        </div>
    )
}
