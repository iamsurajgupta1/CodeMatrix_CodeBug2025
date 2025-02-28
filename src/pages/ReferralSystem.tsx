import React from 'react';
import { Users, Trophy, Gift, Award, ArrowRight, Sparkles } from 'lucide-react';

const referralStats = [
  { label: 'Total Referrals', value: '124', icon: Users },
  { label: 'Successful Placements', value: '45', icon: Trophy },
  { label: 'Rewards Earned', value: '$2,450', icon: Gift },
  { label: 'Current Tier', value: 'Gold', icon: Award },
];

const referralOpportunities = [
  {
    company: 'TechCorp Solutions',
    position: 'Frontend Developer',
    reward: '$500',
    requirements: ['3+ referrals', '90% success rate', 'Gold tier'],
    logo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=74&h=74',
  },
  {
    company: 'DataFlow Systems',
    position: 'Backend Developer',
    reward: '$600',
    requirements: ['5+ referrals', '85% success rate', 'Platinum tier'],
    logo: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=74&h=74',
  },
];

export function ReferralSystem() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Referral Program</h1>
            <p className="text-emerald-200">Help your peers succeed and earn rewards</p>
          </div>
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Claim Rewards</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {referralStats.map((stat) => (
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
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Referral Progress */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Your Referral Journey</h2>
          <div className="relative">
            <div className="absolute top-0 left-6 h-full w-0.5 bg-emerald-200"></div>
            <div className="space-y-6">
              {[
                { title: 'Bronze Tier', completed: true, rewards: ['Access to basic referrals', '$50 per successful referral'] },
                { title: 'Silver Tier', completed: true, rewards: ['Premium job listings', '$100 per successful referral'] },
                { title: 'Gold Tier', completed: true, rewards: ['Priority support', '$200 per successful referral'] },
                { title: 'Platinum Tier', completed: false, rewards: ['Exclusive opportunities', '$500 per successful referral'] },
              ].map((tier, index) => (
                <div key={tier.title} className="flex items-start">
                  <div className={`relative flex items-center justify-center w-12 h-12 rounded-full ${
                    tier.completed ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {tier.completed ? (
                      <Trophy className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">{index + 1}</span>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{tier.title}</h3>
                    <ul className="mt-2 space-y-1">
                      {tier.rewards.map((reward) => (
                        <li key={reward} className="flex items-center text-gray-600 dark:text-gray-300">
                          <ArrowRight className="w-4 h-4 mr-2 text-emerald-500" />
                          {reward}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Opportunities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Featured Opportunities</h2>
          <div className="space-y-4">
            {referralOpportunities.map((opportunity) => (
              <div key={opportunity.company} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={opportunity.logo}
                    alt={opportunity.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{opportunity.position}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{opportunity.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{opportunity.reward}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">per referral</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.requirements.map((req) => (
                      <span
                        key={req}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Refer Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}