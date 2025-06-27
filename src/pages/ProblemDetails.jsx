
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Flag,
  Lightbulb,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const ProblemDetails = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [showSolutions, setShowSolutions] = useState(true);

  // Mock problem data - in real app, this would be fetched based on ID
  const problem = {
    id: 1,
    title: 'Climate Change Impact on Coastal Cities',
    description: `Rising sea levels are threatening major coastal cities worldwide, affecting millions of people and critical infrastructure. This problem encompasses multiple interconnected challenges:

1. **Infrastructure Vulnerability**: Roads, buildings, and utilities in coastal areas are increasingly at risk of flooding and storm damage.

2. **Population Displacement**: Communities are being forced to relocate as their homes become uninhabitable due to regular flooding.

3. **Economic Impact**: Businesses and industries in coastal regions face significant losses due to climate-related disruptions.

4. **Environmental Degradation**: Coastal ecosystems are being destroyed, affecting biodiversity and natural flood protection.

The urgency of this problem cannot be overstated. According to recent studies, over 630 million people live in areas at risk of sea-level rise, and this number is expected to grow significantly in the coming decades.`,
    category: 'Environment',
    location: 'Global',
    author: 'Dr. Sarah Chen',
    authorRole: 'Climate Scientist',
    date: '2024-01-15',
    status: 'Solution Generated',
    views: 1247,
    likes: 89,
    comments: 23,
    urgency: 'critical',
    tags: ['climate-change', 'coastal-cities', 'sea-level-rise', 'infrastructure'],
    visibility: 'public',
    image: 'Coastal city with rising water levels and climate change effects'
  };

  const solutions = [
    {
      id: 1,
      title: 'Floating City Infrastructure',
      description: 'Develop modular floating platforms that can adapt to rising sea levels while maintaining urban functionality.',
      type: 'AI Generated',
      votes: 45,
      status: 'Under Review',
      author: 'AI Assistant',
      date: '2024-01-16'
    },
    {
      id: 2,
      title: 'Smart Flood Barrier System',
      description: 'Implement AI-controlled flood barriers that can predict and respond to tidal changes and storm surges.',
      type: 'Community',
      votes: 32,
      status: 'In Development',
      author: 'Maria Rodriguez',
      date: '2024-01-17'
    },
    {
      id: 3,
      title: 'Coastal Ecosystem Restoration',
      description: 'Restore mangroves and coral reefs to provide natural flood protection while supporting biodiversity.',
      type: 'Expert',
      votes: 28,
      status: 'Approved',
      author: 'Dr. James Wilson',
      date: '2024-01-18'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'status-review';
      case 'Solution Generated': return 'status-solution';
      case 'In Development': return 'status-submitted';
      case 'Approved': return 'status-completed';
      default: return 'status-submitted';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "💔 Unliked" : "❤️ Liked",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleShare = () => {
    toast({
      title: "🔗 Share",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleReport = () => {
    toast({
      title: "🚩 Report",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleWantToHelp = () => {
    toast({
      title: "🤝 Want to Help",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSolutionVote = (solutionId) => {
    toast({
      title: "🗳️ Vote",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>{problem.title} - ProbY Platform</title>
        <meta name="description" content={problem.description.substring(0, 160) + '...'} />
      </Helmet>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/explore">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Explore
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect p-8 rounded-xl"
            >
              {/* Status and Urgency */}
              <div className="flex items-center justify-between mb-4">
                <span className={`status-badge ${getStatusColor(problem.status)}`}>
                  {problem.status}
                </span>
                <span className={`text-sm font-medium ${getUrgencyColor(problem.urgency)}`}>
                  {problem.urgency.charAt(0).toUpperCase() + problem.urgency.slice(1)} Priority
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white mb-4">{problem.title}</h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{problem.author}</span>
                  <span className="text-white/40">•</span>
                  <span>{problem.authorRole}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(problem.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{problem.location}</span>
                </div>
              </div>

              {/* Problem Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img  
                  alt={problem.title}
                  className="w-full h-64 object-cover"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>

              {/* Description */}
              <div className="prose prose-invert max-w-none">
                <div className="text-white/80 leading-relaxed whitespace-pre-line">
                  {problem.description}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {problem.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center space-x-6 text-white/60">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-5 w-5" />
                    <span>{problem.views}</span>
                  </div>
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-1 transition-colors ${
                      isLiked ? 'text-red-400' : 'hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{problem.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-5 w-5" />
                    <span>{problem.comments}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    onClick={handleShare}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleReport}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                  >
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Solutions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Lightbulb className="h-6 w-6 mr-2 text-yellow-400" />
                  Proposed Solutions ({solutions.length})
                </h2>
                <Button
                  onClick={() => setShowSolutions(!showSolutions)}
                  className="btn-secondary"
                >
                  {showSolutions ? 'Hide' : 'Show'} Solutions
                </Button>
              </div>

              {showSolutions && (
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                            <span className={`status-badge ${getStatusColor(solution.status)}`}>
                              {solution.status}
                            </span>
                          </div>
                          <p className="text-white/70 mb-3">{solution.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{solution.author}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{new Date(solution.date).toLocaleDateString()}</span>
                            </span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              solution.type === 'AI Generated' ? 'bg-blue-600/30 text-blue-300' :
                              solution.type === 'Community' ? 'bg-green-600/30 text-green-300' :
                              'bg-purple-600/30 text-purple-300'
                            }`}>
                              {solution.type}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2 ml-4">
                          <button
                            onClick={() => handleSolutionVote(solution.id)}
                            className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span className="text-sm font-medium text-white">{solution.votes}</span>
                          </button>
                          <Button className="btn-secondary text-sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Take Action</h3>
              <div className="space-y-3">
                <Button
                  onClick={handleWantToHelp}
                  className="w-full btn-primary"
                >
                  <Users className="h-5 w-5 mr-2" />
                  I Want to Help
                </Button>
                <Button
                  onClick={() => toast({
                    title: "💡 Propose Solution",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="w-full btn-secondary"
                >
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Propose Solution
                </Button>
                <Button
                  onClick={() => toast({
                    title: "🔄 Report Duplicate",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="w-full btn-secondary"
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Report Duplicate
                </Button>
              </div>
            </motion.div>

            {/* Problem Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Problem Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Total Views</span>
                  <span className="font-semibold text-white">{problem.views}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Community Likes</span>
                  <span className="font-semibold text-white">{problem.likes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Solutions Proposed</span>
                  <span className="font-semibold text-white">{solutions.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">People Helping</span>
                  <span className="font-semibold text-white">12</span>
                </div>
              </div>
            </motion.div>

            {/* Related Problems */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">Related Problems</h3>
              <div className="space-y-3">
                {[
                  'Urban Heat Island Effect',
                  'Coastal Erosion Management',
                  'Sustainable City Planning'
                ].map((title, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <h4 className="font-medium text-white text-sm">{title}</h4>
                    <p className="text-white/60 text-xs mt-1">Similar environmental challenge</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemDetails;
