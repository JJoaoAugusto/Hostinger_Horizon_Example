
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const AdminStats = ({ stats }) => {
  const statCards = [
    { 
      label: 'Total Users', 
      value: stats.totalUsers.toLocaleString(), 
      icon: Users, 
      color: 'from-blue-500 to-purple-500', 
      change: '+12%' 
    },
    { 
      label: 'Active Users', 
      value: stats.activeUsers.toLocaleString(), 
      icon: TrendingUp, 
      color: 'from-green-500 to-teal-500', 
      change: '+8%' 
    },
    { 
      label: 'Total Problems', 
      value: stats.totalProblems.toLocaleString(), 
      icon: AlertTriangle, 
      color: 'from-orange-500 to-red-500', 
      change: '+15%' 
    },
    { 
      label: 'Pending Review', 
      value: stats.pendingReview, 
      icon: Clock, 
      color: 'from-yellow-500 to-orange-500', 
      change: '-5%' 
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
          <p className="text-white/70 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AdminStats;
