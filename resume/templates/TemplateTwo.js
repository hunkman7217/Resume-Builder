import { useSelector } from "react-redux";

/**
 * TemplateTwo.js
 * -------------------------
 * Resume Template (Design 2)
 *
 * This component renders a resume preview using:
 *  - Dummy template data received from the parent (prop: data)
 *  - Updated real-time user-filled data from Redux store
 *
 * It merges both and always shows the most recent input.
 */

export default function TemplateTwo({ data }) {

  // Get resume data from Redux store (personal, education, experience, skills)
  const resume = useSelector((state) => state.resume);

  /**
   * Check whether the user filled any form data.
   * If personal.name exists OR education array has length,
   * then show live user-filled values instead of dummy data.
   */
  const isFilled = resume.personal?.name || resume.education?.length > 0;

  /**
   * finalData decides what content should display in the preview.
   * If the user filled data → merge it with template data.
   * Else → show original dummy template data.
   */
  const finalData = isFilled
    ? {
        ...data,
        ...resume.personal,
        education: resume.education?.length ? resume.education : data.education,
        experience: resume.experience?.length ? resume.experience : data.experience,
        skills: resume.skills?.length ? resume.skills : data.skills,
      }
    : data;

  return (
    <>
      <div className="shadow-lg p-2 rounded-lg h-[300px]">

        {/* Top Header Section (Name + Role) */}
        <div className="border-b-1 border-black-500 mb-2 pt-1 rounded-full bg-cyan-600">
          <h1 className="text-sm text-white text-center mt-1">
            {finalData.name || data.name}
          </h1>

          <p className="text-[0.4rem] text-center text-white mb-1">
            {finalData.experience?.[0]?.position || data.experience.position}
          </p>
        </div>

        {/* Summary Section */}
        <div className="border-b-1 border-black-500 mt-0.5 mb-2">
          <h3 className="text-[0.4rem] font-bold text-start mb-1">Summary</h3>
          <p className="text-[0.3rem] mb-1">
            {finalData.summary || data.summary}
          </p>
        </div>

        {/* Skills Section */}
        <div className="border-b-1 border-black-500 mt-0.5 mb-2">
          <h3 className="text-[0.4rem] font-bold text-start mb-1">Skills</h3>
          <p className="text-[0.3rem] mb-1">
            {Array.isArray(finalData.skills)
              ? finalData.skills.join(", ")
              : Array.isArray(data.skills)
              ? data.skills.join(", ")
              : Object.values(finalData.skills || data.skills || {})
                  .flat()
                  .join(", ")}
          </p>
        </div>

        {/* Contact Section */}
        <div className="border-b-1 border-black-500 mb-1">
          <h3 className="text-[0.4rem] font-bold text-start mb-1">Contact</h3>

          <div className="flex-col gap-6">
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

        {/* Education Section */}
        <div className="border-b-1 border-black-500 mt-0.5 mb-1">
          <h3 className="text-[0.4rem] font-bold text-start mb-1">Education</h3>

          <p className="text-[0.3rem] mb-1">
            <span className="font-bold">Degree - </span>
            {finalData.education?.[0]?.degree || data.education.degree}
            <br />

            <span className="font-bold">Institution - </span>
            {finalData.education?.[0]?.institution || data.education.institution}
            <br />

            <span className="font-bold">Year - </span>
            {finalData.education?.[0]?.year || data.education.year}
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="border-b-1 border-black-500 mt-0.5 mb-2">
          <h3 className="text-[0.4rem] font-bold text-start mb-1">Experience</h3>

          <p className="text-[0.3rem] mb-1">
            <span className="font-bold">Position - </span>
            {finalData.experience?.[0]?.position || data.experience.position}
            <br />

            <span className="font-bold">Company - </span>
            {finalData.experience?.[0]?.company || data.experience.company}
            <br />

            <span className="font-bold">Duration - </span>
            {finalData.experience?.[0]?.duration || data.experience.duration}
            <br />

            <span className="font-bold">Description - </span>
            {finalData.experience?.[0]?.description || data.experience.description}
          </p>
        </div>
      </div>
    </>
  );
}