import { createSlice } from "@reduxjs/toolkit";
import { allproducts } from '../components/data.js';

const initialState = {
    cartItems: [],
    allproducts: allproducts
};

const cartItemslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const itemIndex = state.cartItems.findIndex(product => product.asin === action.payload.asin);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            const { asin } = action.payload;
            const product = state.allproducts.find(product => product.asin === asin);
            if (product) {
                product.addedtocart = true;
            }
        },
        REMOVE_ITEM: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.asin !== action.payload.asin);
        },
        DECREMENT: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.asin === action.payload.asin);
            if (itemIndex >= 0) {
                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(item => item.asin !== action.payload.asin);
                }
            }
        },
        CLEAR_CART: (state) => {
            state.cartItems = [];
        },
        FILTERByAmount: (state, action) => {
            const filteredArray = state.allproducts.filter(product => parseFloat(product.product_price.replace(/[^0-9.-]+/g, "")) > parseFloat(action.payload.replace(/[^0-9.-]+/g, "")));
            state.allproducts = filteredArray;
        },
        FILTERByStarRating: (state, action) => {
            const filteredArray = state.allproducts.filter(product => product.product_star_rating > parseFloat(action.payload));
            state.allproducts = filteredArray;
        },
        FILTERByPrime: (state) => {
            const filteredArray = state.allproducts.filter(product => product.is_prime === true);
            state.allproducts = filteredArray;
        },
        FILTERByAMAZONCHOICE: (state) => {
            const filteredArray = state.allproducts.filter(product => product.is_amazon_choice === true);
            state.allproducts = filteredArray;
        },
        LOWTOHIGH: (state) => {
            state.allproducts.sort((a, b) => parseFloat(a.product_price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.product_price.replace(/[^0-9.-]+/g, "")));
        },
        HIGHTOLOW: (state) => {
            state.allproducts.sort((a, b) => parseFloat(b.product_price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.product_price.replace(/[^0-9.-]+/g, "")));
        },
    }
});

export const { ADD_TO_CART, REMOVE_ITEM, DECREMENT, CLEAR_CART, FILTERByAmount, FILTERByStarRating, FILTERByPrime, FILTERByAMAZONCHOICE, LOWTOHIGH, HIGHTOLOW } = cartItemslice.actions;

export const productReducer = cartItemslice.reducer;
