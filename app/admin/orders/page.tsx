import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { EyeIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import OrdersTable from './OrdersTable'
import Pagination from '@/components/pagination'

const OrdersPage: NextPage = () => {
  // Sample orders data - in a real app, this would come from an API
  const orders = [
    {
      id: 'ORD-1001',
      customer: 'John Smith',
      date: '2023-06-15',
      amount: 149.99,
      status: 'completed',
      payment: 'paid',
      items: 2
    },
    {
      id: 'ORD-1002',
      customer: 'Sarah Johnson',
      date: '2023-06-14',
      amount: 299.99,
      status: 'processing',
      payment: 'paid',
      items: 1
    },
    {
      id: 'ORD-1003',
      customer: 'Michael Chen',
      date: '2023-06-14',
      amount: 89.99,
      status: 'shipped',
      payment: 'paid',
      items: 3
    },
    {
      id: 'ORD-1004',
      customer: 'Emily Rodriguez',
      date: '2023-06-13',
      amount: 179.99,
      status: 'pending',
      payment: 'pending',
      items: 2
    },
    {
      id: 'ORD-1005',
      customer: 'David Kim',
      date: '2023-06-12',
      amount: 249.99,
      status: 'cancelled',
      payment: 'refunded',
      items: 1
    },
  ]


  return (
    <>
      <Head>
        <title>Orders Management | AudioShop Admin</title>
        <meta name="description" content="Manage customer orders" />
      </Head>

      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Orders
              </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Orders list */}
      <div className="mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* Search and filter bar */}
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search products
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search products"
                    type="search"
                  />
                </div>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <select
                  id="filter-status"
                  name="filter-status"
                  className="rounded-md border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                >
                  <option value="">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <select
                  id="filter-date"
                  name="filter-date"
                  className="ml-3 rounded-md border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                >
                  <option value="">All Dates</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>

            {/* Orders table */}
            <OrdersTable orders={orders} />

            {/* Pagination */}
            <Pagination currentPage={1} totalItems={orders.length} />
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdersPage