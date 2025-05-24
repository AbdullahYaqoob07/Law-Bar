import Image from "next/image"

export default function ProfileCard() {
  return (
    <div className="bg-teal-900 rounded-xl p-6 text-white">
    <div className="flex items-start gap-4 mb-6">
      {/* Profile Image */}
      <div className="rounded-2xl overflow-hidden border-2 border-white/10 w-20 h-20">
        <Image
          src="/man.png"
          alt="Profile"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* LinkedIn Icon - positioned to the right of the image */}
      <div className="mt-12">
        <a
          href="#"
          className="bg-[#0077B5] p-2 inline-flex items-center justify-center w-7 h-7"
          aria-label="LinkedIn Profile"
        >
         <Image src="/icon.png" width={20} height={20}  alt="icon" />
        </a>
      </div>
    </div>

    {/* Name and Title */}
    <h2 className="text-2xl font-bold mb-2">Tamás Hám-Szabó</h2>
    <p className="text-sm mb-4">
      Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool
    </p>

    {/* Divider */}
    <div className="border-t border-white/20 mb-4"></div>

    {/* Bio */}
    <p className="text-sm text-white/90 leading-relaxed">
      With 11 years in SaaS, I&apos;ve built MillionVerifier and SAAS First. Passionate about SaaS, data, and
      AI. Let's connect if you share the same drive for success!
    </p>
  </div>
  )
}
