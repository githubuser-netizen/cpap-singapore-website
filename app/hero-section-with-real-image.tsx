import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSectionWithRealImage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/jo-ng-hero.png"
          alt="Jo Ng, RPSGT - Professional CPAP therapy consultation"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Succeed in Your
                <span className="text-purple-400 block">CPAP Therapy</span>
                <span className="text-2xl md:text-3xl font-normal text-gray-300 block mt-2">in Days, Not Months</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                While others ship boxes and say goodbye, we walk with you to thrive in your sleep journey. Expert
                guidance from Jo Ng, your RPSGT-certified sleep technologist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                  Start Your Journey Today
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>RPSGT Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Singapore Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Expert Support</span>
              </div>
            </div>
          </div>

          {/* Professional Credentials Card */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-800/30 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Jo Ng, RPSGT</h3>
                  <p className="text-purple-400 font-medium">Registered Polysomnographic Technologist</p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Certified Sleep Technology Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Personalized CPAP Setup & Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Ongoing Support & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Insurance & Equipment Guidance</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-800/30">
                  <p className="text-sm text-gray-400 italic">
                    "Your success in CPAP therapy is my priority. Let's make this journey smooth and effective
                    together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
