"use client";

import { useState } from "react";
import TemplateOne from "@/components/templates/TemplateOne";
import TemplateTwo from "@/components/templates/TemplateTwo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumePage() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    title: "",
    summary: "",
  });

  const [template, setTemplate] = useState("one");

  const downloadPDF = async () => {
    const resumeElement = document.getElementById("resume-preview");
    if (!resumeElement) return;

    const canvas = await html2canvas(resumeElement, {
      scale: 2,
      backgroundColor: "#ffffff",
      onclone: (clonedDoc) => {
        const clonedResume =
          clonedDoc.getElementById("resume-preview");

        if (clonedResume) {
          clonedResume.style.backgroundColor = "#ffffff";
          clonedResume.style.color = "#000000";
  
          clonedResume.querySelectorAll("*").forEach((el: any) => {
            el.style.color = "#000000";
            el.style.backgroundColor = "transparent";
            el.style.borderColor = "#000000";
          });
        }
      },
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* FORM */}
        <form className="bg-white p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setResumeData({ ...resumeData, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setResumeData({ ...resumeData, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Job Title"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setResumeData({ ...resumeData, title: e.target.value })
            }
          />

          <textarea
            placeholder="Professional Summary"
            className="w-full border p-2 rounded h-28"
            onChange={(e) =>
              setResumeData({ ...resumeData, summary: e.target.value })
            }
          />
        </form>

        {/* PREVIEW */}
        <div>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTemplate("one")}
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Template 1
            </button>

            <button
              onClick={() => setTemplate("two")}
              className="px-4 py-1 bg-gray-700 text-white rounded"
            >
              Template 2
            </button>

            <button
              onClick={downloadPDF}
              className="ml-auto px-4 py-1 bg-green-600 text-white rounded"
            >
              Download PDF
            </button>
          </div>

          <div id="resume-preview">
            {template === "one" && <TemplateOne data={resumeData} />}
            {template === "two" && <TemplateTwo data={resumeData} />}
          </div>

        </div>
      </div>
    </main>
  );
}
