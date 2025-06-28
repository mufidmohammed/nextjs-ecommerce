"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Navbar() {

  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">AudioShop</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={clsx(
                  'inline-flex items-center px-1 pt-1 border-b-2 hover:border-gray-300 text-sm font-medium',
                  {
                    'border-indigo-500 text-gray-900': pathname === '/',
                    'border-transparent text-gray-500': pathname !== '/'
                  }
                )}>
                Home
              </Link>
              <Link
                href="/products"
                className={clsx(
                  'inline-flex items-center px-1 pt-1 border-b-2 hover:border-gray-300 text-sm font-medium',
                  {
                    'border-indigo-500 text-gray-900': pathname === '/products',
                    'border-transparent text-gray-500': pathname !== '/products'
                  }
                )}>
                Shop
              </Link>
              <Link
                href="/about"
                className={clsx(
                  'inline-flex items-center px-1 pt-1 border-b-2 hover:border-gray-300 text-sm font-medium',
                  {
                    'border-indigo-500 text-gray-900': pathname === '/about',
                    'border-transparent text-gray-500': pathname !== '/about'
                  }
                )}>
                About
              </Link>
              <Link
                href="/contact"
                className={clsx(
                  'inline-flex items-center px-1 pt-1 border-b-2 hover:border-gray-300 text-sm font-medium',
                  {
                    'border-indigo-500 text-gray-900': pathname === '/contact',
                    'border-transparent text-gray-500': pathname !== '/contact'
                  }
                )}>
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">View cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}