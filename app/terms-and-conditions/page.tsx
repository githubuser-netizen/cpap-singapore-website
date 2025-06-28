import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Clock, CreditCard } from "lucide-react"

export default function TermsAndConditionsPage() {
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
          <span className="text-white">Terms and Conditions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and <span className="text-purple-400">Conditions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Please read these terms carefully before using our services or purchasing our products.
            </p>
            <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  By accessing and using Yes CPAP services, purchasing our products, or participating in our programs,
                  you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not
                  use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>Yes CPAP provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>CPAP and BiPAP equipment sales and consultation</li>
                  <li>Sleep therapy guidance and support</li>
                  <li>Equipment fitting and optimization services</li>
                  <li>Trial programs for eligible customers</li>
                  <li>Ongoing therapy support and maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
                  No Refunds Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="font-semibold text-red-300 mb-2">IMPORTANT: NO REFUNDS</p>
                  <p>
                    All sales are final. We do not offer refunds on CPAP machines, BiPAP machines, masks, or accessories
                    once purchased. This policy is in place due to the medical nature of our equipment and hygiene
                    considerations.
                  </p>
                </div>
                <p>Before purchasing, we strongly recommend:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Participating in our trial program if eligible</li>
                  <li>Consulting with our sleep technologist</li>
                  <li>Ensuring proper mask fitting</li>
                  <li>Understanding your therapy requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2 text-purple-400" />
                  2-Week CPAP/BiPAP Trial Program
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <p className="font-semibold text-purple-300 mb-2">Trial Program Requirements:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Mask Purchase Required:</strong> You must purchase a CPAP mask to access the trial program
                    </li>
                    <li>
                      <strong>Refundable Deposit:</strong> SGD $150 deposit required when we visit your location
                    </li>
                    <li>
                      <strong>Eligibility:</strong> Limited to new CPAP users or those with legitimate reasons for trial
                    </li>
                  </ul>
                </div>

                <h4 className="font-semibold text-white">Deposit Refund Process:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>If you purchase a machine:</strong> The $150 deposit will be deducted from your machine
                    purchase price
                  </li>
                  <li>
                    <strong>If you don't purchase:</strong> The $150 deposit becomes a rental fee and is non-refundable
                  </li>
                </ul>

                <h4 className="font-semibold text-white">Eligibility Criteria:</h4>
                <p>We only permit trials for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Individuals new to CPAP therapy</li>
                  <li>Those previously challenged with CPAP therapy who are now motivated to succeed</li>
                  <li>Patients willing to try BiPAP therapy after CPAP challenges</li>
                </ul>

                <h4 className="font-semibold text-white">Daily Reporting Requirement:</h4>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <p>
                    <strong>Motivation Demonstration:</strong> You must send us your CPAP/BiPAP machine info screen
                    every day to Yes CPAP for the full 14-day trial period. This demonstrates your commitment to
                    successful therapy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <CreditCard className="h-5 w-5 mr-2 text-purple-400" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment is required in full before equipment delivery</li>
                  <li>We accept cash, credit cards, and insurance claims</li>
                  <li>Insurance claims assistance is provided but payment is ultimately your responsibility</li>
                  <li>Trial program deposits must be paid before equipment installation</li>
                  <li>All prices are in Singapore Dollars (SGD) and include GST where applicable</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Medical Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="font-semibold text-yellow-300 mb-2">Important Medical Information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>CPAP and BiPAP therapy should only be used under medical supervision</li>
                    <li>Our services complement but do not replace medical care</li>
                    <li>Always consult your doctor before starting or changing therapy</li>
                    <li>Report any adverse effects to your healthcare provider immediately</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Yes CPAP's liability is limited to the purchase price of the equipment or services provided. We are
                  not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Medical complications or adverse reactions</li>
                  <li>Therapy effectiveness or outcomes</li>
                  <li>Indirect, consequential, or punitive damages</li>
                  <li>Loss of income or business interruption</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Equipment Warranty</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Equipment warranties are provided by manufacturers</li>
                  <li>We facilitate warranty claims but are not responsible for manufacturer decisions</li>
                  <li>Warranty terms vary by product and manufacturer</li>
                  <li>Misuse or damage voids warranty coverage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>For questions about these Terms and Conditions, please contact us:</p>
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
                <CardTitle className="text-white">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this
                  page with an updated date. Continued use of our services after changes constitutes acceptance of the
                  new terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
