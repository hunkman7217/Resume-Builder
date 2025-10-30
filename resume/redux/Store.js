import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateSlice";
import resumeReducer from "./resumeSlice"



export const store = configureStore({

reducer:{
  template: templateReducer,
  resume: resumeReducer,
},

});