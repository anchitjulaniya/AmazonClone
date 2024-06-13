import { createSlice } from "@reduxjs/toolkit"
import {allproducts} from '../components/data.js'

const initialState = {
    cartItems : [],
    allproducts : allproducts
}

const cartItemslice = createSlice({
    name :"cart",
    initialState,
    reducers : {
        ADD_TO_CART: (state, action)=>{
           const itemIndex = state.cartItems.findIndex(product => product.asin === action.payload.asin);
            console.log(itemIndex);
            if(itemIndex >= 0 ){
                state.cartItems[itemIndex].quantity += 1;
            }else{
                state.cartItems.push(
                    {
                        ...action.payload,
                        quantity : 1
                    }
                )
            }
            const { asin } = action.payload;
            const product = state.allproducts.find(product => product.asin == asin);
            if (product) {
              product.addedtocart = true;
            }

        },
        REMOVE_ITEM:(state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.asin !== action.payload.asin);
        },
        DECREMENT: (state,action)=>{
            const x = state.cartItems.findIndex(item => item.asin === action.payload.asin);
            if(x>=0){
                state.cartItems = state.cartItems.filter(item => item.quantity > 0);
            }
        },
        CLEAR_CART : (state)=>{
            state.cartItems = []
        },
        FILTERByAmount : (state, action)=>{
            const filteredArray = state.allproducts.filter(product => product.product_price > parseFloat(action.payload.split("").filter(char => char !== ",").join("").slice(1)))
            state.allproducts = filteredArray;
        },
        FILTERByStarRating : (state, action)=>{
            const filteredArray = state.allproducts.filter(product => product.product_star_rating > parseFloat(action.payload));
            state.allproducts = filteredArray;
        },
        FILTERByPrime : (state)=>{
            const filteredArray = state.allproducts.filter(product => product.is_prime === true);
            state.allproducts = filteredArray;
        },FILTERByAMAZONCHOICE : (state)=>{
            const filteredArray = state.allproducts.filter(product => product.is_amazon_choice === true);
            state.allproducts = filteredArray;
        },
        LOWTOHIGH: (state,action)=>{
            const filteredArray = state.allproducts.sort((a,b) =>  a.parseFloat(action.payload.split("").filter(char => char !== ",").join("").slice(1))-b.parseFloat(action.payload.split("").filter(char => char !== ",").join("").slice(1)));
            state.allproducts = filteredArray;
        },
        HIGHTOLOW: (state,action)=>{
            const filteredArray = state.allproducts.sort((a,b) => b.parseFloat(action.payload.split("").filter(char => char !== ",").join("").slice(1))-a.parseFloat(action.payload.split("").filter(char => char !== ",").join("").slice(1)));
            state.allproducts = filteredArray;
        },
        

        
    }
});

export const { ADD_TO_CART, REMOVE_ITEM, DECREMENT, CLEAR_CART } = cartItemslice.actions;

export const productReducer = cartItemslice.reducer;
