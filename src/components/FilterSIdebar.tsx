import { useState } from "react";
import { ChevronDown } from "lucide-react";

const filterData = {
  "Area Of Practice": [
    { label: "Rental Listing", count: 19 },
    { label: "Auto", count: 12 },
    { label: "Electronics", count: 8 },
    { label: "Hotels", count: 29 },
    { label: "Furniture", count: 89 },
    { label: "Pets", count: 14 },
    { label: "Food", count: 19 },
  ],
  Jurisdiction: [
    { label: "Rental Listing", count: 19 },
    { label: "Auto", count: 12 },
    { label: "Electronics", count: 8 },
    { label: "Hotels", count: 29 },
    { label: "Furniture", count: 89 },
    { label: "Pets", count: 14 },
    { label: "Food", count: 19 },
  ],
};

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState({
    "Area Of Practice": true,
    Jurisdiction: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded-xl shadow-md w-full max-w-xs">
      <div className="bg-green-900 text-white p-3 rounded-lg flex justify-between items-center">
        <span className="text-lg font-semibold">Filter</span>
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
      </div>

      {Object.entries(filterData).map(([sectionTitle, items]) => (
        <div
          key={sectionTitle}
          className="bg-white border rounded-xl shadow-sm"
        >
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
            onClick={() => toggleSection(sectionTitle)}
          >
            <h4 className="font-medium">{sectionTitle}</h4>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openSections[sectionTitle] ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSections[sectionTitle] && (
            <div className="px-4 pb-3 space-y-2 text-sm">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center text-gray-700"
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={sectionTitle}
                      className="text-green-700"
                    />
                    <span>{item.label}</span>
                  </label>
                  <span className="text-green-700 font-medium text-sm">
                    {item.count.toString().padStart(2, "0")}
                  </span>
                </div>
              ))}
              <div className="text-green-600 font-medium pt-1 cursor-pointer">
                Show More Categories
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
