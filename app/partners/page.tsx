import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Stethoscope, Building2, Presentation, Heart, Shield, Award } from "lucide-react"

// Current referral partners data
const referralPartners = [
  {
    id: 1,
    name: "Alexandra Hospital",
    type: "Public Hospital",
    logo: "/images/alexandra-hospital.webp",
    description: "Trusted public healthcare institution providing comprehensive medical services.",
    specialties: ["Sleep Medicine", "Respiratory Care", "General Medicine"],
    partnership: "Referral Partner",
    established: "2021",
    website: "https://www.ah.com.sg/",
  },
  {
    id: 2,
    name: "National University Hospital (NUH)",
    type: "Public Hospital",
    logo: "/images/National-University-Hospital-logo.jpg",
    description: "Leading academic medical center and tertiary care hospital in Singapore.",
    specialties: ["Sleep Studies", "Pulmonology", "ENT Services"],
    partnership: "Referral Partner",
    established: "2020",
    website: "https://www.nuh.com.sg",
  },
  {
    id: 3,
    name: "iCare Primary Care Network",
    type: "Primary Care Network",
    logo: "/images/icare-pcn-logo.avif",
    description: "Network of 38 GP clinics islandwide providing accessible primary healthcare.",
    specialties: ["Primary Care", "Sleep Screening", "General Practice"],
    partnership: "Network Partner",
    established: "2022",
    highlight: "38 GP Clinics Islandwide",
    website: "https://www.icarepcn.com/",
  },
  {
    id: 4,
    name: "Come Here TCM Clinic",
    type: "Traditional Chinese Medicine",
    logo: "/images/come-here-tcm-logo.avif",
    description: "Integrative healthcare approach combining TCM with modern sleep therapy.",
    specialties: ["Traditional Chinese Medicine", "Holistic Care", "Sleep Wellness"],
    partnership: "Referral Partner",
    established: "2022",
    website: "https://www.tcmgowhere.sg/",
  },
  {
    id: 5,
    name: "Dr Lim Keng Hua",
    type: "ENT Specialist",
    logo: "/images/lim-keng-hua-logo.webp",
    description: "Experienced ENT surgeon specializing in sleep-related breathing disorders.",
    specialties: ["ENT Surgery", "Sleep Apnea Surgery", "Airway Management"],
    partnership: "Specialist Partner",
    established: "2021",
    website: "https://drkhliment.com.sg/",
  },
  {
    id: 6,
    name: "SM Haneefa Clinic",
    type: "Primary Care Clinic",
    logo: "/images/sm-haneefa-logo.webp",
    description: "Community-focused primary care clinic serving diverse patient populations.",
    specialties: ["Primary Care", "Sleep Screening", "Community Health"],
    partnership: "Referral Partner",
    established: "2023",
    website: "https://www.instagram.com/smhaneefa/",
  },
  {
    id: 7,
    name: "Dr Ronnie Yap, Orchard Scotts Dental",
    type: "Dental Specialist",
    logo: "/images/orchard-scotts-dental-logo.png",
    description: "Dental specialist focusing on sleep-related dental appliances and oral health.",
    specialties: ["Dental Sleep Medicine", "Oral Appliances", "TMJ Disorders"],
    partnership: "Specialist Partner",
    established: "2022",
    website: "https://www.orchardscottsdental.com/",
  },
  {
    id: 8,
    name: "Dr Nieh Chi Chiang, Alpaca Health Singapore",
    type: "Digital Health Platform",
    logo: "/images/alpaca-health-logo.png",
    description: "Innovative digital health platform providing accessible healthcare solutions.",
    specialties: ["Digital Health", "Telemedicine", "Health Technology"],
    partnership: "Technology Partner",
    established: "2023",
    website: "https://www.alpacahealth.sg",
  },
]

