export default function OurTutors() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/gavel-img.png')" }}
        >
          <div className="absolute inset-0 bg-black/50">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Meet Our Lecturers</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experienced. Diverse. Globally Recognized.
              </p>
              <p className="mt-4 text-base text-gray-300">
                Our team consists of distinguished legal professionals from around the world—each bringing a wealth of legal knowledge, practical insight, and teaching excellence. From international law to emerging fields like legal tech and AI, our instructors are shaping the future of legal education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lecturers Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Repeat this block for each lecturer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="aspect-[3/4] w-full object-cover"
                src="/person.png"
                alt="Jessie Jones"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Jessie Jones</h3>
                <p className="text-base leading-7 text-gray-600">LLB Program Leader</p>
              </div>
            </div>
            {/* End lecturer block */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Join World's largest law learning platform today
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Start learning by registering for free
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#0F3A62] px-5 py-3 text-base font-medium text-white hover:bg-[#0F3A62]/90"
                  >
                    Apply for lecture
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
