import { createSlice } from "@reduxjs/toolkit";

/*
 |--------------------------------------------------------------
 | templateSlice.js
 |--------------------------------------------------------------
 | This slice manages the currently selected resume template.
 | When the user clicks on any template option, we store that
 | template's ID/name inside Redux so other pages (like Preview)
 | can render the correct layout.
 |--------------------------------------------------------------
*/

const templateSlice = createSlice({
  // Slice name for identification
  name: "template",

  // Initial value — nothing selected at start
  initialState: {
    selectedTemplate: null,
  },

  // Reducers: functions that update state
  reducers: {
    /*
      setTemplate()
      ---------------------------------------------------------
      Purpose:
      → Stores the template selected by the user.

      Parameters:
      - state: Current Redux state
      - action: Payload (template name/id)

      Example usage:
      dispatch(setTemplate("template1"));
    */
    setTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
  },
});

// Exporting actions for use inside components
export const { setTemplate } = templateSlice.actions;

// Exporting reducer to be added to the Redux store
export default templateSlice.reducer;
