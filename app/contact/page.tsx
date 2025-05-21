"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { PhoneIcon, MailIcon } from "lucide-react"

export default function Contact() {
  const [activeTab, setActiveTab] = useState("login")
  const [hostFormData, setHostFormData] = useState({
    name: "",
    email: "",
    propertyType: "",
    location: "",
  })
  const [accountFormData, setAccountFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleHostFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setHostFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAccountFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAccountFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleHostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Host application submitted:", hostFormData)
    // Handle form submission logic here
  }

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Account form submitted:", accountFormData)
    // Handle form submission logic here
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden mb-12 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">OhYs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Customer Support */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-center mb-2">
                  <PhoneIcon className="text-orange-600" />
                </div>
                <h3 className="text-center text-gray-600 mb-2">Customer Support</h3>
                <p className="text-center font-medium text-lg">+1 (555) 123-4567</p>
              </div>

              {/* Landline */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-center mb-2">
                  <PhoneIcon className="text-orange-600" />
                </div>
                <h3 className="text-center text-gray-600 mb-2">Landline</h3>
                <p className="text-center font-medium text-lg">+1 (555) 987-6543</p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-8">
              <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
                <div className="flex justify-center mb-2">
                  <MailIcon className="text-orange-600" />
                </div>
                <h3 className="text-center text-gray-600 mb-2">Email</h3>
                <p className="text-center font-medium text-lg">ohys@rental.gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout for Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Host Application Form */}
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">Join us – Be a Host</h2>
              <p className="text-gray-600 mb-6 text-sm">
                List your property with us and start earning. Fill out the form below to apply.
              </p>

              <form onSubmit={handleHostSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="host-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="host-name"
                      name="name"
                      placeholder="Your full name"
                      value={hostFormData.name}
                      onChange={handleHostFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="host-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="host-email"
                      name="email"
                      placeholder="Your email address"
                      value={hostFormData.email}
                      onChange={handleHostFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Type of property
                    </label>
                    <select
                      id="property-type"
                      name="propertyType"
                      value={hostFormData.propertyType}
                      onChange={handleHostFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none bg-white"
                      required
                    >
                      <option value="">Select property type</option>
                      <option value="villas">Villas</option>
                      <option value="apartments">Apartments</option>
                      <option value="hostels">Hostels</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location of property
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City, State, Country"
                      value={hostFormData.location}
                      onChange={handleHostFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Account Access Form */}
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">Account Access</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Sign in to your account or create a new one to access all features.
              </p>

              {/* Tabs */}
              <div className="flex mb-6 bg-gray-100 rounded-md p-1">
                <button
                  className={`flex-1 py-2 text-center rounded-md ${
                    activeTab === "login" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 text-center rounded-md ${
                    activeTab === "registration" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("registration")}
                >
                  Registration
                </button>
              </div>

              {activeTab === "registration" && (
                <form onSubmit={handleAccountSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="account-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="account-name"
                        name="name"
                        placeholder="Your name"
                        value={accountFormData.name}
                        onChange={handleAccountFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="account-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="account-email"
                        name="email"
                        placeholder="Your email address"
                        value={accountFormData.email}
                        onChange={handleAccountFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        value={accountFormData.password}
                        onChange={handleAccountFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Sign In
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">
                      By signing in or creating an account, you agree to our{" "}
                      <Link href="/terms" className="text-orange-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-orange-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}

              {activeTab === "login" && (
                <form onSubmit={handleAccountSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="login-email"
                        name="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Your password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Sign In
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mt-4">
                      By signing in or creating an account, you agree to our{" "}
                      <Link href="/terms" className="text-orange-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-orange-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
