"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-orange-600">O</span>h<span className="text-orange-600">Y</span>s
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/stays" className="text-gray-700 hover:text-orange-600 transition-colors">
            Stays
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
          >
            Login
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
