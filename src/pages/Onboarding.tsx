import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';
import { Briefcase, Users } from 'lucide-react';

export default function Onboarding() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole) {
      // In a real app, you'd save this to your backend
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Welcome to StudentWork
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Choose how you want to use the platform
        </p>
        
        <div className="grid gap-4 mb-8">
          <button
            className={`p-6 rounded-lg border ${
              selectedRole === 'candidate'
                ? 'border-purple-500 bg-[#1A1B26]'
                : 'border-[#1F2937] hover:border-purple-500 hover:bg-[#1A1B26]'
            } transition-all`}
            onClick={() => setSelectedRole('candidate')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">I'm a Candidate</h3>
                <p className="text-gray-400">Looking for opportunities</p>
              </div>
            </div>
          </button>

          <button
            className={`p-6 rounded-lg border ${
              selectedRole === 'recruiter'
                ? 'border-purple-500 bg-[#1A1B26]'
                : 'border-[#1F2937] hover:border-purple-500 hover:bg-[#1A1B26]'
            } transition-all`}
            onClick={() => setSelectedRole('recruiter')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Briefcase className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white">I'm a Recruiter</h3>
                <p className="text-gray-400">Looking to hire talent</p>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-600 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}