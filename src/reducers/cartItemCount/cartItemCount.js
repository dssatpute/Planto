export const initialCartCount=0;
export const cartItemCountReducer=(state,action)=>
{
   switch(action.type)
   {
       case 'ADDED_TO_CART':
       {    state=1
            return state;
       }
       case 'REMOVED_FROM_CART':
       {    state=2
            return state;
       }
   }
}