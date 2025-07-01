import { NextPage } from 'next'
import Link from 'next/link'


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
                  </div>
                  <div
                    className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 ${stat.changeType === 'positive'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {stat.change}
                  </div>
                </dd>
                <span className="text-sm font-medium text-gray-500">
                  from last week
                </span>
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
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered'
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
                  <Link href="/admin/products/create"
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
    </>
  )
}

export default AdminDashboard