
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  MapPin, 
  Globe, 
  Lock, 
  Eye,
  Upload,
  X,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProblemSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    visibility: 'public',
    tags: [],
    urgency: 'medium'
  });

  const [currentTag, setCurrentTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [duplicates, setDuplicates] = useState([]);
  const [showDuplicates, setShowDuplicates] = useState(false);

  const categories = [
    'Environment',
    'Social Issues',
    'Technology',
    'Healthcare',
    'Education',
    'Economic',
    'Infrastructure',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', color: 'text-green-400' },
    { value: 'medium', label: 'Medium Priority', color: 'text-yellow-400' },
    { value: 'high', label: 'High Priority', color: 'text-orange-400' },
    { value: 'critical', label: 'Critical', color: 'text-red-400' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Simulate duplicate detection for title
    if (name === 'title' && value.length > 10) {
      const mockDuplicates = [
        {
          id: 1,
          title: 'Climate Change in Urban Areas',
          similarity: 85,
          author: 'Dr. Sarah Chen'
        },
        {
          id: 2,
          title: 'Urban Climate Adaptation Strategies',
          similarity: 72,
          author: 'Maria Rodriguez'
        }
      ];
      
      if (value.toLowerCase().includes('climate') || value.toLowerCase().includes('urban')) {
        setDuplicates(mockDuplicates);
        setShowDuplicates(true);
      } else {
        setDuplicates([]);
        setShowDuplicates(false);
      }
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "❌ Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const existingProblems = JSON.parse(localStorage.getItem('problems') || '[]');
      const newProblem = {
        id: Date.now(),
        ...formData,
        author: 'Current User',
        date: new Date().toISOString(),
        status: 'Submitted',
        views: 0,
        likes: 0,
        comments: 0
      };
      
      existingProblems.push(newProblem);
      localStorage.setItem('problems', JSON.stringify(existingProblems));

      setIsSubmitting(false);
      
      toast({
        title: "✅ Success",
        description: "Your problem has been submitted successfully! Our AI is now analyzing it for potential solutions."
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        location: '',
        visibility: 'public',
        tags: [],
        urgency: 'medium'
      });
      setShowDuplicates(false);
    }, 2000);
  };

  const handleLocationSearch = () => {
    toast({
      title: "📍 Location Search",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleFileUpload = () => {
    toast({
      title: "📎 File Upload",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Submit Problem - ProbY Platform</title>
        <meta name="description" content="Submit a new global problem to the ProbY community and get AI-powered solutions and community collaboration." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Submit a Problem</h1>
          <p className="text-white/70 text-lg">
            Share a challenge you've identified and let our community help find solutions
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect p-8 rounded-xl"
          >
            {/* Problem Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-lg font-semibold text-white mb-3">
                Problem Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter a clear, descriptive title for the problem"
                className="input-field w-full text-lg"
                required
              />
              <p className="text-white/50 text-sm mt-2">
                Be specific and descriptive. Good titles help others understand the problem quickly.
              </p>
            </div>

            {/* Duplicate Detection */}
            {showDuplicates && duplicates.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
              >
                <div className="flex items-center mb-3">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-semibold text-yellow-400">Similar Problems Found</span>
                </div>
                <p className="text-white/70 text-sm mb-3">
                  We found some similar problems. Please review them to avoid duplicates:
                </p>
                <div className="space-y-2">
                  {duplicates.map(duplicate => (
                    <div key={duplicate.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="font-medium text-white">{duplicate.title}</h4>
                        <p className="text-white/60 text-sm">by {duplicate.author}</p>
                      </div>
                      <div className="text-yellow-400 text-sm font-medium">
                        {duplicate.similarity}% similar
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  className="btn-secondary mt-3"
                  onClick={() => setShowDuplicates(false)}
                >
                  Continue with My Problem
                </Button>
              </motion.div>
            )}

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-lg font-semibold text-white mb-3">
                Problem Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of the problem, including its impact, affected populations, and any relevant context..."
                rows={6}
                className="input-field w-full resize-none"
                required
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-white/50 text-sm">
                  Include as much detail as possible to help others understand the problem.
                </p>
                <span className="text-white/50 text-sm">
                  {formData.description.length}/2000
                </span>
              </div>
            </div>

            {/* Category and Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="category" className="block text-lg font-semibold text-white mb-3">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="input-field w-full"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-lg font-semibold text-white mb-3">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="input-field w-full"
                >
                  {urgencyLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label htmlFor="location" className="block text-lg font-semibold text-white mb-3">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location (city, country, or 'Global')"
                  className="input-field w-full pl-10 pr-12"
                />
                <Button
                  type="button"
                  onClick={handleLocationSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-secondary text-sm py-1 px-2"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-3">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center space-x-1 px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Add a tag..."
                  className="input-field flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  className="btn-secondary"
                >
                  Add Tag
                </Button>
              </div>
            </div>

            {/* Visibility */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-3">
                Visibility
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    checked={formData.visibility === 'public'}
                    onChange={handleInputChange}
                    className="text-purple-600"
                  />
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-400" />
                    <span className="text-white">Public</span>
                  </div>
                  <span className="text-white/60 text-sm">
                    Visible to everyone and can receive community solutions
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    checked={formData.visibility === 'private'}
                    onChange={handleInputChange}
                    className="text-purple-600"
                  />
                  <div className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-orange-400" />
                    <span className="text-white">Private</span>
                  </div>
                  <span className="text-white/60 text-sm">
                    Only visible to you and invited collaborators
                  </span>
                </label>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-white mb-3">
                Supporting Documents (Optional)
              </label>
              <div
                onClick={handleFileUpload}
                className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center cursor-pointer hover:border-purple-400 transition-colors"
              >
                <Upload className="h-12 w-12 text-white/50 mx-auto mb-4" />
                <p className="text-white/70 mb-2">
                  Click to upload images, documents, or research papers
                </p>
                <p className="text-white/50 text-sm">
                  Supported formats: PDF, DOC, JPG, PNG (Max 10MB)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary text-lg px-12 py-4"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting Problem...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Submit Problem</span>
                </div>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default ProblemSubmission;
