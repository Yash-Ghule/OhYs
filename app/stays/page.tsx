"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin, Bed, Bath, Shield } from "lucide-react"

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
  {
    id: 10,
    name: "City View Apartment",
    type: "Apartment",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 2,
    price: 280,
    features: ["City View"],
    description: "Modern apartment with stunning views of the Golden Gate Bridge.",
  },
  {
    id: 11,
    name: "Mountain View Hostel",
    type: "Hostel",
    location: "Denver, Colorado",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 6,
    bathrooms: 3,
    price: 50,
    features: ["Mountain View"],
    description: "Affordable hostel with breathtaking mountain views. Great for backpackers.",
  },
  {
    id: 12,
    name: "Beachside Hostel",
    type: "Hostel",
    location: "San Diego, CA",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 8,
    bathrooms: 4,
    price: 45,
    features: ["Beach Access"],
    description: "Vibrant hostel just steps from the beach. Meet fellow travelers from around the world.",
  },
]

export default function Stays() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter properties based on search query and active filter
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "All" || property.type === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-3">Our Best Stays</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Browse our collection of handpicked properties for your next adventure
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8">
          {["All", "Villa", "Apartment", "Hostel"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === filter
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Property Image with Link */}
              <Link href={`/stays/${property.id}`} className="block relative h-48">
                <div className="absolute top-3 left-3 z-10 bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  {property.type}
                </div>
                <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
              </Link>

              {/* Property Details */}
              <div className="p-4">
                <Link href={`/stays/${property.id}`} className="block">
                  <h3 className="text-base font-bold mb-1 hover:text-orange-600 transition-colors">{property.name}</h3>
                </Link>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-xs">{property.location}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center text-gray-700 text-xs">
                    <Bed size={14} className="mr-1" />
                    <span>
                      {property.bedrooms} Bedroom{property.bedrooms !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700 text-xs">
                    <Bath size={14} className="mr-1" />
                    <span>
                      {property.bathrooms} Bathroom{property.bathrooms !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {property.features.length > 0 && (
                  <div className="mb-3">
                    {property.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded mr-2"
                      >
                        <Shield size={10} className="mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-3">
                  <div className="font-bold text-base">
                    ${property.price} <span className="text-gray-500 font-normal text-xs">/ night</span>
                  </div>
                  <Link
                    href={`/stays/${property.id}`}
                    className="text-orange-600 border border-orange-600 px-3 py-1 text-xs rounded-md hover:bg-orange-600 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
