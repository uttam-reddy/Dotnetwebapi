import axios from "axios";
export const fetchUsers = (data) => ({
    type:'FETCH',
    payload:data
});


export const GetUsers =() => async (dispatch,getState) => {
       var users={};
        await axios.get('http://localhost:8155/api/dCandidate')
        .then((response) => {
            users = response.data
            dispatch(fetchUsers(users));
        })
        .catch(err => console.log(err));
        
}