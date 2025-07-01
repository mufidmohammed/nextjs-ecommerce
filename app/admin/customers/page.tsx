import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import CustomersTable from './CustomersTable'
import { Search } from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  orders: number
  totalSpent: number
  status: 'Active' | 'Inactive' | 'Banned'
  joinedDate: string
}

const AdminCustomers: NextPage = () => {
  // Sample customer data - in a real app, this would come from an API
  const customers: Customer[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '(555) 123-4567',
      orders: 12,
      totalSpent: 1250.75,
      status: 'Active',
      joinedDate: '2023-01-15'
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria.garcia@example.com',
      phone: '(555) 234-5678',
      orders: 5,
      totalSpent: 589.99,
      status: 'Active',
      joinedDate: '2023-03-22'
    },
    {
      id: '3',
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      phone: '(555) 345-6789',
      orders: 0,
      totalSpent: 0,
      status: 'Inactive',
      joinedDate: '2023-05-10'
    },
    {
      id: '4',
      name: 'Sarah Miller',
      email: 'sarah.miller@example.com',
      phone: '(555) 456-7890',
      orders: 8,
      totalSpent: 842.50,
      status: 'Active',
      joinedDate: '2023-02-18'
    },
    {
      id: '5',
      name: 'Robert Davis',
      email: 'robert.davis@example.com',
      phone: '(555) 567-8901',
      orders: 3,
      totalSpent: 325.25,
      status: 'Banned',
      joinedDate: '2023-04-05'
    },
  ]

  const deleteCustomer = (id: string) => {

    console.log(`Deleting customer ${id}`)
   
  }

  return (
    <>
      <Head>
        <title>Customers Management | AudioShop Admin</title>
        <meta name="description" content="Manage your customers" />
      </Head>

      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Customers
              </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link href="/admin/customers/create"
                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Add Customer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Customers list */}
      <div className="mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">

            {/* Search and filter bar */}
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search customers
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search customers"
                    type="search"
                  />
                </div>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <select
                  id="filter-status"
                  name="filter-status"
                  className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Banned">Banned</option>
                </select>
                <select
                  id="filter-orders"
                  name="filter-orders"
                  className="ml-3 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">All Customers</option>
                  <option value="1">Has Orders</option>
                  <option value="0">No Orders</option>
                  <option value="5">5+ Orders</option>
                </select>
              </div>
            </div>

            {/* Customer table */}
            <CustomersTable customers={customers} />

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminCustomers