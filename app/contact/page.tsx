'use client'
import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import React, { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Product Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // udpate form logic
    // send data to api
  }

  const contactMethods = [
    {
      icon: (
        <Mail className="w-6 h-6 text-indigo-600" />
      ),
      title: "Email",
      details: "contact@audioshop.com",
      action: "mailto:contact@audioshop.com"
    },
    {
      icon: (
        <Phone className="w-6 h-6 text-indigo-600" />
      ),
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: (
        <MapPin className="w-6 h-6 text-indigo-600" />
      ),
      title: "Visit Us",
      details: "123 Audio Street, Sound City, CA 90210",
      action: "https://maps.google.com"
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us | AudioShop</title>
        <meta name="description" content="Get in touch with AudioShop for premium audio equipment inquiries" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/about-hero.jpeg"
            alt="Contact AudioShop"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We'd love to hear from you. Reach out for product inquiries, support, or just to say hello.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 mx-auto">
                  {method.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{method.title}</h3>
                <p className="mt-2 text-base text-gray-500">{method.details}</p>
                <a
                  href={method.action}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {method.title === "Visit Us" ? "Get Directions" : `Contact via ${method.title}`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Send us a message
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Have questions about our products? Need support with your order? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Customer support</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our dedicated support team is available Monday-Friday, 9am-5pm PST.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form onSubmit={handleSubmit} className="mb-0 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      >
                        <option value="">-- Select a subject --</option>
                        <option>Product Inquiry</option>
                        <option>Order Support</option>
                        <option>Returns & Exchanges</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Can't find what you're looking for? Check out our FAQs.
            </p>
          </div>

          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's your return policy?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a 30-day money-back guarantee on all products. Items must be returned in their original condition with all accessories included.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How long does shipping take?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Most orders ship within 1-2 business days. Domestic orders typically arrive in 3-5 business days, while international shipping takes 7-14 business days.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you offer international shipping?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Can I track my order?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Absolutely! Once your order ships, you'll receive a tracking number via email to monitor your package's journey.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you offer warranty on your products?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, all our products come with at least a 1-year manufacturer's warranty. Some premium products have extended warranty options.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Still have questions?</span>
            <span className="block">We're here to help.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Can't find what you need? Our customer service team is ready to assist you.
          </p>
          <a
            href="#contact-form"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
      
    </>
  )
}

export default Contact