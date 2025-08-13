export default function Page1() {
  return (
    <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-2">
          Upload PDF
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Select a PDF document to upload and preview it instantly.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition hover:shadow-xl">
          <form className="space-y-6">
            {/* File Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a PDF file
              </label>
              <input
                type="file"
                accept=".pdf"
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer file:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-2">
                Only PDF files are supported. Max size: 10MB.
              </p>
            </div>

            {/* Upload Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              Upload
            </button>
          </form>

          {/* Preview Section */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Preview</h2>
            <p className="text-sm text-gray-500">
              Uploaded file preview will appear here.
            </p>
            <div className="mt-4 flex justify-center items-center h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
              <span className="text-gray-400 text-sm">No file uploaded yet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
