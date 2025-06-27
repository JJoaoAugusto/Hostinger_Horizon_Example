
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Compass, 
  Plus, 
  Lightbulb, 
  User, 
  Settings, 
  X,
  BarChart3,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Compass, label: 'Explore Problems', path: '/explore' },
    { icon: Plus, label: 'Submit Problem', path: '/submit' },
    { icon: Lightbulb, label: 'Solutions', path: '/solutions' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: BarChart3, label: 'Admin Panel', path: '/admin' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 h-screen glass-effect border-r border-white/10 p-6"
    >
      <div className="flex items-center justify-between mb-8 lg:hidden">
        <span className="text-xl font-bold gradient-text">Menu</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              onClick={onClose}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-purple-600/50 to-blue-600/50 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect p-4 rounded-lg text-center"
        >
          <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
          <p className="text-sm text-white/70 mb-2">Join our community</p>
          <Button className="w-full btn-primary text-sm">
            Upgrade to PRO
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
