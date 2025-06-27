
import React from 'react';
import { motion } from 'framer-motion';
import OverviewTab from '@/components/admin/tabs/OverviewTab';
import UsersTab from '@/components/admin/tabs/UsersTab';
import ProblemsTab from '@/components/admin/tabs/ProblemsTab';
import SolutionsTab from '@/components/admin/tabs/SolutionsTab';
import SettingsTab from '@/components/admin/tabs/SettingsTab';

const AdminContent = ({ 
  activeTab, 
  searchTerm, 
  setSearchTerm, 
  selectedFilter, 
  setSelectedFilter, 
  stats 
}) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab stats={stats} />;
      case 'users':
        return (
          <UsersTab 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        );
      case 'problems':
        return <ProblemsTab />;
      case 'solutions':
        return <SolutionsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <OverviewTab stats={stats} />;
    }
  };

  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-effect p-8 rounded-xl"
    >
      {renderTabContent()}
    </motion.div>
  );
};

export default AdminContent;
