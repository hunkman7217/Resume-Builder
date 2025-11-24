import { useSelector } from "react-redux";

// -----------------------------------------------------------
// TemplateOne.js  
// Resume Basic Template (Template One)
// -----------------------------------------------------------
// This component receives a default resume structure via props (`data`)
// and overrides it with real-time user input taken from the Redux store.
// The final resume preview dynamically updates as the user fills the form.
// -----------------------------------------------------------

export default function TemplateOne({ data }) {

  // Fetching all resume details from Redux store
  const resume = useSelector((state) => state.resume);

  // Checking if the user has entered any personal info.
  // If not, template will use placeholder (dummy) data.
  const isFilled =
    resume.personal?.name || resume.education?.length > 0;

  // Creating the final data object that merges:
  // 1. Default template data (dummy values)
  // 2. User-filled data (if available)
  // Priority is given to user-filled data
  const finalData = isFilled
    ? {
        ...data,
        ...resume.personal,
        // If the user has filled any education, use it. Otherwise fallback to dummy.
        education: resume.education?.length
          ? resume.education
          : data.education,

        // Same rule applies for experience data
        experience: resume.experience?.length
          ? resume.experience
          : data.experience,

        // Same rule applies for skills data
        skills: resume.skills?.length
          ? resume.skills
          : data.skills,
      }
    : data;

  // ---------------------------------------------------------
  // JSX Rendering Section
  // Displays resume layout including:  
  // Name, Role, Summary, Contact, Education, Experience & Skills
  // Values update live based on Redux data
  // ---------------------------------------------------------

  return (
    <div className="shadow-lg p-2 rounded-lg h-[300px] ">

      {/* ----------------- Name & Role Section ----------------- */}
      <div className="border-b-1 border-amber-500 mb-2 ">
        <h1 className="text-sm text-amber-600 text-center mt-1">
          {finalData.name || data.name}
        </h1>

        <p className="text-[0.4rem] text-center text-gray-500 mb-1">
          {finalData.experience?.[0]?.position ||
            data.experience.position}
        </p>
      </div>

      {/* ---------------------- Summary ------------------------ */}
      <div className="border-b-1 border-amber-500 mt-0.5 mb-2">
        <h3 className="text-[0.4rem] font-bold text-center mb-1">
          -----Summary-----
        </h3>

        <p className="text-[0.3rem] mb-1 ">
          {finalData.summary || data.summary}
        </p>
      </div>

      {/* ----------------------- Contact ------------------------ */}
      <div className="border-b-1 border-amber-500 mb-2 ">
        <h3 className="text-[0.4rem] font-bold text-center mb-1">
          -----Contact-----
        </h3>

        <div className="flex gap-3">
          <p className="text-[0.3rem]">
            <span className="font-bold">Email - </span>
            {finalData.email || data.email}
          </p>

          <p className="text-[0.3rem]">
            <span className="font-bold">Mobile - </span>
            {finalData.phone || data.phone}
          </p>

          <p className="text-[0.3rem]">
            <span className="font-bold">DOB - </span>
            {finalData.birth || data.birth}
          </p>
        </div>
      </div>

      {/* ---------------------- Education ------------------------ */}
      <div className="border-b-1 border-amber-500 mt-0.5 mb-2">
        <h3 className="text-[0.4rem] font-bold text-center mb-1">
          -----Education-----
        </h3>

        <p className="text-[0.3rem] mb-1">
          <span className="font-bold">Degree - </span>
          {finalData.education?.[0]?.degree ||
            data.education.degree}
          <br />

          <span className="font-bold">Institution - </span>
          {finalData.education?.[0]?.institution ||
            data.education.institution}
          <br />

          <span className="font-bold">Year - </span>
          {finalData.education?.[0]?.year ||
            data.education.year}
        </p>
      </div>

      {/* --------------------- Experience ------------------------ */}
      <div className="border-b-1 border-amber-500 mt-0.5 mb-2  ">
        <h3 className="text-[0.4rem] font-bold text-center mb-1">
          -----Experience-----
        </h3>

        <p className="text-[0.3rem] mb-1 ">
          <span className="font-bold">Position - </span>
          {finalData.experience?.[0]?.position ||
            data.experience.position}
          <br />

          <span className="font-bold">Company - </span>
          {finalData.experience?.[0]?.company ||
            data.experience.company}
          <br />

          <span className="font-bold">Duration - </span>
          {finalData.experience?.[0]?.duration ||
            data.experience.duration}
          <br />

          <span className="font-bold">Description - </span>
          {finalData.experience?.[0]?.description ||
            data.experience.description}
        </p>
      </div>

      {/* ----------------------- Skills -------------------------- */}
      <div className="border-b-1 border-amber-500 mt-0.5 mb-2 ">
        <h3 className="text-[0.4rem] font-bold text-center mb-1">
          -----Skills-----
        </h3>

        <p className="text-[0.3rem] mb-1">
          {
            // Handling different skill formats (array or object)
            Array.isArray(finalData.skills)
              ? finalData.skills.join(", ")
              : Array.isArray(data.skills)
              ? data.skills.join(", ")
              : Object.values(finalData.skills || data.skills || {})
                  .flat()
                  .join(", ")
          }
        </p>
      </div>
    </div>
  );
}
