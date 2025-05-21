"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, Bed, Bath, Waves } from "lucide-react"

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
    checkIn: "15:00",
    checkOut: "11:00",
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
    checkIn: "14:00",
    checkOut: "10:00",
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
    checkIn: "16:00",
    checkOut: "11:00",
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
    checkIn: "15:00",
    checkOut: "10:00",
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
    checkIn: "14:00",
    checkOut: "10:00",
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
    checkIn: "16:00",
    checkOut: "11:00",
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
    checkIn: "15:00",
    checkOut: "10:00",
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
    checkIn: "14:00",
    checkOut: "11:00",
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
    checkIn: "15:00",
    checkOut: "10:00",
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
    checkIn: "15:00",
    checkOut: "11:00",
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
    checkIn: "14:00",
    checkOut: "10:00",
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
    checkIn: "15:00",
    checkOut: "11:00",
  },
]

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const propertyId = Number.parseInt(params.id)
  const property = properties.find((p) => p.id === propertyId)

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Property not found</h1>
        <Link href="/stays" className="text-orange-600 hover:underline">
          Back to Stays
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/stays"
          className="inline-flex items-center text-gray-700 hover:text-orange-600 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stays
        </Link>

        <motion.div
          className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Property Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute top-4 left-4 z-10 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {property.type}
              </div>
              <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
            </div>

            {/* Property Details */}
            <div className="p-6 lg:p-8">
              <h1 className="text-3xl font-bold mb-2">{property.name}</h1>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={18} className="mr-2" />
                <span>{property.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock size={18} className="text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Check-in</p>
                    <p className="font-medium">{property.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Check-out</p>
                    <p className="font-medium">{property.checkOut}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Bed size={20} className="text-gray-700 mr-2" />
                  <span className="font-medium">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="text-gray-700 mr-2" />
                  <span className="font-medium">{property.bathrooms} Bathrooms</span>
                </div>
                {property.features.includes("Private Pool") && (
                  <div className="flex items-center">
                    <Waves size={20} className="text-gray-700 mr-2" />
                    <span className="font-medium">Private Pool</span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 mb-8">{property.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">
                  ${property.price} <span className="text-gray-500 font-normal text-base">/ night</span>
                </div>
                <button className="bg-orange-600 text-white px-6 py-2 rounded font-medium hover:bg-orange-700 transition-colors">
                  BOOK
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
