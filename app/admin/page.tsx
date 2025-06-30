import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  CurrencyDollarIcon,
  CogIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';


const AdminDashboard: NextPage = () => {
  // Sample data - in a real app, this would come from an API
  const stats = [
    { name: 'Total Sales', value: '$24,567', change: '+12%', changeType: 'positive' },
    { name: 'New Orders', value: '143', change: '+5%', changeType: 'positive' },
    { name: 'Active Products', value: '56', change: '-3%', changeType: 'negative' },
    { name: 'New Customers', value: '28', change: '+8%', changeType: 'positive' },
  ]

  const recentOrders = [
    { id: '1', customer: 'John Smith', date: '2023-05-15', amount: '$149.99', status: 'Shipped' },
    { id: '2', customer: 'Sarah Johnson', date: '2023-05-14', amount: '$299.99', status: 'Processing' },
    { id: '3', customer: 'Michael Chen', date: '2023-05-14', amount: '$89.99', status: 'Delivered' },
    { id: '4', customer: 'Emily Rodriguez', date: '2023-05-13', amount: '$179.99', status: 'Shipped' },
    { id: '5', customer: 'David Kim', date: '2023-05-12', amount: '$249.99', status: 'Processing' },
  ]

  const topProducts = [
    { id: '1', name: 'Premium Wireless Headphones', sales: '1,234', revenue: '$36,987' },
    { id: '2', name: 'Noise-Cancelling Earbuds', sales: '987', revenue: '$17,765' },
    { id: '3', name: 'Bluetooth Speaker', sales: '756', revenue: '$6,804' },
    { id: '4', name: 'Studio Headphones', sales: '543', revenue: '$10,857' },
  ]

  return (
    <>
      <Head>
        <title>Admin Dashboard | AudioShop</title>
        <meta name="description" content="Admin dashboard for AudioShop e-commerce" />
      </Head>

      <div className="min-h-full bg-gray-100">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-indigo-700 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-2xl font-bold text-white">AudioShop Admin</h1>
          </div>
          <nav className="mt-5 flex flex-1 flex-col overflow-y-auto">
            <div className="space-y-1 px-2">
              <Link href="/admin"
                className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <ChartBarIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Dashboard
              </Link>
              <Link href="/admin/products"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <ShoppingBagIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Products
              </Link>
              <Link href="/admin/orders"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <ClockIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Orders
              </Link>
              <Link href="/admin/customers"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <UsersIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Customers
              </Link>
              <Link href="/admin/reports"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <TrendingUpIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Reports
              </Link>
              <Link href="/admin/settings"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <CogIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Settings
              </Link>
            </div>
            <div className="mt-auto px-2">
              <a
                href="#"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <LogoutIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                Logout
              </a>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col pl-64">
          {/* Top navigation */}
          <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1"></div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/admin-avatar.jpg"
                        alt="Admin avatar"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      Dashboard
                    </h1>
                  </div>
                  <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Export
                    </button>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.name}
                      className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                    >
                      <dt className="truncate text-sm font-medium text-gray-500">
                        {stat.name}
                      </dt>
                      <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                          {stat.value}
                          <span className="ml-2 text-sm font-medium text-gray-500">
                            from last week
                          </span>
                        </div>
                        <div
                          className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 ${
                            stat.changeType === 'positive'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {stat.change}
                        </div>
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Recent Orders */}
                <div className="lg:col-span-2">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Recent Orders
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Latest customer orders
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Order ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Customer
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">View</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentOrders.map((order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                #{order.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {order.customer}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {order.date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {order.amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    order.status === 'Delivered'
                                      ? 'bg-green-100 text-green-800'
                                      : order.status === 'Shipped'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  href="#"
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Top Products */}
                <div>
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Top Products
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Best selling products
                      </p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {topProducts.map((product) => (
                        <div
                          key={product.id}
                          className="px-4 py-4 sm:px-6 flex justify-between"
                        >
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {product.name}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.sales} sales
                            </p>
                          </div>
                          <div className="text-sm font-medium text-indigo-600">
                            {product.revenue}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Quick Actions
                      </h3>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/products/new"
                           className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                            Add Product
                        </Link>
                        <Link href="/admin/orders"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                            Manage Orders
                        </Link>
                        <Link href="/admin/customers"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                            View Customers
                        </Link>
                        <Link href="/admin/reports"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                            Generate Report
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard