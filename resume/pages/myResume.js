import HomePage from "./Home";
import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import TemplateOne from "@/templates/TemplateOne";
import TemplateTwo from "@/templates/TemplateTwo";
import TemplateThree from "@/templates/TemplateThree";

export default function MyResume() {
  const [savedResumes, setSavedResumes] = useState([]);

  // ✅ Load saved resumes from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedResumes")) || [];
    setSavedResumes(stored);
  }, []);

  const getTemplateComponent = (template, data) => {
    switch (template) {
      case "template1":
        return <TemplateOne data={data} />;
      case "template2":
        return <TemplateTwo data={data} />;
      case "template3":
        return <TemplateThree data={data} />;
      default:
        return <TemplateOne data={data} />;
    }
  };

  // ✅ Delete a resume
  const deleteResume = (id) => {
    const updated = savedResumes.filter((r) => r.id !== id);
    setSavedResumes(updated);
    localStorage.setItem("savedResumes", JSON.stringify(updated));
  };

  return (
    <>
    <HomePage/>
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Saved Resumes</h1>

      {savedResumes.length === 0 ? (
        <p className="text-center text-gray-600">No resumes saved yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedResumes.map((resume) => (
            <Card
              key={resume.id}
              className="shadow-xl border border-gray-200 rounded-2xl"
            >
              <CardContent>
                <Typography variant="h6" className="font-bold mb-2">
                  {resume.name}
                </Typography>

                <div className="border border-gray-300 rounded-lg p-2 overflow-hidden bg-white h-[300px] overflow-y-auto">
                  {getTemplateComponent(resume.template, resume.data)}
                </div>

                <div className="flex justify-between mt-3">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      const json = JSON.stringify(resume.data, null, 2);
                      const blob = new Blob([json], {
                        type: "application/json",
                      });
                      const link = document.createElement("a");
                      link.href = URL.createObjectURL(blob);
                      link.download = `${resume.name}.json`;
                      link.click();
                    }}
                  >
                    Export JSON
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => deleteResume(resume.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  </>);
}
