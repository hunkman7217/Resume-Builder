import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setEducation } from "@/redux/resumeSlice";
import { useState, useEffect } from "react";

// ---------------------------------------------
//  Education.js
//  This component handles the Education section 
//  of the Resume Builder form. Users can input 
//  degree, institution, and year, which are stored 
//  in Redux for global access.
// ---------------------------------------------

export default function Education() {

  const router = useRouter();

  // Redux: Access and update education data from resumeSlice
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  // Local state to manage form inputs
  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  // Local state to store validation error messages
  const [error, setError] = useState({});

  // ---------------------------------------------
  // Form Validation:
  // Ensures all fields are filled before allowing
  // the user to move to the next step.
  // ---------------------------------------------
  function validate() {
    let newErrors = {};

    if (!formData.degree || formData.degree.trim() === "") {
      newErrors.degree = "Degree required";
    }

    if (!formData.institution || formData.institution.trim() === "") {
      newErrors.institution = "Institution required";
    }

    if (!formData.year || formData.year.trim() === "") {
      newErrors.year = "Year required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ---------------------------------------------
  // useEffect:
  // Prefills the form with saved education data
  // from Redux when the user revisits this section.
  // ---------------------------------------------
  useEffect(() => {
    if (education) setFormData(education);
  }, [education]);

  // Handles input changes and updates local form state
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // ---------------------------------------------
  // Navigation Buttons:
  // Back → Experience section
  // Next → Skills section (after validation)
  // ---------------------------------------------
  function Back() {
    router.push("/Resume?tab=experience");
  }

  function Next() {
    if (!validate()) return;
    dispatch(setEducation(formData)); // Save data to Redux
    router.push("/Resume?tab=skills");
  }

  return (
    <>
      <div className="relative group">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10">
            
            {/* Section Title */}
            <h5 className="text-md">Education</h5>

            {/* Education Input Form */}
            <form>
              <div className="grid grid-cols-2 gap-4 text-center">

                {/* Degree Field */}
                <input
                  name="degree"
                  placeholder={error.degree ? error.degree : "Degree"}
                  type="text"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.degree ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.degree}
                  onChange={handleChange}
                />

                {/* Institution Field */}
                <input
                  name="institution"
                  placeholder={error.institution ? error.institution : "Institution"}
                  type="text"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.institution ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.institution}
                  onChange={handleChange}
                />

                {/* Year Field */}
                <input
                  name="year"
                  placeholder={error.year ? error.year : "Year"}
                  type="date"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.year ? "border-red-500" : "border"
                  }`}
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-5 justify-center pt-10">
                <Button variant="outlined" onClick={Back}>Back</Button>
                <Button variant="contained" onClick={Next}>Next</Button>
              </div>
            </form>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
