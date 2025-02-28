import React from 'react';
import { Briefcase, Search, Building2, MapPin, Clock, DollarSign, Star, Filter } from 'lucide-react';

const internships = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Frontend Developer Intern",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$3000/month",
    skills: ["React", "TypeScript", "UI/UX"],
    logo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=74&h=74",
  },
  {
    id: 2,
    company: "DataFlow Systems",
    position: "Backend Developer Intern",
    location: "New York, NY",
    type: "Remote",
    salary: "$2800/month",
    skills: ["Node.js", "Python", "MongoDB"],
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=74&h=74",
  },
  {
    id: 3,
    company: "CloudScale Inc",
    position: "Full Stack Developer Intern",
    location: "Austin, TX",
    type: "Hybrid",
    salary: "$3500/month",
    skills: ["React", "Node.js", "AWS"],
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=74&h=74",
  }
];

export function InternshipPortal() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Internship Portal</h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Saved Internships</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by position, company, or skills..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Internship Listings */}
      <div className="space-y-4">
        {internships.map((internship) => (
          <div key={internship.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <img
                src={internship.logo}
                alt={internship.company}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{internship.position}</h2>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span>{internship.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{internship.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{internship.salary}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}