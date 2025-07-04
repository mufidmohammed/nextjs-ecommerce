import Sidebar from '@/components/admin/sidebar';
import { Bell } from 'lucide-react';
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-gray-100">

      <Sidebar />

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
                <Bell className="h-6 w-6" aria-hidden="true" />
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
  )
}