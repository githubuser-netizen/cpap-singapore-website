import Image from "next/image"

// Example of how your professional image would be used
export function HeroImageExample() {
  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20">
      <Image
        src="/images/jo-ng-hero.png"
        alt="Jo Ng, RPSGT - Certified Sleep Technologist with CPAP equipment"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 50vw" // Mobile: full width, Desktop: half width
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-sm rounded-lg border border-purple-800/30">
        <p className="text-white font-medium">
          Jo Ng, RPSGT - Your certified sleep technologist guiding you to better sleep with expert CPAP therapy support.
        </p>
      </div>
    </div>
  )
}

// Alternative: Product showcase version
export function ProductShowcaseExample() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/images/jo-ng-hero.png"
          alt="Professional CPAP consultation with Jo Ng"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Expert CPAP Guidance</h2>
        <p className="text-gray-300">
          With years of experience as an RPSGT-certified sleep technologist, I provide personalized support to ensure
          your CPAP therapy success.
        </p>
      </div>
    </div>
  )
}
