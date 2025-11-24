import { useSelector } from "react-redux";

/*
  ================================
      TemplateThree Component
  ================================
  • This is one of the resume templates (Template Three)
  • It receives dummy `data` as props
  • It also pulls latest resume data from Redux
  • If user has filled their details, we override the dummy data
  • Otherwise default template data is shown
*/

export default function TemplateThree({ data }) {
  // Fetching latest resume data from Redux store
  const resume = useSelector((state) => state.resume);

  // Checking if the user has filled at least the personal name or education
  const isFilled = resume.personal?.name || resume.education?.length > 0;

  /*
    Constructing finalData:
    - If user has entered values -> use resume values
    - If not -> fallback to dummy template data
  */
  const finalData = isFilled
    ? {
        ...data,
        ...resume.personal,
        education: resume.education?.length ? resume.education : data.education,
        experience: resume.experience?.length
          ? resume.experience
          : data.experience,
        skills: resume.skills?.length ? resume.skills : data.skills,
      }
    : data;

  return (
    <>
      <div className="shadow-2xl p-2 rounded-lg h-[300px] ">
        {/* ================= NAME & ROLE ================ */}
        <div className=" bg-pink-900 pt-2 pb-2 rounded-b-sm">
          <h1 className="text-sm text-white text-center mt-1">
            {finalData.name || data.name}
          </h1>
          <p className=" text-[0.4rem] text-center text-white mb-1">
            {finalData.experience?.[0]?.position || data.experience.position}
          </p>
        </div>

        {/* ================= SUMMARY SECTION ================ */}
        <div className="border-b-1 border-pink-900 mt-0.5 mb-2">
          <h3 className="text-[0.4rem] font-bold text-start pt-1 text-pink-900 mb-1">
            Summary
          </h3>
          <p className="text-[0.3rem] mb-1">
            {finalData.summary || data.summary}
          </p>
        </div>

        {/* ================= CONTACT SECTION ================ */}
        <div className="border-b-1 border-pink-900 mb-2 ">
          <h3 className="text-[0.4rem] font-bold text-start text-pink-900 mb-1">
            Contact
          </h3>

          <div className="flex gap-3">
            <p className="text-[0.3rem] mb-1">
              <span className="font-bold text-pink-900">Mobile -</span>{" "}
              {finalData.phone || data.phone}
            </p>
            <p className="text-[0.3rem]">
              <span className="font-bold text-pink-900">Email - </span>
              {finalData.email || data.email}
            </p>
            <p className="text-[0.3rem] mb-1">
              <span className="font-bold">DOB -</span>{" "}
              {finalData.birth || data.birth}
            </p>
          </div>
        </div>

        {/* ================= SKILLS SECTION ================ */}
        <div className="border-b-1 border-pink-900 mt-0.5 mb-2">
          <h3 className="text-[0.4rem] font-bold text-start mb-1 text-pink-900">
            Skills
          </h3>

          {/* Handling both array & object structures */}
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

        {/* WRAPPING EDUCATION + EXPERIENCE */}
        <div className="">
          {/* ================= EDUCATION SECTION ================ */}
          <div className="border-b-1 border-pink-900 mt-0.5 mb-2">
            <h3 className="text-[0.4rem] font-bold text-start text-pink-900 mb-1">
              Education
            </h3>

            <p className="text-[0.3rem] mb-1">
              <span className="font-bold">Degree - </span>
              {finalData.education?.[0]?.degree || data.education.degree}
              <br />
              <span className="font-bold">Institution - </span>
              {finalData.education?.[0]?.institution ||
                data.education.institution}
              <br />
              <span className="font-bold">Year - </span>
              {finalData.education?.[0]?.year || data.education.year}
            </p>
          </div>

          {/* ================= EXPERIENCE SECTION ================ */}
          <div className="border-b-1 border-pink-900 mt-0.5 mb-2">
            <h3 className="text-[0.4rem] font-bold text-start text-pink-900 mb-1">
              Experience
            </h3>

            <p className="text-[0.3rem] mb-1">
              <span className="font-bold">Position - </span>
              {finalData.experience?.[0]?.position ||
                data.experience.position}
              <br />
              <span className="font-bold">Company - </span>
              {finalData.experience?.[0]?.company || data.experience.company}
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
        </div>
      </div>
    </>
  );
}
