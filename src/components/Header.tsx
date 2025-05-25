"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from 'next/image'
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <header className="w-full px-4 sm:w-[90%] bg-white shadow-lg py-4 sm:py-5 sm:px-6 mt-2 sm:mt-6 mx-auto rounded-full relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 text-[#0f3d3e]">
              <Image 
                src="/logo.png"
                alt="Law & Bar Academy Logo"
                width={32}
                height={32}
                className="sm:w-[40px] sm:h-[40px] object-contain"
              />
              <h1 className="text-lg sm:text-xl text-black font-medium hidden sm:block">Law & Bar Academy</h1>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 border-0 bg-transparent gap-1.5 z-50"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <nav className="flex flex-col text-black pt-24 px-6 space-y-4">
            <Link href="/lawcourses" className="text-xl font-medium py-2 hover:text-[#0f3d3e] transition-colors" onClick={toggleMenu}>
              Law Courses
            </Link>
            <Link href="/sqe" className="text-xl font-medium py-2 hover:text-[#0f3d3e] transition-colors" onClick={toggleMenu}>
              SQE
            </Link>
            <Link href="/lawbooks" className="text-xl font-medium py-2 hover:text-[#0f3d3e] transition-colors" onClick={toggleMenu}>
              Law Books
            </Link>
            <Link href="/blog" className="text-xl font-medium py-2 hover:text-[#0f3d3e] transition-colors" onClick={toggleMenu}>
              Blog
            </Link>
            <Link 
              href="/login" 
              className="bg-[#0f3d3e] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 mt-4"
              onClick={toggleMenu}
            >
              Login <ArrowRight size={20} />
            </Link>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-poppins font-medium absolute left-1/2 transform -translate-x-1/2">
          <Link href="/lawcourses" className="flex items-center gap-1 text-black hover:text-[#0f3d3e] transition-colors">
            Law Courses <span className="text-lg">+</span>
          </Link>
          <Link href="/sqe" className="flex items-center gap-1 text-black hover:text-[#0f3d3e] transition-colors">
            SQE <span className="text-lg">+</span>
          </Link>
          <Link href="/lawbooks" className="flex items-center gap-1 text-black hover:text-[#0f3d3e] transition-colors">
            Law Books <span className="text-lg">+</span>
          </Link>
          <Link href="/blog" className="flex items-center gap-1 text-black hover:text-[#0f3d3e] transition-colors">
            Blog <span className="text-lg">+</span>
          </Link>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="/login">
            <button className="bg-[#0f3d3e] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
              Login <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}