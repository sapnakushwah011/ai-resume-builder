"use client";

import { useState } from "react";
import ResumePreview from "@/components/ResumePreview";

export default function ResumePage() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    title: "",
    summary: "",
  });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume Builder</h1>

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
        <ResumePreview data={resumeData} />
        
      </div>
    </main>
  );
}
