import React from 'react';
import { User, Mail, MapPin, Briefcase, Calendar, Link as LinkIcon, Github, Linkedin } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-20 sm:space-x-5">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=128&h=128"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 sm:mt-0 text-center sm:text-left flex-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Bennett</h1>
              <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">alex.bennett@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">GreatStack Technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">Joined January 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:underline">
                  <Github className="w-5 h-5" />
                  <span>github.com/alexbennett</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:underline">
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/alexbennett</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:underline">
                  <LinkIcon className="w-5 h-5" />
                  <span>portfolio.alexbennett.dev</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Progress */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Progress Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Courses Completed</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">12</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Mock Interviews</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">8</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Projects Completed</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">5</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills & Certifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <span className="text-gray-900 dark:text-white">AWS Certified Developer</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                    </div>
                    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg">
                      <span className="text-gray-900 dark:text-white">React Advanced Certification</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}