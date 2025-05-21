"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Bed, Bath } from "lucide-react"

// Updated property data with new descriptions and image sources
const properties = [
  {
    id: 1,
    name: "Seaside Villa",
    type: "Villa",
    location: "Malibu, California",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 4,
    bathrooms: 3,
    price: 350,
    features: ["Private Pool"],
    description: "Luxurious beachfront villa with stunning ocean views. Perfect for a relaxing getaway.",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    type: "Villa",
    location: "Aspen, Colorado",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 2,
    price: 275,
    features: ["Mountain View"],
    description: "Cozy cabin nestled in the mountains. Ideal for nature lovers and winter sports enthusiasts.",
  },
  {
    id: 3,
    name: "Urban Loft",
    type: "Apartment",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 1,
    bathrooms: 1,
    price: 200,
    features: ["City View"],
    description: "Modern loft in the heart of the city. Close to major attractions and nightlife.",
  },
  {
    id: 4,
    name: "Beachfront Bungalow",
    type: "Villa",
    location: "Miami, Florida",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 2,
    price: 320,
    features: ["Private Pool", "Beach Access"],
    description: "Charming bungalow steps away from the beach. Enjoy the sun, sand, and surf.",
  },
  {
    id: 5,
    name: "Countryside Cottage",
    type: "Villa",
    location: "Cotswolds, UK",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 1,
    price: 180,
    features: ["Garden"],
    description: "Quaint cottage in the English countryside. Perfect for a peaceful retreat.",
  },
  {
    id: 6,
    name: "Luxury Penthouse",
    type: "Apartment",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 3,
    price: 450,
    features: ["Rooftop Terrace", "City View"],
    description: "Upscale penthouse with panoramic city views. Experience the height of luxury.",
  },
  {
    id: 7,
    name: "Lakeside Cabin",
    type: "Villa",
    location: "Lake Tahoe, California",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 1,
    price: 220,
    features: ["Lake View", "Fireplace"],
    description: "Rustic cabin by the lake. Perfect for fishing, hiking, and enjoying nature.",
  },
  {
    id: 8,
    name: "Downtown Studio",
    type: "Apartment",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 1,
    bathrooms: 1,
    price: 150,
    features: ["City View"],
    description: "Compact studio in the heart of downtown. Perfect for business travelers.",
  },
  {
    id: 9,
    name: "Tropical Paradise",
    type: "Villa",
    location: "Maui, Hawaii",
    image:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 4,
    bathrooms: 3,
    price: 400,
    features: ["Private Pool", "Ocean View"],
    description: "Stunning villa surrounded by tropical gardens. Experience paradise on earth.",
  },
]

export default function Home() {
  // No pause state needed as slider should always animate
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardWidth = 280 // Reduced from 320 to 280

  // Create a duplicate array of properties to ensure smooth infinite looping
  const duplicatedProperties = [...properties, ...properties]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury vacation home with pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experience Luxury Stays
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find your perfect getaway with our handpicked selection of premium properties
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/stays"
                className="bg-orange-600 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition-colors"
              >
                Explore Stays
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Stays Section with Continuous Slider */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Best Stays</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular and highly-rated accommodations</p>
          </motion.div>

          {/* Continuous Slider Container */}
          <div className="relative overflow-hidden" ref={sliderRef}>
            {/* Continuous Slider */}
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{
                x: "-50%",
              }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              style={{ width: `${duplicatedProperties.length * cardWidth}px` }}
            >
              {duplicatedProperties.map((property, index) => (
                <div key={`${property.id}-${index}`} className="w-[260px] flex-shrink-0 mx-2.5">
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 hover:shadow-xl">
                    <Link href={`/stays/${property.id}`} className="block relative h-40">
                      <div className="absolute top-3 left-3 z-10 bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        {property.type}
                      </div>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="p-3">
                      <Link href={`/stays/${property.id}`} className="block">
                        <h3 className="text-sm font-bold mb-1 hover:text-orange-600 transition-colors">
                          {property.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-gray-500 mb-2 text-xs">
                        <MapPin size={12} className="mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2 text-xs">
                        <div className="flex items-center text-gray-700">
                          <Bed size={12} className="mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Bath size={12} className="mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                      </div>
                      <div className="font-bold text-sm">
                        ${property.price} <span className="text-gray-500 font-normal text-xs">/ night</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/stays"
              className="inline-block border border-orange-600 text-orange-600 px-6 py-2 rounded-md hover:bg-orange-600 hover:text-white transition-colors"
            >
              View All Stays
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2020, OhYs has quickly become the premier destination for travelers seeking unique and
                  luxurious accommodations around the world. Our mission is to connect travelers with exceptional
                  properties that provide unforgettable experiences.
                </p>
                <p>
                  We carefully curate each property in our collection, ensuring that they meet our high standards for
                  quality, comfort, and authenticity. From beachfront villas to urban lofts, mountain retreats to
                  countryside cottages, we offer a diverse range of accommodations to suit every traveler's preferences.
                </p>
                <p>
                  What sets us apart is our commitment to personalized service and attention to detail. We work closely
                  with property owners and hosts to ensure that every stay exceeds expectations and creates lasting
                  memories.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Luxury accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-6">
                <h3 className="text-xl font-bold mb-2">Our Story</h3>
                <p className="text-gray-700">
                  What began as a small startup with a handful of properties has grown into a global platform connecting
                  travelers with exceptional stays in over 50 countries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
