
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Globe,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    myProblems: 12,
    mySolutions: 8,
    totalProblems: 1247,
    activeSolutions: 89,
    communityMembers: 15420,
    solvedProblems: 342
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'problem',
      title: 'Climate Change in Urban Areas',
      status: 'Under Review',
      time: '2 hours ago',
      icon: AlertCircle,
      color: 'text-yellow-400'
    },
    {
      id: 2,
      type: 'solution',
      title: 'AI-Powered Waste Management',
      status: 'Approved',
      time: '1 day ago',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      id: 3,
      type: 'problem',
      title: 'Digital Divide in Rural Communities',
      status: 'Solution Generated',
      time: '3 days ago',
      icon: Lightbulb,
      color: 'text-blue-400'
    }
  ]);

  const statCards = [
    {
      title: 'My Problems',
      value: stats.myProblems,
      icon: AlertCircle,
      color: 'from-orange-500 to-red-500',
      change: '+2 this week'
    },
    {
      title: 'My Solutions',
      value: stats.mySolutions,
      icon: Lightbulb,
      color: 'from-blue-500 to-purple-500',
      change: '+1 this week'
    },
    {
      title: 'Global Problems',
      value: stats.totalProblems,
      icon: Globe,
      color: 'from-green-500 to-teal-500',
      change: '+47 today'
    },
    {
      title: 'Community Members',
      value: stats.communityMembers.toLocaleString(),
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      change: '+156 this week'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - ProbY Platform</title>
        <meta name="description" content="Your personal dashboard for tracking problems, solutions, and community engagement on ProbY." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Welcome Back!</h1>
            <p className="text-white/70 text-lg">Ready to make a difference today?</p>
          </div>
          <Link to="/submit">
            <Button className="btn-primary mt-4 lg:mt-0">
              <Plus className="h-5 w-5 mr-2" />
              Submit New Problem
            </Button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color}`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{card.value}</h3>
              <p className="text-white/70 text-sm mb-2">{card.title}</p>
              <p className="text-green-400 text-xs">{card.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-effect p-6 rounded-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              <Link to="/explore" className="text-purple-400 hover:text-purple-300 text-sm">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg bg-white/10 ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{activity.title}</h3>
                    <p className="text-white/60 text-sm">{activity.status}</p>
                  </div>
                  <div className="text-white/50 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              <Link to="/submit">
                <Button className="w-full btn-primary justify-start">
                  <Plus className="h-5 w-5 mr-3" />
                  Submit Problem
                </Button>
              </Link>
              
              <Link to="/explore">
                <Button className="w-full btn-secondary justify-start">
                  <Globe className="h-5 w-5 mr-3" />
                  Explore Problems
                </Button>
              </Link>
              
              <Link to="/solutions">
                <Button className="w-full btn-secondary justify-start">
                  <Lightbulb className="h-5 w-5 mr-3" />
                  View Solutions
                </Button>
              </Link>
            </div>

            {/* Progress Section */}
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Your Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Problems Solved</span>
                    <span className="text-white">8/10</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">Community Engagement</span>
                    <span className="text-white">6/10</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
