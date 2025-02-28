import React from 'react';
import { Laptop, Search, Filter, Star, Clock, DollarSign, Briefcase, Award, BarChart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Website Development",
    client: "Fashion Boutique",
    duration: "2 weeks",
    budget: "$2000",
    skills: ["React", "Node.js", "Stripe"],
    difficulty: "Intermediate",
    status: "Open",
    applicants: 12,
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=74&h=74"
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    client: "Health Tech Startup",
    duration: "1 week",
    budget: "$1500",
    skills: ["Figma", "UI/UX", "Mobile Design"],
    difficulty: "Beginner",
    status: "Open",
    applicants: 8,
    logo: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=74&h=74"
  },
];

const stats = [
  { label: "Completed Projects", value: "24", icon: Award },
  { label: "Success Rate", value: "96%", icon: BarChart },
  { label: "Total Earned", value: "$12,450", icon: DollarSign },
];

export function FreelancerHub() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Freelancer Hub</h1>
            <p className="text-emerald-200">Find exciting projects and build your portfolio</p>
          </div>
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center space-x-2">
            <Laptop className="w-5 h-5" />
            <span>Post a Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-emerald-700/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-emerald-600/30 rounded-lg">
                  <stat.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <span className="text-sm font-medium text-emerald-200">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects by title, skills, or client..."
              className="w-full pl-10 pr-4 py-2 bg-emerald-700/30 border border-emerald-600/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-4 py-2 bg-emerald-700/30 text-emerald-100 rounded-lg hover:bg-emerald-700/50 flex items-center justify-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Project Listings */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <img
                src={project.logo}
                alt={project.client}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{project.client}</p>
                
                <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{project.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.applicants} applicants</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}