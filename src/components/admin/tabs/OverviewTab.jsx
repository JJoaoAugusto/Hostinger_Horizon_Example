
import React from 'react';
import { BarChart3 } from 'lucide-react';

const OverviewTab = ({ stats }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Platform Overview</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Activity Trends</h3>
          <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-white/50 mx-auto mb-2" />
              <p className="text-white/60">Interactive charts would be displayed here</p>
              <p className="text-white/40 text-sm">Chart.js or similar library integration</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
          <div className="space-y-4">
            {[
              { metric: 'Server Uptime', value: '99.9%', status: 'good' },
              { metric: 'Response Time', value: stats.avgResponseTime, status: 'good' },
              { metric: 'User Satisfaction', value: stats.satisfactionRate, status: 'good' },
              { metric: 'Error Rate', value: '0.1%', status: 'good' }
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <span className="text-white/80">{metric.metric}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{metric.value}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    metric.status === 'good' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
