import { useSelector } from "react-redux";
import { useRef } from "react";
import { Button } from "@mui/material";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import HomePage from "./Home";
import TemplateOne from "@/templates/TemplateOne";
import TemplateTwo from "@/templates/TemplateTwo";
import TemplateThree from "@/templates/TemplateThree";

export default function Preview() {
  const resumeData = useSelector((state) => state.resume);
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate);
  const pdfRef = useRef();

  // ✅ Choose which template to render
  const getTemplateComponent = () => {
    switch (selectedTemplate) {
      case "template1":
        return <TemplateOne data={resumeData} />;
      case "template2":
        return <TemplateTwo data={resumeData} />;
      case "template3":
        return <TemplateThree data={resumeData} />;
      default:
        return <TemplateOne data={resumeData} />;
    }
  };

  // ✅ HTML to Image + jsPDF download
  const downloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    // Small delay to ensure the DOM is fully painted
    await new Promise((r) => setTimeout(r, 300));

    try {
      // Use html-to-image for perfect color + shadow + Tailwind CSS support
      const dataUrl = await htmlToImage.toPng(element, {
        backgroundColor: "#ffffff",
        pixelRatio: 3, // Higher = sharper image
        cacheBust: true,
      });

      const img = new Image();
      img.src = dataUrl;

      img.onload = () => {
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [img.width, img.height],
        });

        pdf.addImage(img, "PNG", 0, 0, img.width, img.height);
        pdf.save(`${resumeData.personal?.name || "My_Resume"}.pdf`);
      };

      // ✅ Save resume data to localStorage
      const existing = JSON.parse(localStorage.getItem("savedResumes")) || [];
      const newEntry = {
        id: Date.now(),
        name: resumeData.personal?.name || "Unnamed",
        template: selectedTemplate,
        data: resumeData,
      };
      localStorage.setItem("savedResumes", JSON.stringify([...existing, newEntry]));
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating your PDF. Please try again.");
    }
  };

  return (
    <>
      <HomePage />
      <h1 className="text-4xl text-center mt-10 font-bold">Preview Page</h1>

      <div className="flex flex-col items-center justify-center p-5">
        {/* ✅ This container will be captured */}
        <div
          ref={pdfRef}
          className="bg-white shadow-2xl rounded-lg "
          style={{
            overflow: "visible",
            
          
          }}
        >
          {getTemplateComponent()}
        </div>

        <Button
          variant="contained"
          onClick={downloadPDF}
          sx={{
            mt: 3,
            backgroundColor: "#007bff",
            "&:hover": { backgroundColor: "#0056b3" },
            textTransform: "none",
          }}
        >
          Download as PDF
        </Button>
      </div>
    </>
  );
}
