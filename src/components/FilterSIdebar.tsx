"use client"

import { useState } from "react"

type FilterCategory = {
  name: string
  count: number
}

type FilterSection = {
  title: string
  categories: FilterCategory[]
}

type FilterSidebarProps = {
  onClick: () => void
}

export default function FilterSidebar({ onClick }: FilterSidebarProps) {
  // State to track if filter sections are visible
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    "Area Of Practice": true,
    Jurisdiction: true,
  })

  // State to track which categories are selected
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({})

  // Toggle filter visibility and call the onClick prop
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible)
    onClick()
  }

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Filter sections data - only Area Of Practice and Jurisdiction
  const filterSections: FilterSection[] = [
    {
      title: "Area Of Practice",
      categories: [
        { name: "Criminal Law", count: 19 },
        { name: "Family Law", count: 12 },
        { name: "Corporate Law", count: 8 },
        { name: "Property Law", count: 29 },
        { name: "Constitutional Law", count: 89 },
        { name: "Intellectual Property", count: 14 },
        { name: "Tax Law", count: 19 },
      ],
    },
    {
      title: "Jurisdiction",
      categories: [
        { name: "United Kingdom", count: 19 },
        { name: "United States", count: 12 },
        { name: "European Union", count: 8 },
        { name: "Australia", count: 29 },
        { name: "Canada", count: 89 },
        { name: "International", count: 14 },
        { name: "Other", count: 19 },
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Filter Button */}
      <button
        onClick={toggleFilter}
         className="flex items-center gap-2 bg-[#0f3d3e] text-white px-4 py-2 rounded-xl"
        aria-controls="filter-sections"
      >
        Filter
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M3 5.25H15M5.25 9H12.75M7.5 12.75H10.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
      </button>

      {/* Filter Sections */}
      {isFilterVisible && (
        <div id="filter-sections" className="mb-8">
          {filterSections.map((section, index) => (
            <div key={index} className="mb-6 bg-white rounded-3xl shadow-md overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-100"
                aria-expanded={expandedSections[section.title]}
                aria-controls={`section-content-${index}`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSections[section.title] ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {expandedSections[section.title] && (
                <div id={`section-content-${index}`} className="px-6 py-4">
                  <ul className="space-y-4">
                    {section.categories.map((category, catIndex) => (
                      <li key={catIndex} className="flex justify-between items-center">
                        <label className="flex items-center cursor-pointer">
                          <div className="relative w-5 h-5 mr-3">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={!!selectedCategories[category.name]}
                              onChange={() => toggleCategory(category.name)}
                            />
                            <div
                              className={`w-5 h-5 border rounded-full ${
                                selectedCategories[category.name] ? "border-teal-500" : "border-gray-300"
                              }`}
                            ></div>
                            {selectedCategories[category.name] && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <span className="text-gray-700">{category.name}</span>
                        </label>
                        <span className="text-teal-400">{category.count.toString().padStart(2, "0")}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-teal-500 hover:text-teal-600 font-medium">Show More Categories</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
