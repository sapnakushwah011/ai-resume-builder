export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Resume Builder
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Job Title"
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Professional Summary"
            className="w-full border p-2 rounded h-28"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Generate Resume
          </button>

        </form>
      </div>
    </main>
  );
}
