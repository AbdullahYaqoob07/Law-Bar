import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from 'next/image'
import { ArrowRight } from "lucide-react"

export default function Header() {
  return (
    <header className="w-[90%] bg-white shadow-lg py-5 px-6 mt-6 ml-14 rounded-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 text-[#0f3d3e]">
              <Image 
                src="/logo.png"
                alt="Law & Bar Academy Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h1 className="text-xl text-black font-medium">Law & Bar Academy</h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-poppins font-medium">
          <NavItem href="/lawcourses" label="Law Courses" />
          <NavItem href="/mock-tests" label="SQE" />
          <NavItem href="/lawbooks" label="Law Books" />
          <NavItem href="/blog" label="Blog" />
          <Link href="/Login">
            <button className="bg-[#0f3d3e] mr-8 ml-50 text-white py-2 px-4 rounded-lg hover:bg-[#0f3d3e] transition-colors flex items-center gap-2">
              Login <ArrowRight />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string
  label: string
}

function NavItem({ href, label }: NavItemProps) {
  return (
    <Link href={href} className="flex items-center gap-1 text-black hover:text-[#0f3d3e] transition-colors">
      {label} <span className="text-lg">+</span>
    </Link>
  )
}
