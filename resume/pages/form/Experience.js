import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExperience } from "@/redux/resumeSlice";

// ----------------------------------------------
// Experience Form Component
// This form collects and updates the user’s job
// experience and stores it in the Redux state.
// ----------------------------------------------

export default function Experience() {
  
  const router = useRouter();

  // Redux dispatcher + fetching current experience data
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.resume.experience);

  // Local form state for controlled inputs
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    duration: "",
    description: "",
  });

  // Validation state to store input errors
  const [error, setError] = useState({});

  // ----------------------------------------------
  // Load previous saved data (if exists)
  // This ensures the form shows live-updated values
  // when navigating between sections.
  // ----------------------------------------------
  useEffect(() => {
    if (experience) setFormData(experience);
  }, [experience]);

  // Handle input changes for all fields
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // ----------------------------------------------
  // Validate all fields before moving forward
  // Ensures the form is properly filled.
  // ----------------------------------------------
  function validate() {
    let newErrors = {};

    if (!formData.position || formData.position.trim() === "") {
      newErrors.position = "Position required";
    }

    if (!formData.company || formData.company.trim() === "") {
      newErrors.company = "Company required";
    }

    if (!formData.duration || formData.duration.trim() === "") {
      newErrors.duration = "Duration required";
    }

    if (!formData.description || formData.description.trim().length < 20) {
      newErrors.description = "Min 20 characters required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // ----------------------------------------------
  // Navigate Back to the Personal section
  // (Saves current data before navigating)
  // ----------------------------------------------
  function Back() {
    dispatch(setExperience(formData));
    router.push("/Resume?tab=personal");
  }

  // ----------------------------------------------
  // Save data + Move to the next (Education) section
  // Stop navigating if validation fails
  // ----------------------------------------------
  function Next() {
    if (!validate()) return;
    dispatch(setExperience(formData));
    router.push("/Resume?tab=education");
  }

  return (
    <>
      <div className="relative group">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10">
            
            {/* Section Title */}
            <h5 className="text-md">Experience</h5>

            {/* Top row inputs */}
            <div className="grid grid-cols-2 gap-4 text-center">

              {/* Position input */}
              <input
                name="position"
                placeholder={error.position ? error.position : "Position"}
                type="text"
                className={`h-1 border-1 rounded-full p-5 ${
                  error.position ? "border-red-500 placeholder-red-500" : "border"
                }`}
                value={formData.position}
                onChange={handleChange}
              />

              {/* Company input */}
              <input
                name="company"
                placeholder={error.company ? error.company : "Company"}
                type="text"
                className={`h-1 border-1 rounded-full p-5 ${
                  error.company ? "border-red-500 placeholder-red-500" : "border"
                }`}
                value={formData.company}
                onChange={handleChange}
              />

              {/* Duration input */}
              <input
                name="duration"
                placeholder={error.duration ? error.duration : "Duration"}
                type="duration"
                className={`h-1 border-1 rounded-full p-5 ${
                  error.duration ? "border-red-500 placeholder-red-500" : "border"
                }`}
                value={formData.duration}
                onChange={handleChange}
              />
            </div>

            {/* Description textarea */}
            <input
              name="description"
              placeholder={error.description ? error.description : "Description"}
              type="text"
              className={`h-20 mt-5 w-full border-1 rounded-2xl p-5 ${
                error.description ? "border-red-500 placeholder-red-500" : "border"
              }`}
              value={formData.description}
              onChange={handleChange}
            />

            {/* Navigation Buttons */}
            <div className="flex gap-5 justify-center pt-10">
              <Button variant="outlined" onClick={Back}>Back</Button>
              <Button variant="contained" onClick={Next}>Next</Button>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
