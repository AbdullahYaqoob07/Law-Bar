"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Team members data (4 per slide)
const teamMembers = [
  // Slide 1
  [
    {
      name: "Jacob Jones",
      title: "UI-UX Design Expert",
      image: "/girl.png",
    },
    {
      name: "Jacob Jones",
      title: "UI-UX Design Expert",
      image: "/girl.png",
    },
    {
      name: "Jacob Jones",
      title: "UI-UX Design Expert",
      image: "/girl.png",
    },
    {
      name: "Jacob Jones",
      title: "UI-UX Design Expert",
      image: "/girl.png",
    },
  ],
  // Slide 2
  [
    {
      name: "Emma Wilson",
      title: "Legal Content Writer",
      image: "/girl.png",
    },
    {
      name: "Michael Brown",
      title: "SQE Instructor",
      image: "/girl.png",
    },
    {
      name: "Sarah Davis",
      title: "Course Developer",
      image: "/girl.png",
    },
    {
      name: "Robert Johnson",
      title: "Legal Consultant",
      image: "/girl.png",
    },
  ],
  // Slide 3
  [
    {
      name: "Jennifer Lee",
      title: "Marketing Director",
      image: "/girl.png",
    },
    {
      name: "David Wilson",
      title: "Content Strategist",
      image: "/girl.png",
    },
    {
      name: "Lisa Thompson",
      title: "Customer Support",
      image: "/girl.png",
    },
    {
      name: "James Miller",
      title: "Video Producer",
      image: "/girl.png",
    },
  ],
  // Slide 4
  [
    {
      name: "Patricia Moore",
      title: "Law Professor",
      image: "/girl.png",
    },
    {
      name: "Thomas Clark",
      title: "Legal Researcher",
      image: "/girl.png",
    },
    {
      name: "Nancy White",
      title: "Curriculum Designer",
      image: "/girl.png",
    },
    {
      name: "Daniel Taylor",
      title: "Academic Director",
      image: "/girl.png",
    },
  ],
  // Slide 5
  [
    {
      name: "Karen Martin",
      title: "Operations Manager",
      image: "/girl.png",
    },
    {
      name: "Steven Anderson",
      title: "Financial Advisor",
      image: "/girl.png",
    },
    {
      name: "Elizabeth Wright",
      title: "HR Specialist",
      image: "/girl.png",
    },
    {
      name: "Richard Harris",
      title: "IT Support",
      image: "/girl.png",
    },
  ],
];


export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  // Go to specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }
    
  return (
    <div className="min-h-screen">
      {/* Full-width background image with overlay */}
      <div className="h-[500px] relative">
  {/* Background Image */}
  <Image
    src="/aboutus.jpg"
    alt="About us background"
    fill
    className="object-cover z-0"
    priority
  />

  {/* Navigation Bar - Positioned absolutely on top */}
  <div className="absolute top-0 left-0 right-0 z-20 w-full px-8 pt-6">
    <Header/>
  </div>

  {/* Dark overlay for background image */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  {/* Hero Section Content */}
  <div className="absolute inset-0 flex flex-col justify-center px-16 z-20">
    <div className="max-w-6xl mx-auto w-full mt-2">
      <p className="text-white text-sm tracking-widest font-poppins uppercase">WE ARE DEDICATED</p>
      <h1 className="text-white text-6xl font-semibold font-poppins mt-4">About Us</h1>
    </div>
  </div>
</div>

      {/* Content Section */}
      <div className="bg-[#FAFAFA] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left column - Text content */}
            <div className="lg:w-2/3">
              <h2 className="text-[#0f3d3e] text-4xl font-bold leading-tight">
                International Academy For Legal Education, Catering To Aspiring Lawyers Worldwide.
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-gray-700 italic leading-relaxed">
                  Law & Bar Academy is a UK-based online educational platform dedicated to delivering accessible, high-quality legal education to the lawyers & legal professionals worldwide.
                </p>
                <p className="text-gray-700 italic leading-relaxed">
                  From online courses to expertly crafted law books and audiobooks, we provide an all-encompassing resource for learners and professionals at every stage of their legal journey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <p className="text-gray-700 text-sm leading-relaxed">
                  At Law & Bar Academy, we bring together experts from diverse legal fields to deliver meticulously crafted courses that blend theory with real-world application. Our courses cover essential legal areas such as contract drafting, international law, intellectual property, and preparation for Bar exams like the SQE.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Each course is carefully designed to ensure learners gain foundational knowledge and practical insights. Law & Bar Academy is more than a learning platform; it's a global community committed to education and advancement.
                </p>
              </div>
              <p className="text-[#0f3d3e] text-2xl italic font-medium mt-12">
                Continue your legal career journey with Law & Bar Academy – where knowledge meets opportunity.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center bg-[#0f3d3e] text-white px-8 py-3 rounded-xl">
                  View Courses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="lg:w-1/3">
              <Image
                  src="/book.png"
                alt="Legal education"
                width={600}
                height={400}
                className="rounded-lg w-full h-[80%]"
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mt-24 text-center">
            {[
              { label: "Our Active Students", value: "+12K" },
              { label: "Our Total Tutors", value: "+1.5K" },
              { label: "Our Winning Award", value: "+14" },
              { label: "Our Team Member", value: "+49" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[#0f3d3e] text-5xl font-bold">{item.value}</p>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row gap-16 mt-24 items-center">
            <div className="lg:w-1/3">
              <Image
                src="/gavel.png"
                alt="Law books"
                width={400}
                height={400}
                className="rounded-lg w-full h-[250px] object-cover"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-[#0f3d3e] text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-[#0F3D3E] leading-relaxed italic">
                Our mission is to make quality legal education accessible to everyone, whether you’re an aspiring Lawyer, legal professional or law student interested in understanding the law better. By blending flexible online learning with comprehensive written and audio resources, we’re able to break down geographical and financial barriers, making legal expertise available to learners worldwide
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-16 mt-24 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-[#0f3d3e] text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-[#0F3D3E] leading-relaxed italic">
              Our vision is to make top-ter leagal education accessible worldwide. We’re dedicated to empowering individuals and professionals through courses, books and audiobooks that bring practical, real-world legal knowledge to everyone, everywhere, anywhere. We partner with like minded sponsors to build a global community that values knowledge, fairness and the highest standards in legal education. Together, we can shape the future of accessible, impactful legal learning.</p>
            </div>
            <div className="lg:w-1/3">
              <Image
                src="/gavel.png"
                alt="Legal books"
                width={400}
                height={250}
                className="rounded-lg w-full h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Meet Our Team */}
          <div className="mt-24">
            <h2 className="text-[#0f3d3e] text-4xl font-bold text-center mb-12">Meet Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers[currentSlide].map((member, index) => (
  <div key={index} className="bg-white rounded-lg shadow-sm p-4">
    <Image
      src={member.image !== "/" ? member.image : "/placeholder.svg"}
      alt={member.name}
      width={300}
      height={300}
      className="w-full h-auto rounded-lg object-cover"
    />
    <div className="text-center mt-4">
      <h3 className="font-medium text-gray-900">{member.name}</h3>
      <p className="text-gray-600 text-sm">{member.title}</p>
    </div>
  </div>
))}
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center items-center mt-8">
              <div className="flex space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-end mt-4">
              <button
                onClick={goToPrevSlide}
                className="p-2 rounded-md border border-gray-300 mr-2 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextSlide}
                className="p-2 rounded-md bg-[#0f3d3e] text-white hover:bg-[#0a2e2f] transition-colors"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}