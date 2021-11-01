export const initialState={status:false,userId:null};
export const reducer=(state,action)=>
{
    if(action.type==='USER_AUTH')
    {
        return action.payload
    }

    return state
}