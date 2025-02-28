import React from 'react';
import { FileText, Wand2, Download, Eye, Settings, PenLine } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300&h=400",
  },
  {
    id: 2,
    name: "Creative Designer",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=300&h=400",
  },
  {
    id: 3,
    name: "Technical Expert",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300&h=400",
  }
];

export function ResumeBuilder() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Resume Builder</h1>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Template Selection */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <PenLine className="w-5 h-5" />
              <span>Choose Template</span>
            </h2>
            <div className="grid gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer"
                >
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{template.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Wand2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Suggestions</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills Optimization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Based on your experience, consider adding: "React Native", "TypeScript", "CI/CD"
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Experience Enhancement</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Add metrics to your achievements. Example: "Improved application performance by 40%"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">ATS Optimization</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">ATS Score</span>
                  <span className="text-sm font-bold text-green-700 dark:text-green-300">92%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your resume is well-optimized for ATS systems. Key industry terms are properly placed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}