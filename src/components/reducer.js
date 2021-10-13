import { Satellite } from "@material-ui/icons";

//Our inistial state inside basket
export const initialState={
    basket:[]
};
//Selector
export const getBasketTotal=(basket)=>
    //Adding up 
    basket?.reduce((amount,item)=>
    item.price+amount,0);
    
//State = state of application and action what you want to do add/delete
const reducer=(state,action)=>{
    switch(action.type){
        //Case for adding to basket
            case 'ADD_TO_BASKET':
                return {
                    // ...state return how state orinaly was
                    ...state,
                    //how basket was and add new item
                    basket: [...state.basket,action.item],
            };
            //Case for removing from basket
            case "REMOVE_FROM_BASKET":
                    const index=state.basket.findIndex(
                        (basketItem)=>basketItem.title===action.title
                    );
                    let newBasket=[...state.basket];
                    if (index>=0){
                        newBasket.splice(index,1);
                    }
                    else{
                        console.warn(`Cant remove product (title: ${action.title}) as its not in basket!`)
                    }
                    return{
                        ...state, 
                        basket:newBasket
                    }
            default:
                return state;
    }
};
export default reducer;