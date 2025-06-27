
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, AlertTriangle, CheckCircle, Settings } from 'lucide-react';

const AdminTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'problems', name: 'Problems', icon: AlertTriangle },
    { id: 'solutions', name: 'Solutions', icon: CheckCircle },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex space-x-1 bg-white/10 p-1 rounded-lg overflow-x-auto"
    >
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
            activeTab === tab.id
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <tab.icon className="h-4 w-4" />
          <span>{tab.name}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default AdminTabs;