const partnershipOpportunities = [
  {
    title: "Healthcare Professionals",
    icon: Stethoscope,
    description: "Join our network of trusted doctors and specialists",
    benefits: [
      "Seamless patient referral system",
      "Collaborative care approach",
      "Professional development opportunities",
      "Access to latest CPAP technology insights",
    ],
    cta: "Partner with Us",
    target: "Doctors, Specialists, Sleep Medicine Practitioners",
  },
  {
    title: "Insurance Leaders",
    icon: Shield,
    description: "Enhance your healthcare coverage offerings",
    benefits: [
      "Streamlined claims processing",
      "Evidence-based treatment outcomes",
      "Cost-effective patient care",
      "Comprehensive reporting and analytics",
    ],
    cta: "Explore Partnership",
    target: "Insurance Agents, Policy Leaders, Healthcare Administrators",
  },
  {
    title: "Corporate HR Leaders",
    icon: Building2,
    description: "Improve employee wellness through sleep health education",
    benefits: [
      "Customized healthcare talks",
      "Employee wellness programs",
      "Sleep health screenings",
      "Productivity improvement initiatives",
    ],
    cta: "Request a Talk",
    target: "HR Directors, Wellness Coordinators, Corporate Leaders",
  },
]

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-purple-800/30 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-white">CPAP Singapore</span>
              <span className="text-gray-300"> | </span>
              <span className="text-purple-400">Bipap Singapore</span>
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-sm hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-sm hover:text-purple-400 transition-colors">
              Testimonials
            </Link>
            <Link href="/partners" className="text-sm text-purple-400">
              Partners
            </Link>
            <Link href="/products" className="text-sm hover:text-purple-400 transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-sm hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <Link href="/#faq" className="text-sm hover:text-purple-400 transition-colors">
              FAQ
            </Link>
          </nav>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
              Contact Us
            </Link>
          </Button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Partners</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Singapore's <span className="text-purple-400">Leading Healthcare Institutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We collaborate with renowned hospitals, clinics, and healthcare professionals across Singapore to provide
              comprehensive CPAP therapy and sleep health solutions for patients.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />8 Healthcare Partners
              </Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                38 GP Clinics Network
              </Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Trusted Since 2020
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-purple-400">Healthcare Partners</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We're proud to work with Singapore's most respected healthcare institutions, ensuring our patients receive
              the highest standard of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {referralPartners.map((partner) => (
              <Card
                key={partner.id}
                className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-purple-800/30 text-purple-400">
                      {partner.type}
                    </Badge>
                    <span className="text-sm text-gray-400">Since {partner.established}</span>
                  </div>

                  <div className="relative h-20 mb-4 bg-white rounded-lg p-4 flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={partner.name === "SM Haneefa Clinic" ? 112.5 : partner.name === "Dr Ronnie Yap, Orchard Scotts Dental" ? 135 : partner.name === "Dr Nieh Chi Chiang, Alpaca Health Singapore" ? 172.5 : 150}
                      height={partner.name === "SM Haneefa Clinic" ? 45 : partner.name === "Dr Ronnie Yap, Orchard Scotts Dental" ? 54 : partner.name === "Dr Nieh Chi Chiang, Alpaca Health Singapore" ? 69 : 60}
                      style={partner.name === "SM Haneefa Clinic" ? { objectFit: "contain" } : {}}
                      className="object-contain"
                    />
                  </div>

                  <CardTitle className="text-white text-lg group-hover:text-purple-400 transition-colors">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{partner.description}</CardDescription>

                  {partner.highlight && (
                    <Badge className="bg-green-600 hover:bg-green-700 text-white mt-2 w-fit">{partner.highlight}</Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Partnership Type */}
                  <div>
                    <h4 className="text-purple-400 font-medium mb-2 text-sm">Partnership</h4>
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-xs">{partner.partnership}</Badge>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-purple-400 font-medium mb-2 text-sm">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Indicator */}
                  <div className="pt-4 border-t border-purple-800/30">
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-400">Trusted Referral Partner</span>
                    </div>

                    {/* Website Link */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-purple-800/30 hover:border-purple-600 hover:bg-purple-600 hover:text-white"
                    >
                      <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Partner <span className="text-purple-400">With Us</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Join our network of healthcare professionals and organizations committed to improving sleep health
                outcomes across Singapore.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipOpportunities.map((opportunity, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-all duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                      <opportunity.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{opportunity.title}</CardTitle>
                    <CardDescription className="text-gray-400">{opportunity.description}</CardDescription>
                    <p className="text-sm text-purple-300 mt-2">{opportunity.target}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-medium mb-3">Partnership Benefits</h4>
                      <ul className="space-y-2">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                        <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                          {opportunity.cta}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Talks CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border-purple-600">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <Presentation className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Corporate Healthcare Talks</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Enhance your employee wellness programs with expert-led talks on sleep health, CPAP therapy, and
                  workplace productivity. Perfect for HR leaders looking to improve team health and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                    <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                      Request a Healthcare Talk
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8"
                  >
                    <Link href="/#services">Learn More About Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchise Opportunities CTA */}
      <section className="py-16 border-t border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-900/50 to-green-800/50 border-green-600">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Franchise Opportunities</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Join our growing network of CPAP therapy centers across Singapore. We're looking for passionate
                  healthcare entrepreneurs who want to make a difference in sleep health while building a successful
                  business.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="text-green-400 font-medium mb-3">What We Offer</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Comprehensive training program</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Proven business model</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Ongoing support & mentorship</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Marketing & branding support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="text-green-400 font-medium mb-3">Ideal Candidates</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Healthcare professionals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Business-minded individuals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Passion for helping others</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Commitment to excellence</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8">
                    <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                      Explore Franchise Opportunities
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8"
                  >
                    <Link href="/#services">Learn About Our Business Model</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-t border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Healthcare Professionals <span className="text-purple-400">Trust Us</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Jo Ng, RPSGT is a Board-Certified Sleep Technologist and Clinical Certified Sleep Technologist, ensuring
                the highest standards of care and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
