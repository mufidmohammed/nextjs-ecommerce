"use client"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Head from 'next/head'
import { useState } from 'react'

interface ProductDetailProps {
    params: { id: string }
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { id } = params

  // Product data - in a real app, this would come from an API
  const product = {
    id: id,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day listening.',
    rating: 4.7,
    reviewCount: 128,
    colors: [
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      { name: 'Silver', class: 'bg-gray-400', selectedClass: 'ring-gray-400' },
      { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
    ],
    sizes: [
      { name: 'Small', inStock: true },
      { name: 'Medium', inStock: true },
      { name: 'Large', inStock: true },
      { name: 'XL', inStock: false },
    ],
    details: [
      'Wireless Bluetooth connectivity',
      'Active noise cancellation',
      '30-hour battery life',
      'Built-in microphone for calls',
      'Foldable design for portability',
      'Includes carrying case and audio cable'
    ],
    images: [
      {
        id: 1,
        name: 'Front view',
        src: '/images/headphones-1.jpeg',
        alt: 'Front view of premium wireless headphones',
      },
      {
        id: 2,
        name: 'Side view',
        src: '/images/headphones-2.jpeg',
        alt: 'Side view of premium wireless headphones',
      },
      {
        id: 3,
        name: 'Detail view',
        src: '/images/headphones-3.jpeg',
        alt: 'Detail view of premium wireless headphones',
      },
      {
        id: 4,
        name: 'With case',
        src: '/images/headphones-4.jpeg',
        alt: 'Premium wireless headphones with carrying case',
      },
    ]
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[1])
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(product.images[0])

  return (
    <>
      <Head>
        <title>{product.name} | AudioShop</title>
        <meta name="description" content={product.description} />
      </Head>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="py-6">
            <ol className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                    Products
                  </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                    Headphones
                  </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Product overview */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Image gallery */}
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-4">
                {product.images.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => setCurrentImage(image)}
                    className={`rounded-lg overflow-hidden ${currentImage.id === image.id ? 'ring-2 ring-indigo-500' : ''}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={`h-5 w-5 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {product.rating} out of 5 stars
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Based on {product.reviewCount} reviews
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{product.description}</p>
                </div>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <h3 className="text-sm text-gray-600">Color</h3>
                <div className="mt-2 flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      className={`w-8 h-8 rounded-full ${color.class} ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ' + color.selectedClass : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-600">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <div className="mt-2 grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      disabled={!size.inStock}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-md text-sm font-medium ${size.inStock ? 'hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'} ${selectedSize.name === size.name ? 'bg-indigo-50 border-indigo-500 text-indigo-600' : 'border-gray-300 text-gray-900'}`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm text-gray-600">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Decrease quantity</span>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="mx-4 text-gray-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Increase quantity</span>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
                >
                  Add to cart
                </button>
              </div>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Shipping & Returns</h3>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    Free shipping on all orders over $50. Returns accepted within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews section */}
          <div className="mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                  Customer Reviews
                </h2>
                <div className="mt-3 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={`h-5 w-5 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    Based on {product.reviewCount} reviews
                  </p>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you've used this product, share your thoughts with other customers
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Write a review
                </button>
              </div>
            </div>

            <div className="mt-16 lg:mt-24">
              <h3 className="sr-only">Recent reviews</h3>
              <div className="space-y-10">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="flex flex-col sm:flex-row">
                    <div className="order-2 mt-6 sm:mt-0 sm:ml-16">
                      <h4 className="text-sm font-medium text-gray-900">
                        Excellent sound quality
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        These headphones exceeded my expectations. The noise cancellation is incredible and the battery life lasts through my longest flights.
                      </p>
                      <p className="mt-3 text-sm font-medium text-gray-900">
                        Michael H. - Verified Buyer
                      </p>
                    </div>

                    <div className="order-1 flex items-center sm:flex-col sm:items-start">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <svg
                            key={rating}
                            className={`h-5 w-5 ${rating < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="ml-3 text-sm text-gray-500 sm:ml-0 sm:mt-2">
                        Posted on January 12, 2023
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-24">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              You may also like
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {[1, 2, 3, 4].map((product) => (
                <div key={product} className="group relative">
                  <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={`/images/related-${product}.jpeg`}
                      alt="Related product"
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product === 1 && 'Noise-Cancelling Earbuds'}
                          {product === 2 && 'Bluetooth Speaker'}
                          {product === 3 && 'Studio Headphones'}
                          {product === 4 && 'Wireless Earphones'}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product === 1 && 'Black'}
                        {product === 2 && 'Silver'}
                        {product === 3 && 'Black'}
                        {product === 4 && 'White'}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product === 1 && '$179.99'}
                      {product === 2 && '$89.99'}
                      {product === 3 && '$249.99'}
                      {product === 4 && '$129.99'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail