
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Lightbulb, 
  Filter, 
  Search,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Star,
  Bot,
  User,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Solutions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filterOptions = [
    { id: 'all', name: 'All Solutions', icon: Lightbulb },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'approved', name: 'Approved', icon: CheckCircle },
    { id: 'recent', name: 'Recent', icon: Clock }
  ];

  const typeOptions = [
    { id: 'all', name: 'All Types' },
    { id: 'ai', name: 'AI Generated' },
    { id: 'community', name: 'Community' },
    { id: 'expert', name: 'Expert' }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Smart Urban Flood Management System',
      description: 'An AI-powered system that predicts and manages urban flooding using IoT sensors, weather data, and machine learning algorithms to optimize drainage and alert systems.',
      problemTitle: 'Urban Flooding in Metropolitan Areas',
      type: 'AI Generated',
      author: 'AI Assistant',
      votes: 156,
      status: 'Approved',
      category: 'Environment',
      date: '2024-01-20',
      implementation: 'In Progress',
      rating: 4.8,
      tags: ['AI', 'IoT', 'Urban Planning', 'Flood Management'],
      image: 'Smart city flood management system with sensors and AI monitoring'
    },
    {
      id: 2,
      title: 'Community-Based Mental Health Network',
      description: 'A peer-to-peer support platform that connects individuals with trained community volunteers for mental health support and crisis intervention.',
      problemTitle: 'Mental Health Crisis in Rural Communities',
      type: 'Community',
      author: 'Dr. Maria Santos',
      votes: 134,
      status: 'Under Review',
      category: 'Healthcare',
      date: '2024-01-19',
      implementation: 'Planning',
      rating: 4.6,
      tags: ['Mental Health', 'Community', 'Peer Support', 'Crisis Intervention'],
      image: 'Community mental health support network with people helping each other'
    },
    {
      id: 3,
      title: 'Blockchain-Based Supply Chain Transparency',
      description: 'A decentralized platform that tracks products from origin to consumer, ensuring ethical sourcing and reducing environmental impact.',
      problemTitle: 'Supply Chain Transparency Issues',
      type: 'Expert',
      author: 'Prof. James Chen',
      votes: 98,
      status: 'Approved',
      category: 'Technology',
      date: '2024-01-18',
      implementation: 'Completed',
      rating: 4.9,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Sustainability'],
      image: 'Blockchain supply chain tracking system showing product journey'
    },
    {
      id: 4,
      title: 'Vertical Farming Education Initiative',
      description: 'Educational programs that teach urban communities how to implement vertical farming systems for local food production and sustainability.',
      problemTitle: 'Food Security in Urban Areas',
      type: 'Community',
      author: 'Green City Collective',
      votes: 87,
      status: 'In Development',
      category: 'Environment',
      date: '2024-01-17',
      implementation: 'Pilot Phase',
      rating: 4.4,
      tags: ['Vertical Farming', 'Education', 'Food Security', 'Sustainability'],
      image: 'Urban vertical farming facility with educational programs'
    },
    {
      id: 5,
      title: 'AI-Powered Personalized Learning Platform',
      description: 'An adaptive learning system that personalizes education content based on individual learning styles, pace, and cultural background.',
      problemTitle: 'Educational Inequality in Remote Areas',
      type: 'AI Generated',
      author: 'AI Assistant',
      votes: 76,
      status: 'Awaiting Validation',
      category: 'Education',
      date: '2024-01-16',
      implementation: 'Development',
      rating: 4.5,
      tags: ['AI', 'Personalized Learning', 'Education', 'Accessibility'],
      image: 'AI-powered personalized learning interface adapting to student needs'
    },
    {
      id: 6,
      title: 'Renewable Energy Microgrids for Rural Communities',
      description: 'Decentralized renewable energy systems that provide reliable power to remote communities while building local technical capacity.',
      problemTitle: 'Energy Access in Remote Communities',
      type: 'Expert',
      author: 'Dr. Sarah Williams',
      votes: 65,
      status: 'Approved',
      category: 'Environment',
      date: '2024-01-15',
      implementation: 'Scaling',
      rating: 4.7,
      tags: ['Renewable Energy', 'Microgrids', 'Rural Development', 'Sustainability'],
      image: 'Rural community with renewable energy microgrid and solar panels'
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.problemTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || 
                       (selectedType === 'ai' && solution.type === 'AI Generated') ||
                       (selectedType === 'community' && solution.type === 'Community') ||
                       (selectedType === 'expert' && solution.type === 'Expert');

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'approved' && solution.status === 'Approved') ||
                         (selectedFilter === 'trending' && solution.votes > 100) ||
                         (selectedFilter === 'recent' && new Date(solution.date) > new Date('2024-01-18'));

    return matchesSearch && matchesType && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'status-completed';
      case 'Under Review': return 'status-review';
      case 'In Development': return 'status-solution';
      case 'Awaiting Validation': return 'status-submitted';
      default: return 'status-submitted';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'AI Generated': return Bot;
      case 'Community': return Users;
      case 'Expert': return Award;
      default: return User;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'AI Generated': return 'text-blue-400';
      case 'Community': return 'text-green-400';
      case 'Expert': return 'text-purple-400';
      default: return 'text-white';
    }
  };

  const handleSolutionClick = (solutionId) => {
    toast({
      title: "💡 Solution Details",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleVote = (solutionId) => {
    toast({
      title: "🗳️ Vote",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleImplement = (solutionId) => {
    toast({
      title: "🚀 Implement Solution",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Solutions - ProbY Platform</title>
        <meta name="description" content="Explore innovative solutions to global problems, from AI-generated ideas to community-driven initiatives and expert recommendations." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Solution Hub</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover innovative solutions to global challenges, powered by AI, community wisdom, and expert knowledge.
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
                placeholder="Search solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field w-full pl-10"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="input-field lg:w-48"
            >
              {typeOptions.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {filterOptions.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.name}</span>
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
          Found {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl card-hover cursor-pointer"
              onClick={() => handleSolutionClick(solution.id)}
            >
              {/* Solution Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <img  
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`status-badge ${getStatusColor(solution.status)}`}>
                    {solution.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    {React.createElement(getTypeIcon(solution.type), {
                      className: `h-4 w-4 ${getTypeColor(solution.type)}`
                    })}
                    <span className={`text-xs font-medium ${getTypeColor(solution.type)}`}>
                      {solution.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{solution.rating}</span>
                </div>
              </div>

              {/* Title and Problem */}
              <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
              <p className="text-purple-300 text-sm mb-3">
                Solving: {solution.problemTitle}
              </p>

              {/* Description */}
              <p className="text-white/70 mb-4 line-clamp-3">{solution.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {solution.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {solution.tags.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                    +{solution.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Meta Information */}
              <div className="flex items-center justify-between mb-4 text-sm text-white/60">
                <div className="flex items-center space-x-4">
                  <span>by {solution.author}</span>
                  <span>{new Date(solution.date).toLocaleDateString()}</span>
                </div>
                <span className="text-green-400">{solution.implementation}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(solution.id);
                    }}
                    className="flex items-center space-x-1 text-white/60 hover:text-green-400 transition-colors"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{solution.votes}</span>
                  </button>
                  <div className="flex items-center space-x-1 text-white/60">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">12 implementing</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImplement(solution.id);
                    }}
                    className="btn-secondary text-sm"
                  >
                    Implement
                  </Button>
                  <Button className="btn-primary text-sm">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredSolutions.length > 0 && (
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
              Load More Solutions
            </Button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Solutions;
