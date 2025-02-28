import React from 'react';
import { GraduationCap, BookOpen, Clock, Star, Users, Play, BarChart } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced React & TypeScript",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1234,
    progress: 65,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 2,
    title: "Full Stack Development with Node.js",
    instructor: "Michael Chen",
    duration: "12 weeks",
    level: "Advanced",
    rating: 4.9,
    students: 2156,
    progress: 30,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 3,
    title: "Cloud Architecture with AWS",
    instructor: "Emily Rodriguez",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 1876,
    progress: 0,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300&h=200",
  }
];

export function UpskillCourses() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Upskilling Courses</h1>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
              My Learning
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Browse All Courses
            </button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100">Active Courses</h3>
            </div>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mt-2">3</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <BarChart className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="text-sm font-medium text-green-900 dark:text-green-100">Avg. Progress</h3>
            </div>
            <p className="text-2xl font-bold text-green-700 dark:text-green-300 mt-2">47%</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">Completed</h3>
            </div>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mt-2">12</p>
          </div>
        </div>
      </div>

      {/* Course Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{course.instructor}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>{course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}