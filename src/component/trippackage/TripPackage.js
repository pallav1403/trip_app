import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function TripPackage() {
    return (
        <div>
                       <div className="container-fluid mb-0 mt-5"  id="package">
<div className="row ">
<div className="col-10 mx-auto">
    <div className="brand1">
        
        <h1> Book your trip</h1>
        <h1 id="brand">At the lowest price</h1>
        <p id="city">get the city wise price list</p>
    </div>

    
             <table class="table table-bordered table-dark" id="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bengaluru</td>
      <td><p>200$</p></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>New York</td>
      <td>100$</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>London</td>
      <td>499$</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Hydrabad</td>
      <td>87$</td>
     
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Banaras</td>
      <td>655$</td>
   
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Kolkata</td>
      <td>300$</td>
      
    </tr>
  </tbody>
</table>

</div>
</div>
</div>
</div>

    )
}
