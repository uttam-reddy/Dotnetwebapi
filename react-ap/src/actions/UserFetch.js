import axios from "axios";
import  { ACTIONS } from "./Useractions";


export const fetchUsers = (data) => ({
    type:ACTIONS.FETCH,
    payload:data
});

export const UpdateUsers = (data) => ({
    type:ACTIONS.UPDATE,
    payload:data
});

export const PostUsers =(data) => async (dispatch,getState) => {
    //var users=[];
    console.log(data);
     await axios.post('http://localhost:8155/api/dCandidate',data)
     .then((response) => {
         //users = response.data
         //dispatch(fetchUsers(users));
     })
    .catch(err => console.log(err));
    
    
     
}

export const PutUsers =(data) => async (dispatch,getState) => {
    //var users=[];
    console.log(data);
     await axios.put('http://localhost:8155/api/dCandidate/'+data.id,data)
     .then((response) => {
         //users = response.data
         dispatch(UpdateUsers(data));
     })
    .catch(err => console.log(err));
    
     
}



//using redux thunk
export const GetUsers =() => async (dispatch,getState) => {
       var users=[];
        await axios.get('http://localhost:8155/api/dCandidate')
        .then((response) => {
            users = response.data
            dispatch(fetchUsers(users));
        })
        .catch(err => console.log(err));
        
}