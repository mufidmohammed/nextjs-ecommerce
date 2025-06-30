import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import ProductsTable from './ProductsTable'


interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'Published' | 'Draft' | 'Archived'
  image: string
}

const AdminProducts: NextPage = () => {

  // Sample product data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      category: 'Headphones',
      price: 299.99,
      stock: 56,
      status: 'Published',
      image: '/images/headphones-1.jpeg'
    },
    {
      id: '2',
      name: 'Noise-Cancelling Earbuds',
      category: 'Earbuds',
      price: 179.99,
      stock: 128,
      status: 'Published',
      image: '/images/earbuds.jpeg'
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      category: 'Speakers',
      price: 89.99,
      stock: 42,
      status: 'Published',
      image: '/images/speaker.jpeg'
    },
    {
      id: '4',
      name: 'Studio Headphones (New Model)',
      category: 'Headphones',
      price: 249.99,
      stock: 0,
      status: 'Draft',
      image: '/images/related-3.jpeg'
    },
    {
      id: '5',
      name: 'Wireless Earphones',
      category: 'Earbuds',
      price: 129.99,
      stock: 87,
      status: 'Published',
      image: '/images/related-4.jpeg'
    },
  ]

  const deleteProduct = (id: string) => {
    // In a real app, this would call an API to delete the product
    console.log(`Deleting product ${id}`)
    // Then update the products list
  }

  return (
    <>
      <Head>
        <title>Products Management | AudioShop Admin</title>
        <meta name="description" content="Manage your product catalog" />
      </Head>

      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Products
              </h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link href="/admin/products/create"
                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products list */}
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
                  id="filter-category"
                  name="filter-category"
                  className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">All Categories</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Earbuds">Earbuds</option>
                  <option value="Speakers">Speakers</option>
                  <option value="Accessories">Accessories</option>
                </select>
                <select
                  id="filter-status"
                  name="filter-status"
                  className="ml-3 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">All Statuses</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Product table */}
            <ProductsTable products={products} />

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProducts