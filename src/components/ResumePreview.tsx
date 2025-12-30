type ResumeData = {
  name: string;
  email: string;
  title: string;
  summary: string;
};

export default function ResumePreview({ data }: { data: ResumeData }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold">{data.name || "Your Name"}</h2>
      <p className="text-gray-600">{data.title || "Job Title"}</p>
      <p className="text-sm mt-2">{data.email || "email@example.com"}</p>

      <hr className="my-4" />

      <p className="text-gray-700">
        {data.summary || "Professional summary will appear here..."}
      </p>
    </div>
  );
}
