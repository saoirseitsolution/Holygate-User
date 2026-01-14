"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { logo1 } from "@/constants/images"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)

  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Dhyanam", href: "/dhyanam" },
    { label: "Nearby Churches", href: "/nearby-churches" },
    { label: "Q&A", href: "/q&a" },
    { label: "Miracle", href: "/miracles" },
    { label: "Saba", href: "/saba" },
  ]

  const moreItems = [
    { label: "Anti-Drug", href: "#" },
    { label: "Prayer", href: "#" },
    { label: "Song", href: "#" },
    {label : "Travel", href: "/travel"}
  ]

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
            <Image src={logo1} alt="logo" width={50} height={50} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 flex-1 ml-12">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-indigo-900 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-900 text-sm font-medium transition-colors">
              <span>More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              {moreItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 first:rounded-t-md last:rounded-b-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Language Selector */}
          <div className="flex items-center space-x-1 text-gray-600 hover:text-indigo-900 cursor-pointer transition-colors">
            <span className="text-sm font-medium">Eng</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <button className="bg-indigo-900 hover:bg-indigo-950 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Login/Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="text-gray-600 hover:text-indigo-900 cursor-pointer">
            <ChevronDown className="w-4 h-4" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-indigo-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-indigo-900 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile More Dropdown */}
            <div>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-indigo-900 text-sm font-medium transition-colors w-full"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isMoreDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {moreItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 hover:text-indigo-900 text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-900 text-sm font-medium w-full">
                <span>Eng</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="w-full bg-indigo-900 hover:bg-indigo-950 text-white rounded-full text-sm font-medium py-2 transition-colors">
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
