
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar,
  Edit,
  Settings,
  Award,
  TrendingUp,
  Lightbulb,
  Users,
  Globe,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - in real app, this would come from authentication context
  const [userData, setUserData] = useState({
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@example.com',
    location: 'San Francisco, CA',
    joinDate: '2023-06-15',
    bio: 'Climate scientist passionate about finding innovative solutions to environmental challenges. Experienced in AI applications for climate modeling and urban planning.',
    role: 'Climate Scientist',
    organization: 'Stanford University',
    website: 'https://sarahchen.research.stanford.edu',
    avatar: 'Professional headshot of Dr. Sarah Chen, climate scientist'
  });

  const stats = {
    problemsSubmitted: 12,
    solutionsProposed: 8,
    votesReceived: 234,
    collaborations: 15,
    impactScore: 87,
    reputation: 4.8
  };

  const achievements = [
    {
      id: 1,
      title: 'Problem Solver',
      description: 'Submitted 10+ problems',
      icon: Lightbulb,
      color: 'text-yellow-400',
      earned: true
    },
    {
      id: 2,
      title: 'Community Leader',
      description: 'Helped 50+ people',
      icon: Users,
      color: 'text-blue-400',
      earned: true
    },
    {
      id: 3,
      title: 'Global Impact',
      description: 'Solutions implemented worldwide',
      icon: Globe,
      color: 'text-green-400',
      earned: true
    },
    {
      id: 4,
      title: 'Expert Contributor',
      description: 'Highly rated solutions',
      icon: Star,
      color: 'text-purple-400',
      earned: false
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'problem',
      title: 'Climate Change Impact on Coastal Cities',
      action: 'submitted',
      date: '2024-01-20',
      status: 'Under Review'
    },
    {
      id: 2,
      type: 'solution',
      title: 'AI-Powered Flood Prediction System',
      action: 'proposed',
      date: '2024-01-18',
      status: 'Approved'
    },
    {
      id: 3,
      type: 'collaboration',
      title: 'Urban Heat Island Mitigation',
      action: 'joined',
      date: '2024-01-15',
      status: 'Active'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'activity', name: 'Activity', icon: TrendingUp },
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "✅ Profile Updated",
      description: "Your profile has been successfully updated!"
    });
  };

  const handleEditClick = () => {
    if (isEditing) {
      handleSaveProfile();
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Profile - ProbY Platform</title>
        <meta name="description" content="Manage your ProbY profile, view your contributions, achievements, and track your impact on global problem-solving." />
      </Helmet>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-xl"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img  
                  alt={userData.name}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1695390471072-94f2a52fe07c" />
              </div>
              <button
                onClick={() => toast({
                  title: "📷 Change Avatar",
                  description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                })}
                className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
              >
                <Edit className="h-4 w-4" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-field text-2xl font-bold mb-2"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-white mb-2">{userData.name}</h1>
                  )}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="input-field text-lg"
                    />
                  ) : (
                    <p className="text-purple-300 text-lg">{userData.role}</p>
                  )}
                </div>
                
                <Button
                  onClick={handleEditClick}
                  className="btn-primary mt-4 lg:mt-0"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/70">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(userData.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              {isEditing ? (
                <textarea
                  value={userData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="input-field w-full mt-4 resize-none"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-white/80 mt-4">{userData.bio}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { label: 'Problems', value: stats.problemsSubmitted, icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
            { label: 'Solutions', value: stats.solutionsProposed, icon: CheckCircle, color: 'from-green-500 to-teal-500' },
            { label: 'Votes', value: stats.votesReceived, icon: TrendingUp, color: 'from-blue-500 to-purple-500' },
            { label: 'Collaborations', value: stats.collaborations, icon: Users, color: 'from-purple-500 to-pink-500' },
            { label: 'Impact Score', value: stats.impactScore, icon: Globe, color: 'from-green-500 to-blue-500' },
            { label: 'Reputation', value: stats.reputation, icon: Star, color: 'from-yellow-500 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="glass-effect p-4 rounded-lg text-center"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex space-x-1 bg-white/10 p-1 rounded-lg"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-effect p-8 rounded-xl"
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Profile Overview</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map(activity => (
                      <div key={activity.id} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{activity.title}</h4>
                          <span className="text-xs text-white/60">
                            {new Date(activity.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm">
                          {activity.action} • {activity.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Impact Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Problems Solved</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-white font-medium">9/12</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Community Engagement</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                        <span className="text-white font-medium">87%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Solution Success Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-white font-medium">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Activity History</h2>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          activity.type === 'problem' ? 'bg-orange-600/30 text-orange-300' :
                          activity.type === 'solution' ? 'bg-green-600/30 text-green-300' :
                          'bg-blue-600/30 text-blue-300'
                        }`}>
                          {activity.type === 'problem' ? <Lightbulb className="h-4 w-4" /> :
                           activity.type === 'solution' ? <CheckCircle className="h-4 w-4" /> :
                           <Users className="h-4 w-4" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{activity.title}</h3>
                          <p className="text-white/60 text-sm">
                            {activity.action} on {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'Approved' ? 'bg-green-600/30 text-green-300' :
                        activity.status === 'Under Review' ? 'bg-yellow-600/30 text-yellow-300' :
                        'bg-blue-600/30 text-blue-300'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50'
                        : 'bg-white/5 border-white/20 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        achievement.earned ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{achievement.title}</h3>
                        <p className="text-white/70 text-sm">{achievement.description}</p>
                        {achievement.earned && (
                          <span className="inline-flex items-center space-x-1 text-green-400 text-xs mt-1">
                            <CheckCircle className="h-3 w-3" />
                            <span>Earned</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={userData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="input-field w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={userData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="input-field w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={userData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="input-field w-full"
                  />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    {[
                      'Email notifications for new solutions',
                      'Weekly activity digest',
                      'Community updates and announcements',
                      'Solution implementation updates'
                    ].map((setting, index) => (
                      <label key={index} className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-white/80">{setting}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button className="btn-primary">
                    Save Settings
                  </Button>
                  <Button 
                    className="btn-secondary"
                    onClick={() => toast({
                      title: "🔒 Change Password",
                      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                    })}
                  >
                    Change Password
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
