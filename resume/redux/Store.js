import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateSlice";
import resumeReducer from "./resumeSlice";

// ================================
// Redux Store Configuration
// ----------------
// This is the central store of the application.
// All slices (template & resume data) are registered here.
// The entire application can now access shared state.
// ================================

export const store = configureStore({
  reducer: {
    // Controls which resume template is selected
    template: templateReducer,

    // Stores all resume form data (personal, experience, skills, etc.)
    resume: resumeReducer,
  },
});
