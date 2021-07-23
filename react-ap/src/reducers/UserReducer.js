const initialState ={
    counter:0,
    Users:[]

}

  const UserReducer = (state = initialState,action) => 
{
            switch(action.type){
    
                case 'INCREMENT':
                    return {
                        counter : state.counter+1
                        
                    }

                    case 'FETCH':
                        return {
                            ...state,
                            Users : action.payload
                            
                        }

                        case 'UPDATE':
                            return  {
                                ...state,
                                Users : state.Users.map(user => user.id === action.payload.id ? {...user,status:action.payload.status} : user)
                                //Users[action.payload.id] : action.payload
                                
                            }
                    
                        

                    case 'DECREMENT':
                        return {
                            counter:state.counter-1
                            
                        }
                
                    default:
                        return state
                
                }

}

export default UserReducer;