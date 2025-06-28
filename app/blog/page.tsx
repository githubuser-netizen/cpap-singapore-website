import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

// Sample blog posts - this will come from your CMS later
const blogPosts = [
  {
    id: 1,
    title: "Understanding Sleep Apnea: Symptoms and Solutions",
    excerpt:
      "Learn about the common symptoms of sleep apnea and how CPAP therapy can transform your sleep quality and overall health.",
    content: "Sleep apnea affects 1 in 3 people in Singapore according to recent studies...",
    author: "Jo Ng, RPSGT",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Sleep Apnea", "CPAP", "Health"],
    featured: true,
  },
  {
    id: 2,
    title: "CPAP vs BiPAP: Which is Right for You?",
    excerpt:
      "Discover the differences between CPAP and BiPAP therapy and learn which option might be best for your specific needs.",
    content: "When it comes to sleep apnea treatment, understanding the difference between CPAP and BiPAP...",
    author: "Jo Ng, RPSGT",
    publishDate: "2024-01-10",
    readTime: "7 min read",
    category: "Treatment Options",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["CPAP", "BiPAP", "Treatment"],
    featured: false,
  },
  {
    id: 3,
    title: "Traveling with Your CPAP Machine: A Complete Guide",
    excerpt:
      "Essential tips for traveling with your CPAP machine, including airline regulations and packing recommendations.",
    content: "Traveling with a CPAP machine doesn't have to be stressful. Here's everything you need to know...",
    author: "Jo Ng, RPSGT",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    category: "Lifestyle",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Travel", "CPAP", "Tips"],
    featured: false,
  },
  {
    id: 4,
    title: "Mask Fitting: Finding Your Perfect CPAP Mask",
    excerpt:
      "A comprehensive guide to choosing and fitting the right CPAP mask for maximum comfort and therapy effectiveness.",
    content: "The right CPAP mask can make all the difference in your therapy success...",
    author: "Jo Ng, RPSGT",
    publishDate: "2023-12-28",
    readTime: "8 min read",
    category: "Equipment",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["CPAP Masks", "Fitting", "Comfort"],
    featured: false,
  },
  {
    id: 5,
    title: "Success Stories: Real Patients Share Their CPAP Journey",
    excerpt: "Read inspiring stories from our patients who have transformed their lives with successful CPAP therapy.",
    content: "Nothing motivates us more than hearing success stories from our patients...",
    author: "Jo Ng, RPSGT",
    publishDate: "2023-12-20",
    readTime: "4 min read",
    category: "Success Stories",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Success Stories", "Patient Stories", "Motivation"],
    featured: false,
  },
  {
    id: 6,
    title: "Maintaining Your CPAP Equipment: Best Practices",
    excerpt:
      "Learn how to properly clean and maintain your CPAP machine and accessories for optimal performance and longevity.",
    content: "Proper maintenance of your CPAP equipment is crucial for effective therapy...",
    author: "Jo Ng, RPSGT",
    publishDate: "2023-12-15",
    readTime: "5 min read",
    category: "Maintenance",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Maintenance", "CPAP Care", "Equipment"],
    featured: false,
  },
]

const categories = ["All", "Education", "Treatment Options", "Lifestyle", "Equipment", "Success Stories", "Maintenance"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
            <Link href="/services" className="text-sm hover:text-purple-400 transition-colors">
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
            <Link href="/blog" className="text-sm text-purple-400">
              Blog
            </Link>
            <Link href="/faq" className="text-sm hover:text-purple-400 transition-colors">
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
          <span className="text-white">Blog</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sleep Therapy <span className="text-purple-400">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Expert insights, tips, and guidance for your CPAP and BiPAP therapy journey
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-purple-800/30 hover:border-purple-600"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 border-b border-purple-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">Featured Article</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="border-purple-800/30 text-purple-400 mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-purple-400 transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors group"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="border-purple-800/30 text-purple-400 bg-black/80">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-3 group-hover:text-purple-400 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-400 mb-4">{post.excerpt}</CardDescription>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full border-purple-800/30 hover:border-purple-600">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Sleep Therapy Tips</h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles, tips, and insights delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-purple-800/30 rounded-lg focus:outline-none focus:border-purple-600 text-white"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
