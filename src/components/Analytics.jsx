import React from 'react';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Analytics = () => {
  // Sample data for charts
  const userActivityData = {
    dates: Array.from({length: 7}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return format(date, 'MMM dd');
    }).reverse(),
    values: [120, 132, 101, 134, 90, 230, 210],
  };

  const serviceUsageData = {
    services: ['Education', 'Land Services', 'Community Events', 'Health Services', 'Business Permits'],
    values: [300, 250, 200, 150, 100],
  };

  const userActivityOption = {
    title: {
      text: 'Daily User Activity',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: userActivityData.dates
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: userActivityData.values,
      type: 'line',
      smooth: true
    }]
  };

  const serviceUsageOption = {
    title: {
      text: 'Service Usage Distribution',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      name: 'Service Usage',
      type: 'pie',
      radius: '50%',
      data: serviceUsageData.services.map((service, index) => ({
        value: serviceUsageData.values[index],
        name: service
      })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  const metrics = [
    { title: 'Total Users', value: '1,234', change: '+12%' },
    { title: 'Active Services', value: '15', change: '+3' },
    { title: 'Monthly Transactions', value: '2,345', change: '+15%' },
    { title: 'User Satisfaction', value: '4.8/5', change: '+0.2' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Community Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">{metric.title}</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span className={`ml-2 text-sm ${
                metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <ReactECharts option={userActivityOption} style={{ height: '400px' }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <ReactECharts option={serviceUsageOption} style={{ height: '400px' }} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;