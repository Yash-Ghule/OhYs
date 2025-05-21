import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-orange-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-orange-600">O</span>h<span className="text-orange-600">Y</span>s
              </span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/stays" className="text-gray-600 hover:text-orange-600 transition-colors">
              Stays
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-orange-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">© 2025 OhYs. All rights reserved.</div>
      </div>
    </footer>
  )
}
