import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const products = [
  {
    id: 1,
    name: 'Nomad headphone',
    href: '#',
    price: 'Ghc48',
    imageSrc: '/images/headphones-1.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad earbud',
    href: '#',
    price: 'Ghc35',
    imageSrc: '/images/earbuds.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Headset',
    href: '#',
    price: 'Ghc89',
    imageSrc: '/images/headphones.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Ghc35',
    imageSrc: '/images/speaker.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: 'Ghc48',
    imageSrc: '/images/related-1.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: 'Ghc35',
    imageSrc: '/images/speaker.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: 'Ghc89',
    imageSrc: '/images/related-3.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: 'Ghc35',
    imageSrc: '/images/related-4.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default function Page() {
  return (
    <>
      <Head>
        <title>Products | AudioShop</title>
        <meta name="description" content="List of products available" />
      </Head>

      <Navbar />
      
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      
    </>
  )
}
