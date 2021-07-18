import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import  {GetUsers} from "../actions/UserFetch";

export default function Users() {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(GetUsers())
    })
  
  const User=useSelector(state => state.Users);
    return (
        <div>
            

          <table class="table">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Username</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  {User?.map((user) => ( <tbody>
  
    
        

      
    <tr>
      <th scope="row">{user.fullName}</th>
      <td>{user.userName}</td>
      <td>{user.dateofBirth}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
    </tr>
   
    
  </tbody> ))}
</table>
        </div>
    )
}
