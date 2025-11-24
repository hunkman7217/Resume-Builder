"use client";

import { dummyResumes } from "@/data/DummyData";
import TemplateOne from "@/templates/TemplateOne";
import TemplateTwo from "@/templates/TemplateTwo";
import TemplateThree from "@/templates/TemplateThree";
import HomePage from "./Home";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setTemplate } from "@/redux/templateSlice";

/* --------------------------------------------------------------------------
   HOME PAGE (MAIN ENTRY)
   This page shows 3 resume templates and allows the user to pick one.
   After choosing a template, the user is redirected to the multi-step form.
-------------------------------------------------------------------------- */

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  /* ----------------------------------------------------------------------
     goToForm(templateId)
     - Stores the selected template ID in Redux
     - Navigates user to /Resume where the multi-step form begins
  ---------------------------------------------------------------------- */
  function goToForm(templateId) {
    dispatch(setTemplate(templateId));
    router.push("/Resume");
  }

  return (
    <>
      {/* ------------------------------ HEADER ------------------------------ */}
      <header>
        {/* Reusable Navbar component */}
        <HomePage />
      </header>

      {/* ------------------------------ MAIN ------------------------------- */}
      <main>
        {/* Section Title */}
        <div className="mt-20">
          <div className="pl-10">
            <h1 className="font-bold text-4xl pb-1">Templates</h1>
            <p className="pl-2 text-md italic">Select a Template to get Started!</p>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex justify-center mt-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer">

            {/* ------------------------ TEMPLATE 1 ------------------------ */}
            <div className="relative group">
              {/* Preview the template with dummy data */}
              <TemplateOne data={dummyResumes[0]} />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg
                             active:bg-blue-700 cursor-pointer"
                  onClick={() => goToForm("template1")}
                >
                  Use Template
                </button>

              </div>
            </div>

            {/* ------------------------ TEMPLATE 2 ------------------------ */}
            <div className="relative group">
              <TemplateTwo data={dummyResumes[1]} />

              <div className="absolute inset-0 bg-black/50 flex justify-center items-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg
                             active:bg-blue-700 cursor-pointer"
                  onClick={() => goToForm("template2")}
                >
                  Use Template
                </button>

              </div>
            </div>

            {/* ------------------------ TEMPLATE 3 ------------------------ */}
            <div className="relative group">
              <TemplateThree data={dummyResumes[2]} />

              <div className="absolute inset-0 bg-black/50 flex justify-center items-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg
                             active:bg-blue-700 cursor-pointer"
                  onClick={() => goToForm("template3")}
                >
                  Use Template
                </button>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ------------------------------ FOOTER --------------------------- */}
      <footer></footer>
    </>
  );
}
