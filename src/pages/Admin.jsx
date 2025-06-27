
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStats from '@/components/admin/AdminStats';
import AdminTabs from '@/components/admin/AdminTabs';
import AdminContent from '@/components/admin/AdminContent';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const stats = {
    totalUsers: 15420,
    activeUsers: 8934,
    totalProblems: 1247,
    pendingReview: 89,
    totalSolutions: 892,
    approvedSolutions: 634,
    avgResponseTime: '2.3 hours',
    satisfactionRate: '94%'
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel - ProbY Platform</title>
        <meta name="description" content="Administrative dashboard for managing users, problems, solutions, and platform settings on ProbY." />
      </Helmet>

      <div className="space-y-8">
        <AdminHeader />
        <AdminStats stats={stats} />
        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <AdminContent 
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          stats={stats}
        />
      </div>
    </>
  );
};

export default Admin;
