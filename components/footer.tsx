import { FacebookIcon, InstagramIcon, TwitterIcon } from "./socials";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">AudioShop</span>
            </div>
            <p className="text-gray-300 text-base">
              Making the world a better place through premium audio experiences.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className='h-6 w-6' />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className='h-6 w-6' />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className='h-6 w-6' />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Shop
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Earbuds
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Warranty
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2023 AudioShop, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}