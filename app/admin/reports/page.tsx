"use client"

import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  DollarSign,
  ShoppingCart,
  Users,
  Star,
  Calendar,
  FileText
} from 'lucide-react';


const EcommerceAnalyticsReport = () => {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [exportFormat, setExportFormat] = useState('pdf');

  // Mock data - replace with actual API data
  const kpiData = {
    totalRevenue: { value: 245680, change: 12.5, period: 'vs last month' },
    totalOrders: { value: 1847, change: -3.2, period: 'vs last month' },
    averageOrderValue: { value: 133.12, change: 8.7, period: 'vs last month' },
    conversionRate: { value: 3.4, change: 0.8, period: 'vs last month' },
    newCustomers: { value: 892, change: 15.3, period: 'vs last month' },
    returningCustomers: { value: 1456, change: 5.2, period: 'vs last month' }
  };

  const topProducts = [
    { name: 'Wireless Bluetooth Headphones', sales: 245, revenue: 36750, growth: 18.5 },
    { name: 'Smart Watch Series 5', sales: 189, revenue: 47250, growth: -2.3 },
    { name: 'USB-C Charging Cable', sales: 456, revenue: 6840, growth: 34.2 },
    { name: 'Portable Speaker', sales: 123, revenue: 9225, growth: 12.1 },
    { name: 'Phone Case Premium', sales: 334, revenue: 10020, growth: 8.7 }
  ];

  const salesByChannel = [
    { channel: 'Website', sales: 156780, percentage: 63.8, change: 8.2 },
    { channel: 'Mobile App', sales: 67890, percentage: 27.6, change: 15.3 },
    { channel: 'Social Media', sales: 21010, percentage: 8.6, change: 22.4 }
  ];

  const customerSegments = [
    { segment: 'New Customers', count: 892, revenue: 67340, avgOrder: 75.49 },
    { segment: 'Returning Customers', count: 1456, revenue: 178340, avgOrder: 122.48 },
    { segment: 'VIP Customers', count: 67, revenue: 89456, avgOrder: 1335.01 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GHC'
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatPercentage = (num: number) => {
    return `${num > 0 ? '+' : ''}${num.toFixed(1)}%`;
  };

  const KPICard = ({ title, value, change, period, icon: Icon, format = 'number' }) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {format === 'currency' ? formatCurrency(value) : 
                   format === 'percentage' ? `${value}%` : formatNumber(value)}
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                  change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {change >= 0 ? (
                    <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                  ) : (
                    <TrendingDown className="self-center flex-shrink-0 h-4 w-4" />
                  )}
                  <span className="sr-only">{change >= 0 ? 'Increased' : 'Decreased'} by</span>
                  {formatPercentage(Math.abs(change))}
                </div>
              </dd>
              <dd className="text-xs text-gray-500 mt-1">{period}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <BarChart3 className="mr-4 h-8 w-8 text-indigo-600" />
                <div>
                  <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Analytics Dashboard
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Comprehensive ecommerce performance report
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <option value="last-7-days">Last 7 days</option>
                <option value="last-30-days">Last 30 days</option>
                <option value="last-90-days">Last 90 days</option>
                <option value="last-year">Last year</option>
              </select>
              <button className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <FileText className="mr-2 h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Overview */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <KPICard
              title="Total Revenue"
              value={kpiData.totalRevenue.value}
              change={kpiData.totalRevenue.change}
              period={kpiData.totalRevenue.period}
              icon={DollarSign}
              format="currency"
            />
            <KPICard
              title="Total Orders"
              value={kpiData.totalOrders.value}
              change={kpiData.totalOrders.change}
              period={kpiData.totalOrders.period}
              icon={ShoppingCart}
            />
            <KPICard
              title="Average Order Value"
              value={kpiData.averageOrderValue.value}
              change={kpiData.averageOrderValue.change}
              period={kpiData.averageOrderValue.period}
              icon={DollarSign}
              format="currency"
            />
            <KPICard
              title="Conversion Rate"
              value={kpiData.conversionRate.value}
              change={kpiData.conversionRate.change}
              period={kpiData.conversionRate.period}
              icon={BarChart3}
              format="percentage"
            />
            <KPICard
              title="New Customers"
              value={kpiData.newCustomers.value}
              change={kpiData.newCustomers.change}
              period={kpiData.newCustomers.period}
              icon={Users}
            />
            <KPICard
              title="Returning Customers"
              value={kpiData.returningCustomers.value}
              change={kpiData.returningCustomers.change}
              period={kpiData.returningCustomers.period}
              icon={Users}
            />
          </div>
        </div>

        {/* Sales by Channel */}
        <div className="mb-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Sales by Channel</h3>
              <p className="mt-1 text-sm text-gray-500">Revenue breakdown across different sales channels</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  {salesByChannel.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{channel.channel}</span>
                          <span className="text-sm text-gray-500">{formatCurrency(channel.sales)}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${channel.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">{channel.percentage}% of total</span>
                          <span className={`text-xs font-medium ${
                            channel.change >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {formatPercentage(channel.change)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Products */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Top Performing Products</h3>
              <p className="mt-1 text-sm text-gray-500">Best selling products by revenue</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                          <span>{formatNumber(product.sales)} units sold</span>
                          <span className={`font-medium ${
                            product.growth >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {formatPercentage(product.growth)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {formatCurrency(product.revenue)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Customer Segments</h3>
              <p className="mt-1 text-sm text-gray-500">Performance by customer category</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  {customerSegments.map((segment, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{segment.segment}</h4>
                        <span className="text-sm font-medium text-indigo-600">
                          {formatNumber(segment.count)} customers
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Total Revenue</span>
                          <div className="font-medium text-gray-900">
                            {formatCurrency(segment.revenue)}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Avg Order Value</span>
                          <div className="font-medium text-gray-900">
                            {formatCurrency(segment.avgOrder)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Status */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Order Status</h3>
              <p className="mt-1 text-sm text-gray-500">Current order fulfillment</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending</span>
                  <span className="text-sm font-medium text-yellow-600">234 orders</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Processing</span>
                  <span className="text-sm font-medium text-blue-600">567 orders</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Shipped</span>
                  <span className="text-sm font-medium text-indigo-600">1,234 orders</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Delivered</span>
                  <span className="text-sm font-medium text-green-600">2,891 orders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Performance */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Top Markets</h3>
              <p className="mt-1 text-sm text-gray-500">Revenue by geographic region</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Accra</span>
                  <span className="text-sm font-medium text-gray-900">Ghc89,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Kumasi</span>
                  <span className="text-sm font-medium text-gray-900">Ghc67,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tamale</span>
                  <span className="text-sm font-medium text-gray-900">Ghc54,890</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bimbila</span>
                  <span className="text-sm font-medium text-gray-900">Ghc43,210</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Customer Satisfaction</h3>
              <p className="mt-1 text-sm text-gray-500">Reviews and ratings summary</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">4.6</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Reviews</span>
                  <span className="text-sm font-medium text-gray-900">1,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">5 Star Reviews</span>
                  <span className="text-sm font-medium text-green-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="text-sm font-medium text-blue-600">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Footer */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Report Generated</h3>
                <p className="text-sm text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Report
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Share Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceAnalyticsReport;