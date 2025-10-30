import { createSlice } from "@reduxjs/toolkit";


const templateSlice = createSlice({

name: "template",

initialState:{
  selectedTemplate:null,
},
reducers:{
  setTemplate:(state , action) =>{
state.selectedTemplate = action.payload;
  },
},



});

export const{setTemplate} = templateSlice.actions;
export default templateSlice.reducer;