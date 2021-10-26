export const initialState=false;
export const reducer=(state,action)=>
{
    if(action.type==='USER_AUTH')
    {
        return action.payload
    }
    return state
}