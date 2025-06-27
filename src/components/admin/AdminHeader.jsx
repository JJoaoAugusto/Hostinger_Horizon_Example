
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const AdminHeader = () => {
  const handleExport = () => {
    toast({
      title: "📊 Export Data",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
        <p className="text-white/70 text-lg">Manage platform operations and monitor community activity</p>
      </div>
      <div className="flex space-x-3 mt-4 lg:mt-0">
        <Button onClick={handleExport} className="btn-secondary">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
        <Button className="btn-primary">
          <Shield className="h-4 w-4 mr-2" />
          Security Center
        </Button>
      </div>
    </motion.div>
  );
};

export default AdminHeader;
