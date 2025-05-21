"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-700 hover:text-orange-600 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>

        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
            <p className="text-gray-600 mt-2 mb-6">Last Updated: May 21, 2025</p>

            <hr className="border-gray-200 mb-8" />

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to OhYs Luxury Stays. These terms and conditions outline the rules and regulations for the use
                  of our website and services. By accessing this website or using our services, we assume you accept
                  these terms and conditions in full. Do not continue to use OhYs if you do not accept all of the terms
                  and conditions stated on this page.
                </p>
                <p className="mt-4 text-gray-700">
                  These Terms constitute a legally binding agreement between you and OhYs regarding your use of the
                  website and services. Please read them carefully.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. License to Use</h2>
                <p className="text-gray-700">
                  Unless otherwise stated, OhYs and/or its licensors own the intellectual property rights for all
                  material on OhYs. All intellectual property rights are reserved.
                </p>
                <p className="mt-4 text-gray-700">You may:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>View and/or print pages from our website for your own personal use</li>
                  <li>Use our booking platform to make legitimate accommodation reservations</li>
                  <li>Store or print individual pages for your personal, non-commercial use</li>
                </ul>

                <p className="mt-4 text-gray-700">You may not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>Republish material from this website without proper attribution</li>
                  <li>Sell, rent, or sub-license material from the website</li>
                  <li>Reproduce, duplicate, or copy material from the website for commercial purposes</li>
                  <li>Redistribute content from OhYs (unless content is specifically made for redistribution)</li>
                  <li>Use any automated systems or software to extract data from our website ("screen scraping")</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. User Account</h2>
                <p className="text-gray-700">When you create an account with us, you guarantee that:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    The information you provide us is accurate, complete, and current at all times. Providing false
                    information may result in termination of your account.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of your account credentials, including your
                    password, and for all activities that occur under your account.
                  </li>
                  <li>
                    You accept responsibility for all activities and bookings that occur under your account, whether
                    authorized by you or not.
                  </li>
                  <li>
                    You must notify us immediately upon becoming aware of any breach of security or unauthorized use of
                    your account.
                  </li>
                  <li>
                    You must be at least 18 years old and capable of forming legally binding contracts to create an
                    account and use our services.
                  </li>
                </ul>

                <p className="mt-4 text-gray-700">
                  We reserve the right to terminate accounts, remove or edit content, or cancel bookings at our sole
                  discretion if we believe you have violated these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Booking and Cancellation</h2>
                <p className="text-gray-700">When making a booking through our platform:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    All bookings are subject to availability and confirmation. No booking is guaranteed until you
                    receive a confirmation from us.
                  </li>
                  <li>
                    The prices displayed on our website are subject to change without notice until a booking is
                    confirmed.
                  </li>
                  <li>
                    Cancellation policies vary by property and are specified on each property listing. It is your
                    responsibility to review and understand the cancellation policy before making a booking.
                  </li>
                  <li>
                    Some properties may require a security deposit, which will be clearly indicated during the booking
                    process.
                  </li>
                  <li>
                    We reserve the right to cancel a booking in case of force majeure, unavailability of the property,
                    suspected fraud, or other exceptional circumstances.
                  </li>
                  <li>
                    In case of cancellation by us, you will be entitled to a full refund of any payments made, but we
                    will not be liable for any additional expenses you may incur as a result of such cancellation.
                  </li>
                  <li>
                    Special requests (e.g., early check-in, specific amenities) cannot be guaranteed and may incur
                    additional charges.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. User Conduct</h2>
                <p className="text-gray-700">You agree not to use our service:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    For any unlawful purpose or in any way that violates any applicable local, national, or
                    international law or regulation.
                  </li>
                  <li>
                    To transmit any material that is defamatory, offensive, hateful, threatening, abusive, harassing, or
                    otherwise objectionable.
                  </li>
                  <li>
                    To impersonate or attempt to impersonate OhYs, an OhYs employee, another user, or any other person
                    or entity.
                  </li>
                  <li>
                    To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the service, or
                    which may harm OhYs or users of the service.
                  </li>
                  <li>
                    To upload or transmit viruses or any other type of malicious code that will or may be used in any
                    way that will affect the functionality or operation of the service.
                  </li>
                  <li>To collect or track the personal information of others or to spam, phish, or harm others.</li>
                </ul>

                <p className="mt-4 text-gray-700">
                  When staying at a property booked through our platform, you agree to respect the property, its
                  contents, and any rules set by the property owner or manager.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700">
                  In no event shall OhYs, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                  liable for any indirect, incidental, special, consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Your access to or use of or inability to access or use the service.</li>
                  <li>
                    Any conduct or content of any third party on the service, including without limitation, any
                    defamatory, offensive, or illegal conduct of other users or third parties.
                  </li>
                  <li>Any content obtained from the service.</li>
                  <li>
                    Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
                    contract, tort (including negligence), or any other legal theory.
                  </li>
                  <li>
                    Issues related to the property or accommodation, including but not limited to quality, condition,
                    cleanliness, or safety concerns.
                  </li>
                </ul>

                <p className="mt-4 text-gray-700">
                  Our liability is limited to the amount paid by you for the booking in question. This limitation of
                  liability section applies to the maximum extent permitted by law in the applicable jurisdiction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Indemnification</h2>
                <p className="text-gray-700">
                  You agree to defend, indemnify, and hold harmless OhYs, its parent company, officers, directors,
                  employees, and agents, from and against any claims, liabilities, damages, losses, and expenses,
                  including, without limitation, reasonable legal and accounting fees, arising out of or in any way
                  connected with your access to or use of the service or your violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
                <p className="text-gray-700">
                  These terms shall be governed and construed in accordance with the laws of the country in which our
                  company is registered, without regard to its conflict of law provisions.
                </p>
                <p className="mt-4 text-gray-700">
                  Any disputes arising under or in connection with these terms shall be subject to the exclusive
                  jurisdiction of the courts in our country of registration.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a
                  revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="mt-4 text-gray-700">
                  By continuing to access or use our service after any revisions become effective, you agree to be bound
                  by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                  service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
                  and interpreted to accomplish the objectives of such provision to the greatest extent possible under
                  applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at:{" "}
                  <a href="mailto:terms@ohys.com" className="text-orange-600 hover:underline">
                    terms@ohys.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
