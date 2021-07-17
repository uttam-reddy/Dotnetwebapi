
import './App.css';

import {useSelector,useDispatch} from "react-redux";
import  {GetUsers} from "./actions/UserFetch";
function App() {
  const dispatch = useDispatch();
  const counter=useSelector(state => state.counter);
  const Users=useSelector(state => state.Users);
 
  const getUser = () => {
    dispatch(GetUsers())
  }
  return (
     <div>
    <div>demo app</div>
    <h1>Counter : {counter}</h1>
    <button onClick={(() => dispatch({type:'INCREMENT' }))}>Counter me</button>
    <button onClick={getUser}>Click me</button>
    
    {Users?.map((user) => (
      <div ><h1>{user.fullName}</h1></div>
    ))}
    </div>
  
   
    
  ); 
}

export default App;
