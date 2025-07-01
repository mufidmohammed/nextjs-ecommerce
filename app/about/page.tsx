import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SocialIcons } from '@/components/socials'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Clock, ClockIcon, Cloud, ShieldCheck, Zap } from 'lucide-react'

const About: NextPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Audio enthusiast with 15+ years in the industry. Started AudioShop to bring premium sound to everyone.',
      image: '/images/team-member-1.jpeg'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Head of Product',
      bio: 'Product designer and engineer focused on creating the perfect audio experience.',
      image: '/images/team-member-2.jpeg'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Customer Experience',
      bio: 'Ensures every customer gets the support and service they deserve.',
      image: '/images/team-member-3.jpeg'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Founded in a small garage with a passion for audio' },
    { year: '2017', event: 'Launched our first line of premium headphones' },
    { year: '2019', event: 'Expanded to e-commerce with 50,000+ customers' },
    { year: '2021', event: 'Opened our first physical retail location' },
    { year: '2023', event: 'Featured in "Top Audio Brands" by Sound Magazine' }
  ]

  return (
    <>
      <Head>
        <title>About Us | AudioShop</title>
        <meta name="description" content="Learn about our mission to deliver premium audio experiences" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpeg"
            alt="About AudioShop"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            From humble beginnings to becoming a leader in premium audio equipment.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                At AudioShop, we believe everyone deserves to experience music and audio the way artists intended. 
                We're dedicated to bringing you premium audio equipment that delivers exceptional sound quality 
                without compromise.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Our Products
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src="/images/mission-image.jpeg"
                alt="Our mission"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Passionate audio experts dedicated to your listening experience
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.id} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow">
                  <div className="-mt-6">
                    <div className="relative h-40 w-40 mx-auto">
                      <Image
                        src={person.image}
                        alt={person.name}
                        layout="fill"
                        className="rounded-full object-cover shadow-md"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-indigo-600 text-center">
                      {person.role}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Milestones in our pursuit of audio excellence
            </p>
          </div>

          <div className="mt-16 flow-root">
            <ul className="-mb-8">
              {milestones.map((milestone, index) => (
                <li key={milestone.year}>
                  <div className="relative pb-8">
                    {index !== milestones.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-8 ring-white">
                          <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {milestone.event}
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={milestone.year}>{milestone.year}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Audio Excellence
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We're obsessed with sound quality and only offer products that meet our rigorous standards.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Cloud className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Customer Focus
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Your satisfaction is our priority. We stand behind every product we sell.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Innovation
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We continuously explore new technologies to bring you the best audio experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to experience the difference?</span>
            <span className="block text-indigo-600">Shop our premium audio collection today.</span>
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
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default About