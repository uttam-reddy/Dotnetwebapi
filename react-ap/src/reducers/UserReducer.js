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

                    case 'DECREMENT':
                        return {
                            counter:state.counter-1
                            
                        }
                
                    default:
                        return state
                
                }

}

export default UserReducer;