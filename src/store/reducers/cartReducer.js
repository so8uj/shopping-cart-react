export const CartRecuder = (state=[],action) => {
    switch(action.type){
        case "cart/addToCart": {
            const product = state.find(cart=> cart.id == action.payload.id);
            if(product){
                return state.map(item=>{
                    if(item.id === action.payload.id){
                        return {...item, qty: item.qty+1}
                    }
                    return item;
                })
            }else{
               return [
                    ...state,
                    {...action.payload, qty: 1}
                ]
            }
        }
        case "cart/removeCart": {
            return state.filter(item => item.id !== action.payload)
        }
        case "cart/updateQty": {
            return state.map(item=>{
                if(item.id === action.payload.id){
                    return {...item, qty: action.payload.qty === 0 ? 1 : action.payload.qty }
                }return item;
            })
        }
        case "cart/incDec": {
            return state.map(item=>{
                if(item.id === action.payload.id){
                    return {...item, qty: action.payload.type === "Increment" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1 }
                }return item;
            })
        }
        case "cart/resetCart": {
            return []
        }
        default: {
            return state;
        }
    }
    
}