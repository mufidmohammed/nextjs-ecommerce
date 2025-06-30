import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeftIcon, PrinterIcon, TruckIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const ViewOrderPage: NextPage = () => {
  // Sample order data - in a real app, this would come from an API based on the ID
  const order = {
    id: 'ORD-1001',
    customer: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567'
    },
    date: 'June 15, 2023',
    status: 'Shipped',
    paymentStatus: 'Paid',
    fulfillmentStatus: 'Fulfilled',
    shippingMethod: 'Standard Shipping',
    trackingNumber: '1234567890',
    subtotal: 129.98,
    shipping: 9.99,
    tax: 10.40,
    total: 150.37,
    paymentMethod: 'Visa ending in 4242',
    billingAddress: {
      name: 'John Smith',
      company: '',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    shippingAddress: {
      name: 'John Smith',
      company: '',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    items: [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 99.99,
        quantity: 1,
        image: '/headphones-1.jpg'
      },
      {
        id: '2',
        name: 'Audio Cleaning Kit',
        price: 29.99,
        quantity: 1,
        image: '/cleaning-kit.jpg'
      }
    ]
  }

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'shipped':
      case 'paid':
      case 'fulfilled':
        return 'bg-green-100 text-green-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
      case 'refunded':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Head>
        <title>Order #{order.id} | AudioShop Admin</title>
        <meta name="description" content={`Details for order ${order.id}`} />
      </Head>

      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <Link
                  href="/admin/orders"
                  className="mr-4 text-gray-400 hover:text-gray-500"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Order #{order.id}
                </h1>
                <span className={`ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>Placed on {order.date}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CreditCardIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  <span>{order.paymentMethod}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <TruckIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  <span>{order.shippingMethod}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <PrinterIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                Print
              </button>
              {order.status === 'Processing' && (
                <button
                  type="button"
                  className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Fulfill Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Order details */}
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Order summary */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Order Summary
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-16 w-16 rounded-md object-cover"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${order.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <p>Shipping</p>
                  <p>${order.shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <p>Tax</p>
                  <p>${order.tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                  <p>Total</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer and shipping info */}
          <div className="space-y-6">
            {/* Customer info */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Customer Information
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Contact Information
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {order.customer.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.customer.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.customer.phone}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Shipping Address
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {order.shippingAddress.name}
                    </p>
                    {order.shippingAddress.company && (
                      <p className="text-sm text-gray-500">
                        {order.shippingAddress.company}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {order.shippingAddress.address1}
                    </p>
                    {order.shippingAddress.address2 && (
                      <p className="text-sm text-gray-500">
                        {order.shippingAddress.address2}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.shippingAddress.country}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Billing Address
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {order.billingAddress.name}
                    </p>
                    {order.billingAddress.company && (
                      <p className="text-sm text-gray-500">
                        {order.billingAddress.company}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {order.billingAddress.address1}
                    </p>
                    {order.billingAddress.address2 && (
                      <p className="text-sm text-gray-500">
                        {order.billingAddress.address2}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}
                    </p>
                    <p className="text-sm text-gray-500">
                      {order.billingAddress.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping info */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Shipping Information
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Shipping Method
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {order.shippingMethod}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Tracking Number
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {order.trackingNumber}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Payment Status
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Fulfillment Status
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(order.fulfillmentStatus)}`}>
                        {order.fulfillmentStatus}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order notes and timeline */}
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Order Timeline
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <TruckIcon className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            Order shipped via {order.shippingMethod} with tracking number{' '}
                            <a href="#" className="font-medium text-gray-900">
                              {order.trackingNumber}
                            </a>
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2023-06-16">June 16, 2023</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <CreditCardIcon className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            Payment processed with {order.paymentMethod}
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2023-06-15">June 15, 2023</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center ring-8 ring-white">
                          <svg
                            className="h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            Order placed
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2023-06-15">June 15, 2023</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewOrderPage