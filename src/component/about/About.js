import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function About() {
    return (
        <>
        <div className="my-2">
           <h1 className=" text-center">About Us</h1>
         </div>
         
             
                 {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHlURLPyDuIvw4dMjn9xFSmXSzj_VwhGWVw&usqp=CAU" class="rounded mx-auto d-block" alt="..."/> */}

{/* 
                 <div class="text-center" id="roundImage">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHlURLPyDuIvw4dMjn9xFSmXSzj_VwhGWVw&usqp=CAU" class="rounded" alt="..."/>
                      </div>
               */}
  
   
     <div id="roundImage" >
      <img src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="round"  />
    </div>
                


<div className="container-fluid mb-1"  id="addressBlock">
<div className="row ">
<div className="col-10 mx-auto">
    <div className="text-center">
    <form id="form">
  <div className="form-group">
    <label forHtml="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label forHtml="exampleInputPassword1">Contact</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" forHtml="exampleCheck1">check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
  </div> 
  </div>      
        </>
    )
}
