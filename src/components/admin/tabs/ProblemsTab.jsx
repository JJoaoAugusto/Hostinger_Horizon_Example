
import React from 'react';
import { Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProblemsTab = () => {
  const pendingProblems = [
    {
      id: 1,
      title: 'Climate Change Impact on Coastal Cities',
      author: 'Dr. Sarah Chen',
      category: 'Environment',
      submittedDate: '2024-01-20',
      status: 'Under Review',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Digital Divide in Rural Education',
      author: 'Maria Rodriguez',
      category: 'Education',
      submittedDate: '2024-01-19',
      status: 'Pending Approval',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'AI Bias in Healthcare Algorithms',
      author: 'Dr. James Wilson',
      category: 'Technology',
      submittedDate: '2024-01-18',
      status: 'Needs Revision',
      priority: 'High'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-white/60';
    }
  };

  const handleProblemAction = (action, problemId) => {
    toast({
      title: `📋 ${action}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-white">Problem Management</h2>
        <div className="flex space-x-3 mt-4 lg:mt-0">
          <Button className="btn-secondary">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="btn-primary">
            Bulk Actions
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {pendingProblems.map(problem => (
          <div key={problem.id} className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(problem.priority)}`}>
                    {problem.priority} Priority
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-3">
                  <span>by {problem.author}</span>
                  <span>{problem.category}</span>
                  <span>{new Date(problem.submittedDate).toLocaleDateString()}</span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  problem.status === 'Under Review' ? 'bg-blue-600/30 text-blue-300' :
                  problem.status === 'Pending Approval' ? 'bg-yellow-600/30 text-yellow-300' :
                  'bg-orange-600/30 text-orange-300'
                }`}>
                  {problem.status}
                </span>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button
                  size="sm"
                  onClick={() => handleProblemAction('Approve', problem.id)}
                  className="btn-primary text-sm"
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleProblemAction('Reject', problem.id)}
                  className="btn-secondary text-sm"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleProblemAction('View', problem.id)}
                  className="text-white hover:bg-white/10"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsTab;
