"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Shield, Zap, MessageCircle, Menu } from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from "react"

export default function CPAPLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-purple-800/30 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={(e) => {
              // If we're already on the home page, scroll to top
              if (window.location.pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            <h1 className="text-xl md:text-2xl font-bold hover:text-purple-400 transition-colors cursor-pointer">
              <span className="text-white">CPAP Singapore</span>
              <span className="text-gray-300"> | </span>
              <span className="text-purple-400">Bipap Singapore</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-sm hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-sm hover:text-purple-400 transition-colors">
              Testimonials
            </Link>
            <Link href="/partners" className="text-sm hover:text-purple-400 transition-colors">
              Partners
            </Link>
            <Link href="/products" className="text-sm hover:text-purple-400 transition-colors">
              Shop CPAP
            </Link>
            <Link href="/blog" className="text-sm hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-sm hover:text-purple-400 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-purple-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hidden md:flex">
            <Link
              href="https://wa.me/6598584461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-purple-800/30 bg-black/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="/#services" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/testimonials" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/partners" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Link 
                href="/products" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop CPAP
              </Link>
              <Link 
                href="/blog" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/faq" 
                className="text-sm hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-2">
                <Link
                  href="https://wa.me/6598584461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Your Uploaded Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Black Background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white">
                  RPSGT Certified Sleep Technologist
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Succeed in Your
                  <span className="text-purple-400 block">CPAP Therapy</span>
                  <span className="text-2xl md:text-3xl font-normal text-gray-300 block mt-2">in Days, Not Years</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                  While others ship boxes and say goodbye, we walk with you to thrive in your sleep journey. Expert
                  guidance from Jo Ng, your RPSGT-certified sleep technologist in Singapore.
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

            {/* Professional Business Card with Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-800/30">
                {/* Background Image */}
                <div className="relative h-[500px]">
                  <Image
                    src="/images/jo-ng-hero.png" // Ensure this matches your file name exactly
                    alt="Jo Ng, RPSGT - Professional Sleep Technologist"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-2">Jo Ng, RPSGT</h3>
                      <p className="text-purple-300 font-medium text-lg">Registered Polysomnographic Technologist</p>
                    </div>

                    <div className="space-y-3 text-gray-200">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>Certified Sleep Technology Expert</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>Personalized CPAP Setup & Training</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>Ongoing Support & Optimization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span>Insurance & Equipment Guidance</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-purple-400/30">
                      <p className="text-sm text-gray-300 italic text-center">
                        "My aim is to help folks succeed in their CPAP therapy, whether you're a new user, or you've
                        tried without success previously."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center space-x-2">
            <span className="text-sm">Scroll to learn more</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mt-2">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See How We Transform <span className="text-purple-400">Sleep Lives</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Watch real success stories and learn about our comprehensive CPAP support process
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 bg-black">
              <iframe
                src="https://www.youtube.com/embed/T8NTm7fMnv0"
                title="CPAP Success Stories"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Care Section */}
      <section id="services" className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert <span className="text-purple-400">CPAP Care</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive support from setup to success. Our RPSGT certified approach combined with our own use of
                CPAP helps you achieve the most comfortable and effective CPAP therapy experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Sleep Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Professional sleep assessment - in the comfort of your own home
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    One-on-one expert guidance to understand your condition and create a personalized treatment plan.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">CPAP Trial / Mask Fitting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Hands-on fitting and trial to ensure perfect comfort and effectiveness before you commit.
                    <br />
                    <em className="text-purple-300 text-sm">CPAP Trial - for new users only</em>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Pressure Optimization Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Ongoing monitoring and adjustment to optimize your therapy for maximum comfort and effectiveness.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <Link
            href="https://wa.me/6598584461?text=Hi%20Jo,%20I'm%20interested%20in%20CPAP%20therapy%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <svg
              className="w-14 h-14"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="WhatsApp"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}
