"use client"

import { useState } from "react"

export default function FilterButton() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible)
    const filterElement = document.getElementById("filter-sidebar")
    if (filterElement) {
      filterElement.classList.toggle("hidden")
    }
  }

  return (
    <button
            onClick={toggleFilter}
            className="flex items-center gap-2 bg-[#0f3d3e] text-white px-4 py-2 rounded-xl"
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
  )
}
