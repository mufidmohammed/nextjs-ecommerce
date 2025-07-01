'use client'

import Link from "next/link";
import {
  ChartBar,
  ShoppingBag,
  Users,
  CogIcon,
  LogOut,
  TrendingUp,
  Clock,
  ChartBarStacked,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
  
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-indigo-700 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-2xl font-bold text-white">AudioShop Admin</h1>
          </div>
          <nav className="mt-5 flex flex-1 flex-col overflow-y-auto">
            <div className="space-y-1 px-2">
              <Link href="/admin"
                // className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin'
                  }
                )}
                >
                  <ChartBar className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Dashboard
              </Link>
              <Link href="/admin/products"
                // className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin/products',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin/products'
                  }
                )}
                >
                  <ShoppingBag className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Products
              </Link>
              <Link href="/admin/orders"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin/orders',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin/orders'
                  }
                )}
                >
                  <Clock className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Orders
              </Link>
              <Link href="/admin/customers"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin/customers',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin/customers'
                  }
                )}
                >
                  <Users className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Customers
              </Link>
              <Link href="/admin/reports"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin/reports',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin/reports'
                  }
                )}>
                  <TrendingUp className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Reports
              </Link>
              <Link href="/admin/settings"
                className={clsx(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  {
                    'bg-indigo-800 text-white': pathname === '/admin/settings',
                    'text-indigo-100 hover:bg-indigo-600 hover:text-white': pathname !== '/admin/settings'
                  }
                )}>
                  <CogIcon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                  Settings
              </Link>
            </div>
            <div className="mt-auto px-2">
              <a
                href="#"
                className="text-indigo-100 hover:bg-indigo-600 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <LogOut className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" />
                Logout
              </a>
            </div>
          </nav>
        </div>
  );
}