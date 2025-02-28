import React, { useState } from 'react';
import { Video, Play, Book, CheckCircle } from 'lucide-react';

const interviewTypes = [
  {
    title: 'Technical Interview',
    description: 'Practice coding problems and system design questions',
    topics: ['Data Structures', 'Algorithms', 'System Design', 'Problem Solving'],
    icon: Code
  },
  {
    title: 'Behavioral Interview',
    description: 'Master common behavioral and situational questions',
    topics: ['Leadership', 'Teamwork', 'Problem Resolution', 'Time Management'],
    icon: Users
  },
  {
    title: 'HR Interview',
    description: 'Prepare for HR screening and cultural fit questions',
    topics: ['Company Knowledge', 'Career Goals', 'Salary Discussion', 'Work Culture'],
    icon: Building
  }
];

export default function MockInterviews() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">AI Mock Interviews</h1>
        <p className="text-gray-400">
          Practice interviews with our AI-powered system. Get instant feedback and improve your interview skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {interviewTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setSelectedType(index)}
            className={`p-6 rounded-lg border ${
              selectedType === index
                ? 'border-purple-500 bg-[#1A1B26]'
                : 'border-[#1F2937] hover:border-purple-500 hover:bg-[#1A1B26]'
            } transition-all text-left`}
          >
            <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
              <type.icon className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
            <p className="text-gray-400 mb-4">{type.description}</p>
            <div className="space-y-2">
              {type.topics.map((topic, i) => (
                <div key={i} className="flex items-center text-gray-400">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-500" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-[#12131E] border border-[#1F2937] rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-purple-500/10">
            <Video className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">How it works</h3>
            <p className="text-gray-400">Three simple steps to start practicing</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Book className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">1. Choose your focus</h4>
              <p className="text-gray-400">Select the type of interview you want to practice</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Play className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">2. Start the session</h4>
              <p className="text-gray-400">Begin your AI-powered interview session</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-purple-500/10">
              <CheckCircle className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">3. Get feedback</h4>
              <p className="text-gray-400">Receive detailed feedback and improvement suggestions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          disabled={selectedType === null}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
        >
          Start Interview Practice
        </button>
      </div>
    </div>
  );
}