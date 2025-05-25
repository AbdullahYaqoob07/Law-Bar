"use client"

import Image from "next/image"
import { Users, Award, HeadphonesIcon, DollarSign, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function BecomeATutor() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Floating header scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHeaderVisible(false)
            } else {
                setIsHeaderVisible(true)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const features = [
        {
            icon: Users,
            title: "Trusted by Thousands",
            description:
                "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        },
        {
            icon: Award,
            title: "Award-Winning Courses",
            description:
                "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
        },
        {
            icon: HeadphonesIcon,
            title: "Help and support",
            description: "Assistance throughout your course creation journey.",
        },
        {
            icon: DollarSign,
            title: "Competitive Revenue Share",
            description:
                "We offer competitive profit sharing models based on your value production choices and latest tools and technologies.",
        },
    ]

    const faqs = [
        {
            question: "What should the sample video include?",
            answer:
                "The sample video should showcase your teaching style, expertise in the subject matter, and ability to explain complex legal concepts clearly. Include a brief introduction about yourself and demonstrate how you would structure a typical lesson.",
        },
        {
            question: "When can I expect feedback on my sample video?",
            answer:
                "Our review team typically provides feedback within 5-7 business days after submission. You'll receive detailed comments on your teaching approach and suggestions for improvement if needed.",
        },
        {
            question: "What happens after I submit my sample video?",
            answer:
                "After submission, our content review team will evaluate your video based on teaching quality, subject expertise, and presentation skills. You'll receive feedback and next steps via email.",
        },
        {
            question: "When can I sign the contract?",
            answer:
                "Once your application and sample video are approved, we'll send you the instructor contract within 2-3 business days. You can review and sign it electronically through our platform.",
        },
        {
            question: "Can I request to review the contract at an earlier stage?",
            answer:
                "Yes, we can provide a sample contract for your review during the application process. This helps you understand the terms and conditions before investing time in creating your sample content.",
        },
        {
            question: "How is the revenue share calculated?",
            answer:
                "Revenue sharing is based on course enrollment and completion rates. Instructors typically receive 50-70% of net revenue, with higher percentages for exclusive content and high-performing courses.",
        },
        {
            question: "Do you offer media or editing support?",
            answer:
                "Yes, we provide comprehensive media support including video editing, graphic design, and technical assistance to help you create professional-quality course content.",
        },
        {
            question: "How many courses can I create?",
            answer:
                "There's no limit to the number of courses you can create. We encourage instructors to develop multiple courses in their areas of expertise to maximize their earning potential.",
        },
        {
            question: "Can I update my course after it's been released?",
            answer:
                "You can update your course content, add new modules, and make improvements based on student feedback. We encourage keeping content current and relevant.",
        },
    ]

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    return (
        <div className="min-h-screen font-poppins text-poppins">
            {/* Floating Header */}
            <div className={`fixed top-0 left-0 w-full bg-[#A9C7C0]/50 right-0 z-50 transition-transform duration-300 ${
                isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="backdrop-blur-xl border-b border-gray-200">
                    <Header />
                </div>
            </div>

            {/* Add padding to account for floating header */}
            <div className="pt-0">
                {/* Hero Section */}
                <section className="relative bg-[#A9C7C0]/50 text-white py-20 md:py-32 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/lecture.png"
                            alt="Person working on laptop"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="relative max-w-6xl mx-auto">
                        <div className="max-w-3xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Inspire Future Legal Professionals Across the World
                            </h1>
                            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200 max-w-2xl">
                                Join us in creating an exceptional legal learning experience.
                            </p>
                            <button
                                className="px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold transition-colors hover:bg-[#8fb8b1] text-white bg-[#A9C7C0] cursor-pointer"
                            >
                                Apply as Lecturer
                            </button>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="py-12 md:py-16 px-4" style={{ backgroundColor: "#A9C7C0" }}>
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Join Law & Bar Academy as a Lecturer</h2>
                            <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
                                Inspire the next generation of legal minds by teaching what you know best.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <div key={index} className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                                                style={{ backgroundColor: "#A9C7C0" }}
                                            >
                                                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Course Creation Steps Section */}
                <section className="py-12 md:py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
                                Create Your Law Course With Just 3 Easy Steps
                            </h2>
                        </div>

                        {/* Steps */}
                        <div className="relative">
                            {/* Curved Doodle Connectors - Hidden on mobile */}
                            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                                {/* Connector from Step 1 to Step 2 */}
                                <svg
                                    className="absolute left-1/4 top-1/2 transform -translate-y-1/2"
                                    width="200"
                                    height="100"
                                    viewBox="0 0 200 100"
                                >
                                    <path
                                        d="M10 50 Q50 20, 100 45 T190 50"
                                        stroke="#9CA3AF"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Connector from Step 2 to Step 3 */}
                                <svg
                                    className="absolute right-1/4 top-1/2 transform -translate-y-1/2"
                                    width="200"
                                    height="100"
                                    viewBox="0 0 200 100"
                                >
                                    <path
                                        d="M10 50 Q50 80, 100 55 T190 50"
                                        stroke="#9CA3AF"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
                                {/* Step 1 */}
                                <div className="text-center">
                                    <div
                                        className="relative mx-auto mb-4 md:mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        style={{ backgroundColor: "#0F3D3E", maxWidth: "280px" }}
                                    >
                                        <div className="p-4 md:p-6 text-white">
                                            <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white text-gray-800 rounded-full font-bold mb-3 md:mb-4 mx-auto">
                                                1
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Prepare Your Course Outline</h3>
                                            <p className="text-xs md:text-sm text-gray-200 mb-3 md:mb-4">Develop a course that aligns with your expertise</p>
                                        </div>
                                        <div className="h-24 md:h-32 bg-gray-200">
                                            <Image
                                                src="/cup-couple.jpg"
                                                alt="Person working on course outline"
                                                width={280}
                                                height={280}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="text-center">
                                    <div
                                        className="relative mx-auto mb-4 md:mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        style={{ backgroundColor: "#A9C7C0", maxWidth: "280px" }}
                                    >
                                        <div className="p-2 md:p-4 text-gray-800">
                                            <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white text-gray-800 rounded-full font-bold mb-3 md:mb-4 mx-auto">
                                                2
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Record Your Sessions</h3>
                                            <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
                                                Capture your lessons using high-quality video production
                                            </p>
                                        </div>
                                        <div className="h-20 md:h-24 bg-gray-200">
                                            <Image
                                                src="/focus.jpg"
                                                alt="Recording equipment setup"
                                                width={280}
                                                height={280}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="text-center">
                                    <div
                                        className="relative mx-auto mb-4 md:mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        style={{ backgroundColor: "#0F3D3E", maxWidth: "280px" }}
                                    >
                                        <div className="p-4 md:p-6 text-white">
                                            <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white text-gray-800 rounded-full font-bold mb-3 md:mb-4 mx-auto">
                                                3
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Submit for Review</h3>
                                            <p className="text-xs md:text-sm text-gray-200 mb-3 md:mb-4">
                                                Submit your course for review and get feedback to ensure your content is comprehensive and
                                                engaging
                                            </p>
                                        </div>
                                        <div className="h-24 md:h-32 bg-gray-200">
                                            <Image
                                                src="/typing.png"
                                                alt="Person typing on laptop"
                                                width={280}
                                                height={280}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="text-center mt-8 md:mt-12">
                                <button
                                    className="px-6 py-2 md:px-8 md:py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                                    style={{ backgroundColor: "#0F3D3E" }}
                                >
                                    Download the course creation Guidelines
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-8 md:py-12 px-4" style={{ backgroundColor: "#0F3D3E" }}>
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-white italic">
                            "Remember, Richer Content Can Lead To Higher Revenues"
                        </blockquote>
                    </div>
                </section>

                {/* Instructor Application Form Section */}
                <section className="py-12 md:py-16 px-4 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                                Become an instructor and get free instructional resources.
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">
                                Learn from our experts the course creation guidelines and production techniques.
                            </p>
                        </div>

                        {/* Application Form */}
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 lg:p-12">
                            <form className="space-y-4 md:space-y-6">
                                {/* First Name and Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter First Name"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Last Name"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Phone Number"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* LinkedIn Profile and Experience */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">LinkedIn Profile*</label>
                                        <input
                                            type="url"
                                            placeholder="Please copy and paste your LinkedIn Profile"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                            How many years of experience do you have ?*
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter your Experience"
                                            className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Topics */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                        What are the topics that you would like to introduce on the platform?*
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Enter your topics here"
                                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical text-sm md:text-base"
                                    />
                                </div>

                                {/* Resume Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Upload your resume</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center hover:border-gray-400 transition-colors">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 md:mb-4">
                                                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-2">Click to upload or drag and drop</p>
                                            <p className="text-xs md:text-sm text-gray-400">Max. File size: 25MB</p>

                                            {/* Sample upload progress indicator */}
                                            <div className="mt-3 md:mt-4 w-full max-w-xs">
                                                <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 mb-1">
                                                    <span>Networking_Resume.pdf</span>
                                                    <span>100%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                                                    <div className="bg-green-500 h-1.5 md:h-2 rounded-full" style={{ width: "100%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                                    </div>
                                </div>

                                {/* Video Link */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                        Upload your Introductory Video Link
                                    </label>
                                    <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                                        Please upload a short video showcasing your expertise and walking us through your proposed course
                                        outline.
                                    </p>
                                    <input
                                        type="url"
                                        placeholder="Enter your Video Link (google drive link, onedrive link, youtube link)"
                                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm md:text-base"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-4 md:pt-6">
                                    <button
                                        type="submit"
                                        className="px-8 py-2 md:px-12 md:py-3 text-white bg-[#0F3D3E] rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                                    >
                                        Apply as Lecturer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white">
                    {/* Mission Statement Header */}
                    <div className="py-8 md:py-12 px-4" style={{ backgroundColor: "#0F3D3E" }}>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-white text-base md:text-lg leading-relaxed">
                                Our priority is to create high-quality, impactful law courses that empower lawyers worldwide. Together, we
                                aim to shape the future of legal education with integrity and excellence.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Content */}
                    <div className="py-12 md:py-16 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                                {/* Left Column - FAQ Info */}
                                <div className="lg:col-span-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Frequently Asked Questions</h2>
                                    <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                                        Still you have any questions? Contact us via hello@lawbaracademy.com
                                    </p>
                                    <button
                                        className="px-4 py-2 md:px-6 md:py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
                                        style={{ backgroundColor: "#0F3D3E" }}
                                    >
                                        See All FAQ
                                    </button>
                                </div>

                                {/* Right Column - FAQ List */}
                                <div className="lg:col-span-2">
                                    <div className="space-y-3 md:space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg">
                                                <button
                                                    onClick={() => toggleFAQ(index)}
                                                    className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                                >
                                                    <span className="font-medium text-gray-800 text-sm md:text-base">{faq.question}</span>
                                                    <div
                                                        className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ml-2 md:ml-4"
                                                        style={{ backgroundColor: "#A9C7C0" }}
                                                    >
                                                        <Plus
                                                            className={`w-3 h-3 md:w-4 md:h-4 text-gray-800 transition-transform ${openFAQ === index ? "rotate-45" : ""
                                                                }`}
                                                        />
                                                    </div>
                                                </button>
                                                {openFAQ === index && (
                                                    <div className="px-4 pb-3 md:px-6 md:pb-4">
                                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}