
import React from 'react';
import { Settings } from 'lucide-react';

const SettingsTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Platform Settings</h2>
      <div className="text-center py-12">
        <Settings className="h-16 w-16 text-white/50 mx-auto mb-4" />
        <p className="text-white/60 text-lg">Platform configuration settings</p>
        <p className="text-white/40">Manage system preferences, integrations, and policies</p>
      </div>
    </div>
  );
};

export default SettingsTab;
