import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import  {GetUsers} from "../actions/UserFetch";
import  {PutUsers} from "../actions/UserFetch";

export default function Users() {
    const dispatch = useDispatch();
    let User=[];
    User=useSelector(state => state.Users);
    useEffect(() => {
        dispatch(GetUsers());
    },[dispatch
    ]);

    const onHandleStatusChange = (event,id) => {
      
      event.preventDefault();
      let userselected={};
      User.forEach(x => {
        if(x.id === id ){
           userselected=x;
           
        }});
        //User = User.map(function(item) { return item.id === id ? {userselected=x; data} : item; });

      const data ={
        id:userselected.id,
        username:userselected.userName,
        fullName:userselected.fullName,
        email:userselected.email,
        gender:userselected.gender,
        dateofBirth:userselected.dateofBirth,
        status:userselected.status ? false :true
        
        
  
  
      };

      
        console.log(userselected);
        
        //console.log(data);
  
        dispatch(PutUsers(data));
          
    }

  
    return (
        <div>
            

          <table class="table">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Username</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  
  {User ? 
  User?.map((user) => ( <tbody>
  
    
        

      
    <tr>
      <th scope="row">{user.fullName}</th>
      <td>{user.userName}</td>
      <td>{new Date(user.dateofBirth).toLocaleDateString()}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td><input type="checkbox" id="vehicle1" name="vehicle1" value ={user.status} onChange={(event) => { onHandleStatusChange(event,user.id)}} checked ={user.status} /></td>
    </tr>
   
    
  </tbody> )):''}
</table>
        </div>
    )
}
