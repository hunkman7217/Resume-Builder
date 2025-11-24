import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPersonal } from "@/redux/resumeSlice";

// -----------------------------------------------
//  Personal.js  
//  This page handles the "Personal Information" 
//  form where the user enters details like name, 
//  phone, email, DOB, and summary.
//  
//  Data is synced with Redux so it can be used 
//  across pages + preview + PDF.
// -----------------------------------------------

export default function Personal() {
  const router = useRouter();

  // Access Redux state + dispatcher
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.resume.personal);

  // Local state for form values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    birth: "",
    summary: "",
  });

  // Local state to store validation errors
  const [error, setError] = useState({});

  // ------------------------------------------------
  // useEffect → Load previously saved personal data
  // This ensures data stays visible when navigating
  // back and forth between forms.
  // ------------------------------------------------
  useEffect(() => {
    if (personal) setFormData(personal);
  }, [personal]);

  // ------------------------------------------------
  // handleChange → Update input fields in real-time
  // ------------------------------------------------
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // ------------------------------------------------
  // validate → Basic validation for all input fields
  // Includes checks for:
  //  - Empty fields
  //  - Valid phone number
  //  - Valid email format
  //  - Minimum summary length
  // ------------------------------------------------
  function validate() {
    let newError = {};

    if (!formData.name.trim()) {
      newError.name = "Full Name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newError.phone = "Enter a valid 10-digit phone number";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newError.email = "Please enter a valid email address";
    }

    if (!formData.birth.trim()) {
      newError.birth = "Date of Birth is required";
    }

    if (!formData.summary || formData.summary.trim().length < 20) {
      newError.summary = "Summary must be at least 20 characters";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  // ------------------------------------------------
  // Next → Save data to Redux + go to Experience tab
  // ------------------------------------------------
  function Next() {
    if (!validate()) return; // Block if invalid
    dispatch(setPersonal(formData));
    router.push("/Resume?tab=experience");
  }

  return (
    <>
      <div className="relative group">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10">

            <h5 className="text-md">Personal Information</h5>

            <form>
              {/* Two-column layout for form fields */}
              <div className="grid grid-cols-2 gap-4 text-center">
                
                {/* Full Name */}
                <input
                  name="name"
                  placeholder={error.name ? error.name : "Name"}
                  type="text"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.name ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                />

                {/* Phone Number */}
                <input
                  name="phone"
                  placeholder={error.phone ? error.phone : "Mobile Number"}
                  type="text"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.phone ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />

                {/* Email */}
                <input
                  name="email"
                  placeholder={error.email ? error.email : "Email"}
                  type="text"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.email ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* Date of Birth */}
                <input
                  name="birth"
                  placeholder={error.birth ? error.birth : "DOB"}
                  type="date"
                  className={`h-1 border-1 rounded-full p-5 ${
                    error.birth ? "border-red-500 placeholder-red-500" : "border"
                  }`}
                  value={formData.birth}
                  onChange={handleChange}
                />
              </div>

              {/* Summary Field */}
              <input
                name="summary"
                placeholder={error.summary ? error.summary : "Summary"}
                type="text"
                className={`h-20 mt-5 w-full border-1 rounded-2xl p-5 ${
                  error.summary ? "border-red-500 placeholder-red-500" : "border"
                }`}
                value={formData.summary}
                onChange={handleChange}
              />

              {/* Next Button */}
              <div className="flex gap-5 justify-center pt-10">
                <Button variant="contained" onClick={Next}>
                  Next
                </Button>
              </div>
            </form>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
