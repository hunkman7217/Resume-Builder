import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "@/redux/resumeSlice";
import { useState, useEffect } from "react";

// ===============================
//  Skills Section – Resume Builder
//  This component allows the user
//  to enter their skillset, validates
//  the input, updates Redux state,
//  and navigates to the preview page.
// ===============================

export default function Skills() {

  const router = useRouter();

  // Redux: Accessing and updating skills data
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  // Local state to store form input
  const [formData, setFormData] = useState({
    skills: "",
  });

  // Local state to handle validation errors
  const [error, setError] = useState({});

  // Sync Redux state into form when component loads or updates
  useEffect(() => {
    if (skills) setFormData(skills);
  }, [skills]);

  // Update form input value dynamically
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Validate form before allowing the user to continue
  function validate() {
    let newError = {};

    // Skills field cannot be empty
    if (!formData.skills.trim()) {
      newError.skills = "Skills cannot be empty";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  // Navigate user to the previous section (Education)
  function Back() {
    router.push("/Resume?tab=education");
  }

  // Save data to Redux and go to the final Preview screen
  function Next() {
    if (!validate()) return;
    dispatch(setSkills(formData));
    router.push("/Preview");
  }

  return (
    <>
      <div className="relative group">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10">
            
            {/* Section Heading */}
            <h5 className="text-md">Skills</h5>

            {/* Skills Input Field */}
            <div className="text-center">
              <input
                name="skills"
                placeholder={
                  error.skills ? error.skills : "Enter Skills Here..."
                }
                type="text"
                className={`h-20 border-1 rounded-md w-[400px] pl-3 ${
                  error.skills
                    ? "border-red-500 placeholder-red-500"
                    : "border"
                }`}
                required
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-5 justify-center pt-10">
              <Button variant="outlined" onClick={Back}>
                Back
              </Button>
              <Button variant="contained" onClick={Next}>
                Next
              </Button>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
