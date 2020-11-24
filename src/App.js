import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
// import { Router } from 'react-router-dom';
import './App.css';
// import {faStar} from 'react-icon';

//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//  import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './component/home/Home.css';
import About from './component/about/About';
import Login from './component/login/Login';
import Home from  './component/home/Home';

import Register from './component/registrarion/Register';
import TripPackage from './component/trippackage/TripPackage';
import NavComp from './component/NavComp';

function App() {
  return (
    
    <div className="App">
   <Router>
       
<NavComp/>


<Switch>
  <Route exact path="/" component={Home}/>
  <Route  exact path="/about" component={About}/>
  <Route  exact path="/login" component={Login}/>
  <Route  exact path="/register" component={Register}/>
  <Route exact path="/package" component={TripPackage}/>
</Switch>






</Router>
    </div> 
 
  );
}

export default App;
