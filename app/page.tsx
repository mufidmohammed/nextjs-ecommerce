import { NextPage } from 'next'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import clsx from 'clsx'
import Head from 'next/head'

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: '$199.99',
      rating: 4.5,
      image: '/images/headphones.jpeg',
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: '$129.99',
      rating: 4.2,
      image: '/images/earbuds.jpeg',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: '$89.99',
      rating: 4.7,
      image: '/images/speaker.jpeg',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'The sound quality is amazing! Best headphones I\'ve ever owned.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Fast shipping and excellent customer service. Will buy again!',
      rating: 4,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      comment: 'The earbuds fit perfectly and the battery life is impressive.',
      rating: 5,
    },
  ]

  return (
    <>
      <Head>
        <title>Products | AudioShop</title>
        <meta name="description" content="List of products available" />
      </Head>
      
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="images/about-hero.jpeg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Audio Experience
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Discover our collection of high-quality headphones, earbuds, and speakers designed for audiophiles.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-indigo-500 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-600"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Carefully curated selection of our best audio equipment
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        // className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                        className={clsx(
                          'h-5 w-5',
                          {
                            'text-yellow-400' : i < Math.floor(product.rating),
                            'text-gray-200' : i >= Math.floor(product.rating)
                          }
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What our customers say
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Don't just take our word for it. Here's what our customers have to say about our products.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="space-y-12">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="mt-2 text-base text-gray-700">
                          <p>{testimonial.comment}</p>
                        </div>
                        <div className="mt-3 text-sm font-medium text-gray-900">
                          <p>{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start shopping today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Shop Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home