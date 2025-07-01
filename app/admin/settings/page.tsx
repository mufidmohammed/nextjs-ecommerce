"use client"

import { useState } from 'react';
import { ChevronRight, Save, Settings2 } from 'lucide-react';
import Link from 'next/link';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    appName: 'My E-Commerce App',
    appDescription: 'A modern e-commerce platform for all your needs',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY',
  });

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'British Pound (GBP)' },
    { value: 'GHC', label: 'Ghanaian Cedi (GHC)' },
  ];

  const dateFormatOptions = [
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
  ];

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving settings:', settings);
    // Add toast notification or other feedback here
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              {/* Breadcrumb */}
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <div className="flex">
                      <Link href="/admin" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                        Dashboard
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-4 text-sm font-medium text-gray-500">
                        Settings
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              
              <h1 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Application Settings
              </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={saveSettings}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Save className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Form */}
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <Settings2 className="mr-2 h-5 w-5 text-indigo-600" />
              General Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure your application preferences
            </p>
          </div>
          
          <form onSubmit={saveSettings} className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* App Name */}
              <div>
                <label htmlFor="appName" className="block text-sm font-medium text-gray-700">
                  Application Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="appName"
                    id="appName"
                    value={settings.appName}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* App Description */}
              <div>
                <label htmlFor="appDescription" className="block text-sm font-medium text-gray-700">
                  Application Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="appDescription"
                    name="appDescription"
                    rows={3}
                    value={settings.appDescription}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Currency */}
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                  Default Currency
                </label>
                <div className="mt-1">
                  <select
                    id="currency"
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    {currencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Format */}
              <div>
                <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700">
                  Date Format
                </label>
                <div className="mt-1">
                  <select
                    id="dateFormat"
                    name="dateFormat"
                    value={settings.dateFormat}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    {dateFormatOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;