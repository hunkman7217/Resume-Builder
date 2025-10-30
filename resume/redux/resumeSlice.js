import {createSlice} from "@reduxjs/toolkit";

const resumeSlice = createSlice({

name: "resume",

initialState:{

personal:{
  name:"",
  email:"",
  birth:"",
  phone:"",
  summery:"",
},
experience:{
  position:"",
  company:"",
  duration:"",
  description:"",
},
education:{
degree:"",
institution:"",
year:"",

},
skills:{
skills:"",

},

},

reducers:{

setPersonal:(state ,action)=>{state.personal = action.payload},
setExperience:(state, action)=>{state.experience = [action.payload];},
setEducation :(state ,action)=>{state.education = [action.payload];},
setSkills:(state , action)=> {state.skills= action.payload},

},

});

export const {setPersonal,setExperience,setEducation,setSkills} = resumeSlice.actions;

export default resumeSlice.reducer;