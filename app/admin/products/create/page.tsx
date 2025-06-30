import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const CreateProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create New Product | AudioShop Admin</title>
        <meta name="description" content="Create a new product" />
      </Head>

        {/* Page header */}
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="min-w-0 flex-1">
                <div className="flex items-center">
                  <Link
                    href="/admin/products"
                    className="mr-4 text-gray-400 hover:text-gray-500"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Create New Product
                  </h1>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="product-form"
                  className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product form */}
        <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <form id="product-form" className="divide-y divide-gray-200">
              {/* Basic Information */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Basic Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Essential details about your product.
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
                      SKU
                    </label>
                    <input
                      type="text"
                      name="sku"
                      id="sku"
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Headphones</option>
                      <option>Earbuds</option>
                      <option>Speakers</option>
                      <option>Accessories</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Inventory */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Pricing & Inventory
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Set your product pricing and stock information.
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        min="0"
                        step="0.01"
                        className="block w-full py-2 px-3 pl-7 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="compare-price" className="block text-sm font-medium text-gray-700">
                      Compare at Price
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="compare-price"
                        id="compare-price"
                        min="0"
                        step="0.01"
                        className="block w-full py-2 px-3 pl-7 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="cost-per-item" className="block text-sm font-medium text-gray-700">
                      Cost per Item
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="cost-per-item"
                        id="cost-per-item"
                        min="0"
                        step="0.01"
                        className="block w-full py-2 px-3 pl-7 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      id="stock"
                      min="0"
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
                      Barcode (ISBN, UPC, etc.)
                    </label>
                    <input
                      type="text"
                      name="barcode"
                      id="barcode"
                      className="mt-1 block w-full py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Images
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Upload product images.
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Status
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Set the product status.
                </p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <fieldset>
                  <legend className="sr-only">Status</legend>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="published"
                        name="status"
                        type="radio"
                        defaultChecked
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        value="published"
                      />
                      <label htmlFor="published" className="ml-3 block text-sm font-medium text-gray-700">
                        Published
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="draft"
                        name="status"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        value="draft"
                      />
                      <label htmlFor="draft" className="ml-3 block text-sm font-medium text-gray-700">
                        Draft
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default CreateProductPage