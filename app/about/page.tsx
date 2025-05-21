"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-bold mb-8">About Us</h1>

            <div className="space-y-6 text-gray-700">
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-[400px] mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-20%20221528-GKFIUlRplh3iFlJzoCwEh87jYFvH4Y.png"
                  alt="Luxury beachfront property"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700">
                  What began as a small startup with a handful of properties has grown into a global platform connecting
                  travelers with exceptional stays in over 50 countries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
