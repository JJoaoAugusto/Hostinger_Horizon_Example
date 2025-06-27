
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Globe,
  Leaf,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'text-blue-400' },
    { id: 'environment', name: 'Environment', icon: Leaf, color: 'text-green-400' },
    { id: 'social', name: 'Social Issues', icon: Users, color: 'text-purple-400' },
    { id: 'technology', name: 'Technology', icon: Zap, color: 'text-yellow-400' }
  ];

  const problems = [
    {
      id: 1,
      title: 'Climate Change Impact on Coastal Cities',
      description: 'Rising sea levels are threatening major coastal cities worldwide, affecting millions of people and critical infrastructure.',
      category: 'environment',
      location: 'Global',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      status: 'Under Review',
      views: 1247,
      likes: 89,
      comments: 23,
      image: 'Coastal city with rising water levels and climate change effects'
    },
    {
      id: 2,
      title: 'Digital Divide in Rural Education',
      description: 'Students in rural areas lack access to high-speed internet and digital learning resources, creating educational inequality.',
      category: 'social',
      location: 'Rural Areas',
      author: 'Maria Rodriguez',
      date: '2024-01-14',
      status: 'Solution Generated',
      views: 892,
      likes: 67,
      comments: 15,
      image: 'Rural school children using outdated technology for learning'
    },
    {
      id: 3,
      title: 'AI Bias in Healthcare Algorithms',
      description: 'Machine learning models used in healthcare show systematic bias against certain demographic groups.',
      category: 'technology',
      location: 'United States',
      author: 'Dr. James Wilson',
      date: '2024-01-13',
      status: 'Awaiting Validation',
      views: 654,
      likes: 45,
      comments: 12,
      image: 'Healthcare AI interface showing algorithmic bias in medical diagnosis'
    },
    {
      id: 4,
      title: 'Urban Food Deserts',
      description: 'Many urban neighborhoods lack access to fresh, affordable, and nutritious food options.',
      category: 'social',
      location: 'Urban Areas',
      author: 'Lisa Thompson',
      date: '2024-01-12',
      status: 'Completed',
      views: 1156,
      likes: 98,
      comments: 34,
      image: 'Urban neighborhood with limited access to fresh food stores'
    }
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || problem.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'status-review';
      case 'Solution Generated': return 'status-solution';
      case 'Awaiting Validation': return 'status-submitted';
      case 'Completed': return 'status-completed';
      default: return 'status-submitted';
    }
  };

  const handleProblemClick = (problemId) => {
    toast({
      title: "🔍 Problem Details",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleLike = (problemId) => {
    toast({
      title: "❤️ Liked",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleComment = (problemId) => {
    toast({
      title: "💬 Comments",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Explore Problems - ProbY Platform</title>
        <meta name="description" content="Discover and explore global problems submitted by the ProbY community. Find issues you care about and contribute solutions." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Explore Global Problems</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover challenges from around the world and contribute your expertise to create meaningful solutions.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field lg:w-48"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <input
              type="text"
              placeholder="Filter by location..."
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="input-field lg:w-48"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <category.icon className={`h-4 w-4 ${category.color}`} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/70"
        >
          Found {filteredProblems.length} problem{filteredProblems.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProblems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl card-hover cursor-pointer"
              onClick={() => handleProblemClick(problem.id)}
            >
              {/* Problem Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <img  
                  alt={problem.title}
                  className="w-full h-48 object-cover"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`status-badge ${getStatusColor(problem.status)}`}>
                  {problem.status}
                </span>
                <div className="flex items-center space-x-1 text-white/50 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(problem.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-white/70 mb-4 line-clamp-3">{problem.description}</p>

              {/* Meta Information */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{problem.location}</span>
                  </div>
                  <span>by {problem.author}</span>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4 text-white/60">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{problem.views}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(problem.id);
                    }}
                    className="flex items-center space-x-1 hover:text-red-400 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{problem.likes}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleComment(problem.id);
                    }}
                    className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{problem.comments}</span>
                  </button>
                </div>
                
                <Button className="btn-secondary text-sm">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredProblems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button 
              className="btn-secondary"
              onClick={() => toast({
                title: "📄 Load More",
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
              })}
            >
              Load More Problems
            </Button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Explore;
