import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
}

const productSlice = createSlice({
    name :"cart",
    initialState,
    reducers : {
        ADD_TO_CART: (state, action)=>{
            state.products.push(action.payload);
        }
        
        
    }
});

export const { ADD_TO_CART } = productSlice.actions;
export const productReducer = productSlice.reducer;
