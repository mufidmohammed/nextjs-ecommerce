'use client'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

// Mock customer data - replace with actual API call
const mockCustomerData = {
  id: '123',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1-555-0123',
  birthdate: '1985-06-15',
  streetAddress: '123 Main Street',
  city: 'New York',
  state: 'NY',
  postalCode: '10001',
  country: 'United States',
  emailMarketing: true,
  status: 'active'
}

const EditCustomerPage: NextPage = () => {
  const id = mockCustomerData.id
  const [customer, setCustomer] = useState(mockCustomerData)
  const [loading, setLoading] = useState(false)

  // Mock function to fetch customer data - replace with actual API call
  useEffect(() => {
    if (id) {
      // Simulate API call
      setLoading(true)
      setTimeout(() => {
        setCustomer(mockCustomerData)
        setLoading(false)
      }, 500)
    }
  }, [id])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setCustomer(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - API call to update customer
    console.log('Updating customer:', customer)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Edit Customer | AudioShop Admin</title>
        <meta name="description" content="Edit customer information" />
      </Head>

      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <Link
                  href="/admin/customers"
                  className="mr-4 text-gray-400 hover:text-gray-500"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </Link>
                <div>
                  <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Edit Customer
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Customer ID: {customer.id}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link
                href="/admin/customers"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </Link>
              <button
                type="submit"
                form="customer-form"
                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update Customer
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={() => {
                  if (confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
                    // Handle delete - API call to delete customer
                    console.log('Deleting customer:', customer.id)
                  }
                }}
              >
                Delete Customer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer form */}
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <form id="customer-form" onSubmit={handleSubmit} className="divide-y divide-gray-200">
            {/* Personal Information */}
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Basic details about the customer.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={customer.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={customer.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={customer.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={customer.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={customer.birthdate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Address Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Primary shipping and billing address.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    value={customer.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={customer.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={customer.state}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={customer.postalCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={customer.country}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Japan</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Account Settings
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Configure customer account preferences.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Leave blank to keep current password"
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Only enter a password if you want to change it
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="emailMarketing"
                        name="emailMarketing"
                        type="checkbox"
                        checked={customer.emailMarketing}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="emailMarketing" className="font-medium text-gray-700">
                        Subscribe to marketing emails
                      </label>
                      <p className="text-gray-500">Receive updates about new products and promotions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Status */}
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Customer Status
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Set the customer account status.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <fieldset>
                <legend className="sr-only">Status</legend>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="active"
                      name="status"
                      type="radio"
                      checked={customer.status === 'active'}
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      value="active"
                    />
                    <label htmlFor="active" className="ml-3 block text-sm font-medium text-gray-700">
                      Active
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="inactive"
                      name="status"
                      type="radio"
                      checked={customer.status === 'inactive'}
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      value="inactive"
                    />
                    <label htmlFor="inactive" className="ml-3 block text-sm font-medium text-gray-700">
                      Inactive
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="banned"
                      name="status"
                      type="radio"
                      checked={customer.status === 'banned'}
                      onChange={handleInputChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      value="banned"
                    />
                    <label htmlFor="banned" className="ml-3 block text-sm font-medium text-gray-700">
                      Banned
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditCustomerPage