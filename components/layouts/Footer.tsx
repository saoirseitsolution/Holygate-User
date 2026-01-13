"use client"

import Link from "next/link"
import { Logowhite } from "@/constants/images"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo and branding */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src={Logowhite} alt="logo" width={100} height={100} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-100 leading-tight opacity-20">HOLY GATE</h2>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Book a demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with divider */}
        <div className="border-t border-indigo-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400">© 2022 Welcome. All right reserved.</div>

            {/* Legal links */}
            <div className="flex justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex justify-start md:justify-end gap-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-7.029 3.746 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.384 3.704 4.361v5.584zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.767-1.71 1.958-1.71 1.191 0 1.915.755 1.94 1.71 0 .951-.749 1.71-1.983 1.71zm1.581 11.019H3.757V9.724h3.161v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
