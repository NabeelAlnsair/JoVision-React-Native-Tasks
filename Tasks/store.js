import { configureStore, createSlice } from '@reduxjs/toolkit';

const textSlice=createSlice({
  name:'text',
  initialState:{value:''},
  reducers:{
    setText:(state,action)=>{
      state.value=action.payload;
    },
  },
});

export const{setText}=textSlice.actions;

export const store=configureStore({
  reducer:{
    text:textSlice.reducer,
  },
});