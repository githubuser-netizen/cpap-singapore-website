"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, RotateCcw, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

// First, add "CPAP Masks" to the categories array
const categories = ["All", "CPAP Machines", "BiPAP Machines", "CPAP Masks"]

// Then, add the three new CPAP mask products to the products array
const products = [
  {
    id: 1,
    name: "iBreeze Auto CPAP",
    category: "CPAP Machines",
    price: 1200,
    originalPrice: null,
    brand: "Resvent",
    stockStatus: "in-stock",
    image: "/images/ibreeze-auto-cpap.jpeg",
    description:
      "Value for money offering, an auto-adjusting CPAP machine including inbuilt humidifier and heated tubing, intelligent pressure adjustment and user-friendly interface.",
    features: ["Auto-adjusting pressure", "Inbuilt humidifier", "Heated tubing", "User-friendly interface"],
    seoTitle: "iBreeze Auto CPAP Machine Singapore - Yes CPAP",
    seoDescription:
      "Buy iBreeze Auto CPAP machine in Singapore. Authorized distributor Yes CPAP. Advanced auto-adjusting technology.",
  },
  {
    id: 2,
    name: "iBreeze Auto BiPAP",
    category: "BiPAP Machines",
    price: 1800,
    originalPrice: null,
    brand: "Resvent",
    stockStatus: "in-stock",
    image: "/images/ibreeze-auto-bipap.jpeg",
    description:
      "Highest recommended, best selling, dual-level pressure therapy machine providing an inbuild humidifier and heated tubing, the highest levels of pressure comfort, and intelligent pressure adjustments.",
    features: ["Dual pressure levels", "Inbuilt humidifier", "Heated tubing", "Intelligent pressure adjustments"],
    seoTitle: "iBreeze Auto BiPAP Machine Singapore - Yes CPAP",
    seoDescription:
      "iBreeze Auto BiPAP machine available in Singapore. Authorized distributor Yes CPAP. Dual pressure therapy.",
  },
  {
    id: 3,
    name: "ResMed AirSense 10 Auto CPAP",
    category: "CPAP Machines",
    price: 1800,
    originalPrice: null,
    brand: "ResMed",
    stockStatus: "low-stock",
    image: "/images/resmed-airsense-10-auto-cpap.jpeg",
    description: "Proven auto-adjusting CPAP machine with integrated humidifier and advanced comfort features.",
    features: ["Auto-adjusting pressure", "Integrated humidifier", "myAir app", "Advanced event detection"],
    seoTitle: "ResMed AirSense 10 Auto CPAP Machine Singapore",
    seoDescription: "Buy ResMed AirSense 10 Auto CPAP machine in Singapore. Proven technology, integrated humidifier.",
  },
  {
    id: 4,
    name: "ResMed AirSense 11 Auto CPAP",
    category: "CPAP Machines",
    price: 2200,
    originalPrice: null,
    brand: "ResMed",
    stockStatus: "low-stock",
    image: "/images/resmed-airsense-11-auto-cpap.jpeg",
    description:
      "Latest generation auto-adjusting CPAP machine with advanced comfort features and smartphone connectivity.",
    features: [
      "Auto-adjusting pressure",
      "Integrated humidifier",
      "myAir app connectivity",
      "Advanced event detection",
    ],
    seoTitle: "ResMed AirSense 11 Auto CPAP Machine Singapore",
    seoDescription:
      "Buy ResMed AirSense 11 Auto CPAP machine in Singapore. Latest technology, smartphone connectivity.",
  },
  {
    id: 5,
    name: "ResMed AirCurve 10 VAuto",
    category: "BiPAP Machines",
    price: 2500,
    originalPrice: null,
    brand: "ResMed",
    stockStatus: "pre-order",
    image: "/images/Resmed-aircurve-vauto-10-bipap.png",
    description: "Advanced variable auto-adjusting BiPAP machine with dual pressure settings for enhanced therapy.",
    features: ["Variable auto-adjusting", "Dual pressure levels", "Advanced algorithms", "Climate control"],
    seoTitle: "ResMed AirCurve 10 VAuto BiPAP Machine Singapore",
    seoDescription: "ResMed AirCurve 10 VAuto BiPAP machine in Singapore. Variable auto-adjusting technology.",
  },
  {
    id: 6,
    name: "Löwenstein Prisma SMART Auto CPAP",
    category: "CPAP Machines",
    price: 1800,
    originalPrice: null,
    brand: "Löwenstein",
    stockStatus: "pre-order",
    image: "/images/lowenstein-prisma-smart.webp",
    description:
      "German-engineered auto CPAP with intelligent pressure adjustment and advanced comfort features. Includes humidifier module.",
    features: ["Auto-adjusting pressure", "German engineering", "Humidifier module", "Comfort optimization"],
    seoTitle: "Löwenstein Prisma SMART Auto CPAP Machine Singapore",
    seoDescription:
      "Löwenstein Prisma SMART Auto CPAP machine in Singapore. German engineering, intelligent pressure adjustment.",
  },
  {
    id: 7,
    name: "Löwenstein Prisma 25ST including Auto S/T and fixed BiPAP",
    category: "BiPAP Machines",
    price: 4600,
    originalPrice: null,
    brand: "Löwenstein",
    stockStatus: "pre-order",
    image: "/images/lowenstein-prisma-25st.png",
    description:
      "The Beast. Advanced BiPAP machine including Auto S/T and fixed BiPAP modes with German precision engineering for optimal therapy. Includes humidifier module.",
    features: ["Dual pressure levels", "Auto S/T and fixed BiPAP modes", "German engineering", "Humidifier module"],
    seoTitle: "Löwenstein Prisma 25ST BiPAP Machine Singapore",
    seoDescription:
      "Löwenstein Prisma 25ST BiPAP machine in Singapore. Auto S/T and fixed BiPAP modes, German precision.",
  },
  // Adding the three new CPAP mask products
  {
    id: 8,
    name: "ResMed P30i CPAP Mask",
    category: "CPAP Masks",
    price: 250,
    originalPrice: null,
    brand: "ResMed",
    stockStatus: "in-stock",
    image: "/images/resmed_p30i_cpap_mask.avif",
    description:
      "Probably the mask with the best chance of success for most Singaporeans. Top-tube nasal prongs mask offering freedom of movement, minimal facial contact, good seal, and comfort for all sorts of sleeping positions including chest down.",
    features: ["Top-tube design", "QuietAir vent technology", "Side sleeping friendly", "Quick-release elbow"],
    seoTitle: "ResMed P30i CPAP Mask Singapore - Yes CPAP",
    seoDescription: "Buy ResMed P30i CPAP Mask in Singapore. Ideal for side sleepers with minimal facial contact.",
  },
  {
    id: 9,
    name: "Philips Dreamwear Silicone Pillows CPAP Mask",
    category: "CPAP Masks",
    price: 200,
    originalPrice: null,
    brand: "Philips Respironics",
    stockStatus: "in-stock",
    image: "/images/philips_dreamwear_silicone_pillows_cpap_mask.webp",
    description:
      "Successor to the legendary Dreamwear Gel Pillows CPAP mask. A very decent option. Top-tube nasal prongs mask offering freedom of movement, minimal facial contact, good seal, and comfort for all sorts of sleeping positions including chest down.",
    features: ["Under-the-nose design", "Silicone pillows", "Top-of-head tube connection", "Minimal contact"],
    seoTitle: "Philips Dreamwear Silicone Pillows CPAP Mask Singapore - Yes CPAP",
    seoDescription:
      "Philips Dreamwear Silicone Pillows CPAP Mask available in Singapore. Under-the-nose comfort design.",
  },
  {
    id: 10,
    name: "Philips Dreamwisp CPAP Mask",
    category: "CPAP Masks",
    price: 200,
    originalPrice: null,
    brand: "Philips Respironics",
    stockStatus: "in-stock",
    image: "/images/philips_dreamwisp_cpap_mask.jpg",
    description:
      "Probably the only wisp mask in the market to offer a top-tube for maximum freedom of movement. Wisp masks tend to help those who have previously tried prong masks but find that they need more diffused pressure.",
    features: ["Top-of-head tube connection", "Auto-adjusting cushion", "Minimal design", "Four-point headgear"],
    seoTitle: "Philips Dreamwisp CPAP Mask Singapore - Yes CPAP",
    seoDescription: "Philips Dreamwisp CPAP Mask in Singapore. Combines DreamWear freedom with Wisp cushion comfort.",
  },
  {
    id: 11,
    name: "iBreeze Travel Auto CPAP",
    category: "CPAP Machines",
    price: 1500,
    originalPrice: null,
    brand: "Resvent",
    stockStatus: "in-stock",
    image: "/images/iBreeze-Plus-Travel-CPAP-Machine.avif",
    description:
      "A great second machine or travel machine. Perhaps the only travel CPAP in the market with a screen. Includes modular humidifier.",
    features: ["Travel-sized design", "Built-in screen", "Modular humidifier", "Auto-adjusting pressure"],
    seoTitle: "iBreeze Travel Auto CPAP Machine Singapore - Yes CPAP",
    seoDescription:
      "Buy iBreeze Travel Auto CPAP machine in Singapore. Compact travel CPAP with screen and modular humidifier.",
  },
]

