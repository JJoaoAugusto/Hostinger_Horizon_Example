
import React from 'react';
import { Search, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const UsersTab = ({ searchTerm, setSearchTerm, selectedFilter, setSelectedFilter }) => {
  const recentUsers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@example.com',
      role: 'Expert',
      joinDate: '2024-01-20',
      status: 'Active',
      problems: 12,
      solutions: 8
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria.r@example.com',
      role: 'Community',
      joinDate: '2024-01-19',
      status: 'Active',
      problems: 5,
      solutions: 15
    },
    {
      id: 3,
      name: 'James Wilson',
      email: 'j.wilson@example.com',
      role: 'Expert',
      joinDate: '2024-01-18',
      status: 'Pending',
      problems: 3,
      solutions: 2
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-400';
      case 'Pending': return 'text-yellow-400';
      case 'Suspended': return 'text-red-400';
      default: return 'text-white/60';
    }
  };

  const handleUserAction = (action, userId) => {
    toast({
      title: `👤 ${action}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <div className="flex space-x-3 mt-4 lg:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 w-64"
            />
          </div>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="input-field"
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-white/80 font-medium">User</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Role</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Join Date</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Activity</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map(user => (
              <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-white/60 text-sm">{user.email}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-sm">
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-4 text-white/70">
                  {new Date(user.joinDate).toLocaleDateString()}
                </td>
                <td className="py-4 px-4">
                  <span className={`font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-white/70">
                  {user.problems}P / {user.solutions}S
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleUserAction('View', user.id)}
                      className="text-white hover:bg-white/10"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleUserAction('Edit', user.id)}
                      className="text-white hover:bg-white/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleUserAction('Suspend', user.id)}
                      className="text-red-400 hover:bg-red-400/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTab;
