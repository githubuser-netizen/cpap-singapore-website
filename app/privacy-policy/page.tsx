import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <span className="text-white">Privacy Policy</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-purple-400">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Eye className="h-5 w-5 mr-2 text-purple-400" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us for consultations or support</li>
                  <li>Purchase CPAP or BiPAP equipment</li>
                  <li>Subscribe to our newsletter or blog updates</li>
                  <li>Participate in our trial programs</li>
                  <li>Submit testimonials or reviews</li>
                </ul>
                <p>This may include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Medical information relevant to sleep therapy</li>
                  <li>CPAP/BiPAP usage data during trial periods</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <UserCheck className="h-5 w-5 mr-2 text-purple-400" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide personalized CPAP and BiPAP consultations</li>
                  <li>Process orders and manage equipment trials</li>
                  <li>Provide ongoing support and therapy optimization</li>
                  <li>Send important updates about your equipment or therapy</li>
                  <li>Improve our services and develop new offerings</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate with healthcare providers when authorized</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Lock className="h-5 w-5 mr-2 text-purple-400" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Healthcare Providers:</strong> With your explicit consent, we may share relevant information
                    with your doctors or sleep specialists
                  </li>
                  <li>
                    <strong>Service Providers:</strong> With trusted partners who help us operate our business (payment
                    processors, shipping companies)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                  </li>
                  <li>
                    <strong>Insurance Claims:</strong> To assist with insurance claims and reimbursements when
                    authorized
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure data transmission and storage</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on privacy protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <span className="text-purple-400">yes&#99;pap&#64;gmail&#46;com</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Our website uses cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve user experience</li>
                  <li>Provide relevant content and recommendations</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> <span className="text-purple-400">yes&#99;pap&#64;gmail&#46;com</span>
                  </p>
                  <p>
                    <strong>Phone:</strong> <span className="text-purple-400">&#43;65&#32;9858&#32;4461</span>
                  </p>
                  <p>
                    <strong>Address:</strong> AZ Building @ Paya Lebar, #09-12, Singapore 409015
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                  Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
