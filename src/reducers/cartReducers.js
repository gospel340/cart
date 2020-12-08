import axe from '../image/axe.jpg';
import  bandsaw from '../image/bandsaw.jpg';
import chiseal from '../image/chiseal.jpg';
import hacksaw from '../image/hacksaw.jpg';
import sledgehammer from '../image/sledgehammer.jpg';

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/actType'
const initState = {
    items: [
        { id : 1, name: 'Sledgehammer', price: 125.75, img: sledgehammer },
 { id: 2, name: 'Axe', price: 190.50, img: axe },
 { id: 3, name: 'Bandsaw', price: 562.13, img: bandsaw },
 { id:4, name: 'Chisel', price: 12.9, img: chiseal },
 { id: 5, name: 'Hacksaw', price: 18.45, img: hacksaw }

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
      if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
    
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }

  }
  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    
    
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}


if(action.type=== ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUB_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}
  else
  {
 
  
    return state;

}
  };

export default cartReducer;