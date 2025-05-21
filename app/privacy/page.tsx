"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2 mb-6">Last Updated: May 21, 2025</p>

            <hr className="border-gray-200 mb-8" />

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to OhYs Luxury Stays. We respect your privacy and are committed to protecting your personal
                  data. This privacy policy will inform you about how we look after your personal data when you visit
                  our website (regardless of where you visit it from), use our services, and tell you about your privacy
                  rights and how the law protects you.
                </p>
                <p className="mt-4 text-gray-700">
                  This website is not intended for children and we do not knowingly collect data relating to children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. The Data We Collect About You</h2>
                <p className="text-gray-700">
                  Personal data, or personal information, means any information about an individual from which that
                  person can be identified. We may collect, use, store and transfer different kinds of personal data
                  about you which we have grouped together as follows:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    <strong>Identity Data</strong> includes first name, last name, username or similar identifier,
                    title, date of birth, and gender.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes billing address, delivery address, email address, and
                    telephone numbers.
                  </li>
                  <li>
                    <strong>Financial Data</strong> includes payment card details and payment history.
                  </li>
                  <li>
                    <strong>Transaction Data</strong> includes details about payments to and from you and other details
                    of accommodations you have booked through us.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser
                    type and version, time zone setting and location, browser plug-in types and versions, operating
                    system and platform, and other technology on the devices you use to access this website.
                  </li>
                  <li>
                    <strong>Profile Data</strong> includes your username and password, bookings made by you, your
                    preferences, feedback, and survey responses.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how you use our website and services.
                  </li>
                  <li>
                    <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                    from us and our third parties and your communication preferences.
                  </li>
                </ul>

                <p className="mt-4 text-gray-700">
                  We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic
                  data for any purpose. Aggregated Data could be derived from your personal data but is not considered
                  personal data in law as this data will not directly or indirectly reveal your identity.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Personal Data</h2>
                <p className="text-gray-700">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your
                  personal data in the following circumstances:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    Where we need to perform the contract we are about to enter into or have entered into with you, such
                    as processing your booking, managing your stay, or facilitating payment.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those of a third party) and your interests
                    and fundamental rights do not override those interests, such as improving our services, marketing,
                    or preventing fraud.
                  </li>
                  <li>
                    Where we need to comply with a legal obligation, such as maintaining proper business records or
                    responding to a court order.
                  </li>
                  <li>
                    Where you have given consent to the processing of your personal data for one or more specific
                    purposes, such as sending you promotional materials.
                  </li>
                </ul>

                <p className="mt-4 text-gray-700">
                  <strong>Marketing Communications</strong>
                </p>
                <p className="text-gray-700">
                  We strive to provide you with choices regarding certain personal data uses, particularly around
                  marketing and advertising. You can opt-out of marketing communications at any time by clicking the
                  "unsubscribe" link in any email we send you or by contacting us directly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                <p className="text-gray-700">
                  We have put in place appropriate security measures to prevent your personal data from being
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. These measures
                  include:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Encryption of sensitive data</li>
                  <li>Secure user authentication protocols</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Staff training on data protection and security practices</li>
                </ul>

                <p className="mt-4 text-gray-700">
                  In addition, we limit access to your personal data to those employees, agents, contractors and other
                  third parties who have a business need to know. They will only process your personal data on our
                  instructions and they are subject to a duty of confidentiality.
                </p>

                <p className="mt-4 text-gray-700">
                  We have put in place procedures to deal with any suspected personal data breach and will notify you
                  and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
                <p className="text-gray-700">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                  collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                  reporting requirements.
                </p>

                <p className="mt-4 text-gray-700">
                  To determine the appropriate retention period for personal data, we consider the amount, nature and
                  sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of
                  your personal data, the purposes for which we process your personal data and whether we can achieve
                  those purposes through other means, and the applicable legal, regulatory, tax, accounting or other
                  requirements.
                </p>

                <p className="mt-4 text-gray-700">
                  In some circumstances, we will anonymize your personal data (so that it can no longer be associated
                  with you) for research or statistical purposes, in which case we may use this information indefinitely
                  without further notice to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Your Legal Rights</h2>
                <p className="text-gray-700">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal
                  data, including the right to:
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>
                    <strong>Request access</strong> to your personal data (commonly known as a "data subject access
                    request"). This enables you to receive a copy of the personal data we hold about you and to check
                    that we are lawfully processing it.
                  </li>
                  <li>
                    <strong>Request correction</strong> of the personal data that we hold about you. This enables you to
                    have any incomplete or inaccurate data we hold about you corrected.
                  </li>
                  <li>
                    <strong>Request erasure</strong> of your personal data. This enables you to ask us to delete or
                    remove personal data where there is no good reason for us continuing to process it.
                  </li>
                  <li>
                    <strong>Object to processing</strong> of your personal data where we are relying on a legitimate
                    interest and there is something about your particular situation which makes you want to object to
                    processing on this ground.
                  </li>
                  <li>
                    <strong>Request restriction of processing</strong> your personal data. This enables you to ask us to
                    suspend the processing of your personal data in certain scenarios.
                  </li>
                  <li>
                    <strong>Request transfer</strong> of your personal data to you or to a third party. We will provide
                    to you, or a third party you have chosen, your personal data in a structured, commonly used,
                    machine-readable format.
                  </li>
                  <li>
                    <strong>Right to withdraw consent</strong> where we are relying on consent to process your personal
                    data. This will not affect the lawfulness of any processing carried out before you withdraw your
                    consent.
                  </li>
                </ul>

                <p className="mt-4 text-gray-700">
                  If you wish to exercise any of these rights, please contact us using the details provided below. You
                  will not have to pay a fee to access your personal data (or to exercise any of the other rights).
                  However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.
                  Alternatively, we could refuse to comply with your request in these circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. International Transfers</h2>
                <p className="text-gray-700">
                  We may share your personal data within our group of companies and with external third parties, which
                  may involve transferring your data outside your country of residence. Whenever we transfer your
                  personal data internationally, we ensure a similar degree of protection is afforded to it by
                  implementing appropriate safeguards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  This website may include links to third-party websites, plug-ins and applications. Clicking on those
                  links or enabling those connections may allow third parties to collect or share data about you. We do
                  not control these third-party websites and are not responsible for their privacy statements. When you
                  leave our website, we encourage you to read the privacy policy of every website you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Cookies</h2>
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to track the activity on our website and to hold
                  certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie
                  is being sent. However, if you do not accept cookies, you may not be able to use some portions of our
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
                  <a href="mailto:privacy@ohys.com" className="text-orange-600 hover:underline">
                    privacy@ohys.com
                  </a>
                </p>
                <p className="mt-4 text-gray-700">
                  You have the right to make a complaint at any time to the data protection authority for your country.
                  We would, however, appreciate the chance to deal with your concerns before you approach the authority,
                  so please contact us in the first instance.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
