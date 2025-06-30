import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  CogIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
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
                        src="/images/admin-avatar.png"
                        alt="Admin avatar"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 pb-8">
            
            {children}
            
          </main>
        </div>
      </div>
      </body>
    </html>
  )
}