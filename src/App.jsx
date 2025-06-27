import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster.jsx';
import Layout from '@/components/Layout.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Login from '@/pages/Login.jsx';
import Signup from '@/pages/Signup.jsx';
import ProblemSubmission from '@/pages/ProblemSubmission.jsx';
import ProblemDetails from '@/pages/ProblemDetails.jsx';
import Solutions from '@/pages/Solutions.jsx';
import Profile from '@/pages/Profile.jsx';
import Admin from '@/pages/Admin.jsx';
import Explore from '@/pages/Explore.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>ProbY - Global Problems Smart Platform</title>
        <meta name="description" content="An intelligent crowdsourcing platform for collecting, organizing, and solving global problems through AI and community collaboration." />
      </Helmet>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="explore" element={<Explore />} />
              <Route path="submit" element={<ProblemSubmission />} />
              <Route path="problem/:id" element={<ProblemDetails />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="profile" element={<Profile />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;