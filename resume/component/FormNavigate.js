import Personal from "../pages/form/Personal";
import Education from "../pages/form/Education";
import Experience from "../pages/form/Experience";
import Skills from "../pages/form/Skills";
import { useRouter } from "next/router";


// ----------------------------------------------
// FormNavigate Component
// ----------------------------------------------
// This component controls the navigation between
// different form sections (Personal, Education,
// Experience, Skills) using Next.js routing.
// When a user clicks on a section, the URL changes
// to /Resume?tab=sectionName and the corresponding
// form is displayed without reloading the page.
// ----------------------------------------------

export default function FormNavigate() {

  const router = useRouter();
  const { tab } = router.query;  // Read selected tab from URL


  // --------------------------------------------------
  // handleTab(section)
  // --------------------------------------------------
  // Updates the URL query parameter "tab" whenever a
  // user clicks on a navigation item.
  // shallow:true → prevents full page reload, improves UX.
  // --------------------------------------------------
  function handleTab(section) {
    router.push(`/Resume?tab=${section}`, undefined, { shallow: true });
  }


  return (
    <>
      <div className="flex flex-col md:flex-row gap-30 mt-20">

        {/* ----------------------------------------------
            Left Navigation (Clickable Form Sections)
           ---------------------------------------------- */}
        <div className="w-80 ml-7 sm:ml-20 justify-center rounded-lg">
          <div className="flex flex-row sm:flex-col text-center">
            
            {/* Each item calls handleTab() to switch section */}
            <p
              className="border-b-2 border-b-gray-100 p-2 text-gray-400 
              hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all"
              onClick={() => handleTab("personal")}
            >
              Personal Information
            </p>

            <p
              className="border-b-2 border-b-gray-100 p-2 text-gray-400 
              hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all"
              onClick={() => handleTab("experience")}
            >
              Work Experience
            </p>

            <p
              className="border-b-2 border-b-gray-100 p-2 text-gray-400 
              hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all"
              onClick={() => handleTab("education")}
            >
              Education
            </p>

            <p
              className="border-b-2 border-b-gray-100 p-2 text-gray-400 
              hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all"
              onClick={() => handleTab("skills")}
            >
              Skills
            </p>

          </div>
        </div>


        {/* ----------------------------------------------
            Right Side — Shows the Correct Form
            Based on URL Query: ?tab=...
            - Defaults to Personal form
           ---------------------------------------------- */}
        <div className="items-center justify-center">
          {tab === "education" ? (
            <Education />
          ) : tab === "experience" ? (
            <Experience />
          ) : tab === "skills" ? (
            <Skills />
          ) : (
            <Personal />
          )}
        </div>

      </div>
    </>
  );
}
