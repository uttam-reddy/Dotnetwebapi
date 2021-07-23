
import './App.css';


import Navbar  from './components/Navbar';
import User from './components/Users';
import UserReg from './components/UserReg';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
function App() {
  

  return (
    <Router>
     <div>
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/">
         <User/>
       </Route>
       <Route exact path="/Home">
         <UserReg/>
       </Route>
     </Switch>
     
    {/*<div>demo app</div>
    <h1>Counter : {counter}</h1>
    <button onClick={(() => dispatch({type:'INCREMENT' }))}>Counter me</button>
    <button onClick={getUser}>Click me</button>*/}
    
    
    </div>
    </Router>
  
   
    
  ); 
}

export default App;
