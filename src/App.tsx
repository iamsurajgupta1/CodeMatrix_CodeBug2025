import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import ListJob from './pages/ListJob';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

// Placeholder pages
const Dashboard = () => <div className="text-white">Dashboard Content</div>;
const Jobs = () => <div className="text-white">Jobs Content</div>;
const Gigs = () => <div className="text-white">Side Gigs Content</div>;
const Payments = () => <div className="text-white">Payments Content</div>;
const Courses = () => <div className="text-white">Courses Content</div>;
const ResumeBuilder = () => <div className="text-white">AI Resume Builder Content</div>;
const MockInterviews = () => <div className="text-white">Mock Interviews Content</div>;
const Settings = () => <div className="text-white">Settings Content</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Home />} />
          <Route path="/list-jobs" element={<ListJob />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
         


        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/mock-interviews" element={<MockInterviews />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;