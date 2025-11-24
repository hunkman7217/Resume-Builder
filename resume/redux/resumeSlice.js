import { createSlice } from "@reduxjs/toolkit";

/*
|-------------------------------------------------------------|
|                 RESUME SLICE (Redux Toolkit)                |
|-------------------------------------------------------------|
| This slice stores and manages all resume-related data.      |
| Each section of the resume (Personal, Experience,           |
| Education, Skills) lives inside a single global Redux state |
| so that all components can access and update it easily.     |
|-------------------------------------------------------------|
*/

const resumeSlice = createSlice({
  name: "resume",

  // -----------------------------------------------------------
  // Initial Structure of Resume Data
  // -----------------------------------------------------------
  // All form inputs are pre-defined here so every page
  // automatically receives an empty but structured data format.
  // -----------------------------------------------------------
  initialState: {
    personal: {
      name: "",
      email: "",
      birth: "",
      phone: "",
      summery: "",
    },

    experience: {
      position: "",
      company: "",
      duration: "",
      description: "",
    },

    education: {
      degree: "",
      institution: "",
      year: "",
    },

    skills: {
      skills: "",
    },
  },

  // -----------------------------------------------------------
  // Reducers — Single Responsibility Functions
  // -----------------------------------------------------------
  // Each reducer updates only one specific section of the resume.
  // This keeps updates clean and prevents unwanted overwrites.
  // -----------------------------------------------------------
  reducers: {
    // Update Personal Info Section
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },

    // Update Experience Section
    setExperience: (state, action) => {
      state.experience = action.payload;
    },

    // Update Education Section
    setEducation: (state, action) => {
      state.education = action.payload;
    },

    // Update Skills Section
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

// -----------------------------------------------------------
// Exporting Actions & Reducer
// -----------------------------------------------------------
// These actions are called from form pages to update Redux data.
// The reducer is used inside the store configuration.
// -----------------------------------------------------------
export const {
  setPersonal,
  setExperience,
  setEducation,
  setSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;