const getStockBadge = (status: string) => {
  switch (status) {
    case "in-stock":
      return (
        <Badge className="bg-green-600 hover:bg-green-700">
          <CheckCircle className="h-3 w-3 mr-1" />
          In Stock
        </Badge>
      )
    case "low-stock":
      return (
        <Badge className="bg-yellow-600 hover:bg-yellow-700">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Low Stock
        </Badge>
      )
    case "pre-order":
      return (
        <Badge className="bg-blue-600 hover:bg-blue-700">
          <Clock className="h-3 w-3 mr-1" />
          Pre Order
        </Badge>
      )
    case "out-of-stock":
      return (
        <Badge className="bg-red-600 hover:bg-red-700">
          <XCircle className="h-3 w-3 mr-1" />
          Out of Stock
        </Badge>
      )
    case "discontinued":
      return (
        <Badge className="bg-gray-600 hover:bg-gray-700">
          <RotateCcw className="h-3 w-3 mr-1" />
          Discontinued
        </Badge>
      )
    default:
      return null
  }
}

const getStockMessage = (status: string) => {
  switch (status) {
    case "in-stock":
      return "Available for immediate delivery"
    case "low-stock":
      return "Only a few left in stock"
    case "pre-order":
      return "Available for pre-order - Contact us for delivery timeline"
    case "out-of-stock":
      return "Currently unavailable - Contact us for alternatives"
    case "discontinued":
      return "This model is discontinued - View similar products below"
    default:
      return ""
  }
}

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Effect to handle URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
      // Scroll to top when category changes from URL
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [searchParams])

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)

    // Update URL with the selected category
    const params = new URLSearchParams(searchParams.toString())
    if (category === "All") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    // Replace URL without reloading the page
    router.replace(`/products${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false })

    // Scroll to top when category changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

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
            <Link href="/products" className="text-sm text-purple-400">
              Shop CPAP
            </Link>
            <Link href="/blog" className="text-sm hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-sm hover:text-purple-400 transition-colors">
              FAQ
            </Link>
          </nav>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
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
          <span className="text-white">Products</span>
          {selectedCategory !== "All" && (
            <>
              <span>/</span>
              <span className="text-purple-400">{selectedCategory}</span>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Products</h1>
            <p className="text-lg text-gray-300 mb-8">
              Our selection of CPAP and Bipap machines elegantly solves sleep apnea and snoring
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className={
                    category === selectedCategory
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-purple-800/30 hover:border-purple-600"
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors group"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 rounded-t-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      style={
                        product.name.includes("P30i")
                          ? { width: "100%", height: "100%", objectFit: "contain" }
                          : product.name.includes("Dreamwear")
                          ? { width: "95%", height: "95%", objectFit: "contain" }
                          : product.name.includes("Dreamwisp")
                          ? { width: "66%", height: "66%", objectFit: "contain" }
                          : product.name.includes("iBreeze Travel")
                          ? { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center -50px" }
                          : { width: "100%", height: "100%", objectFit: "cover" }
                      }
                      className="mx-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">{getStockBadge(product.stockStatus)}</div>
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-600">Save ${product.originalPrice - product.price}</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-purple-800/30 text-purple-400">
                      {product.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{product.brand}</span>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">{product.description}</CardDescription>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  {/* Stock Message */}
                  <p className="text-sm text-gray-400 mb-4">{getStockMessage(product.stockStatus)}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {product.price ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-purple-400">${product.price} SGD</span>
                            {product.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">${product.originalPrice} SGD</span>
                            )}
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-purple-400">TBA</span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {product.stockStatus === "in-stock" || product.stockStatus === "low-stock" ? (
                        <>
                          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
                          <Button variant="outline" className="border-purple-800/30 hover:border-purple-600">
                            Quick View
                          </Button>
                        </>
                      ) : product.stockStatus === "pre-order" ? (
                        <>
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Pre Order</Button>
                          <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600">
                            <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                              Contact Us
                            </Link>
                          </Button>
                        </>
                      ) : product.stockStatus === "out-of-stock" ? (
                        <>
                          <Button variant="outline" className="flex-1 border-purple-800/30" disabled>
                            Out of Stock
                          </Button>
                          <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600">
                            <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                              Contact Us
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" className="flex-1 border-purple-800/30" disabled>
                            Discontinued
                          </Button>
                          <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600">
                            <Link href="#similar-products">View Similar</Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
            <p className="text-gray-300 mb-8">
              Our RPSGT Board Certified Sleep Technologist can help you find the perfect CPAP or BiPAP solution for your
              needs. Yes CPAP is an Authorized Distributor and Authorized Retailer for CPAP Machines in Singapore,
              including Resvent, Philips, Resmed, Lowenstein and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                  WhatsApp Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600 px-8">
                <Link href="/">Book F2F Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
