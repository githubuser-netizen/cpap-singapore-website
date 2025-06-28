import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"

export default function WhyWakingUpToPeePage() {
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
          <Link href="/blog" className="hover:text-purple-400 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-white">Why Am I Waking Up to Pee?</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <Badge className="bg-purple-600 hover:bg-purple-700 mb-4">Sleep Health</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Am I Waking Up in the Middle of the Night to Pee?
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Jo Ng, RPSGT
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date().toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />6 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Person waking up at night to use bathroom"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xl text-gray-300 mb-8">
                If you're frequently waking up during the night to urinate (a condition called nocturia), you're not
                alone. This common issue affects millions of people and can significantly impact your sleep quality and
                daily life. But what many people don't realize is that frequent nighttime urination could be a sign of
                sleep apnea.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">The Sleep Apnea Connection</h2>
              <p className="text-gray-300 mb-6">
                Sleep apnea doesn't just cause snoring and breathing interruptions—it can also trigger frequent
                nighttime urination. Here's how:
              </p>

              <Card className="bg-black/50 border-purple-800/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-purple-400">How Sleep Apnea Causes Nocturia</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Oxygen Level Changes:</strong> When breathing stops during sleep apnea episodes, oxygen
                      levels drop, triggering the release of atrial natriuretic peptide (ANP)
                    </li>
                    <li>
                      <strong>Hormone Disruption:</strong> ANP tells your kidneys to produce more urine, leading to
                      frequent bathroom trips
                    </li>
                    <li>
                      <strong>Heart Strain:</strong> The heart works harder during apnea episodes, further increasing
                      ANP production
                    </li>
                    <li>
                      <strong>Sleep Fragmentation:</strong> Constant wake-ups make you more aware of your bladder's
                      signals
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-white mb-4">Other Common Causes</h2>
              <p className="text-gray-300 mb-4">
                While sleep apnea is a significant but often overlooked cause, other factors can contribute to nocturia:
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>
                  <strong>Excessive fluid intake:</strong> Drinking too much before bedtime
                </li>
                <li>
                  <strong>Medical conditions:</strong> Diabetes, heart failure, or kidney problems
                </li>
                <li>
                  <strong>Medications:</strong> Diuretics, blood pressure medications
                </li>
                <li>
                  <strong>Enlarged prostate:</strong> Common in men over 50
                </li>
                <li>
                  <strong>Bladder issues:</strong> Overactive bladder or infections
                </li>
                <li>
                  <strong>Hormonal changes:</strong> Particularly in women during menopause
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Signs It Might Be Sleep Apnea</h2>
              <p className="text-gray-300 mb-4">Consider sleep apnea as a potential cause if you also experience:</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-black/50 border-purple-800/30">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Nighttime Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Loud snoring</li>
                      <li>Gasping or choking during sleep</li>
                      <li>Restless sleep</li>
                      <li>Night sweats</li>
                      <li>Frequent awakenings</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-purple-800/30">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Daytime Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Excessive daytime fatigue</li>
                      <li>Morning headaches</li>
                      <li>Difficulty concentrating</li>
                      <li>Irritability or mood changes</li>
                      <li>High blood pressure</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">The Good News: CPAP Therapy Can Help</h2>
              <p className="text-gray-300 mb-6">
                Studies have shown that treating sleep apnea with CPAP therapy can significantly reduce nocturia. Many
                patients report fewer nighttime bathroom trips within weeks of starting treatment. CPAP therapy:
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Maintains steady oxygen levels throughout the night</li>
                <li>Reduces ANP hormone production</li>
                <li>Improves overall sleep quality</li>
                <li>Decreases the frequency of nighttime awakenings</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">What You Can Do Tonight</h2>

              <Card className="bg-purple-900/20 border-purple-500/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-purple-300">Immediate Steps</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Limit fluids 2-3 hours before bedtime</li>
                    <li>Avoid caffeine and alcohol in the evening</li>
                    <li>Empty your bladder completely before bed</li>
                    <li>Keep a sleep diary noting bathroom trips and sleep quality</li>
                    <li>Consider if you have other sleep apnea symptoms</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-white mb-4">When to Seek Help</h2>
              <p className="text-gray-300 mb-6">
                If you're waking up 2 or more times per night to urinate, especially if accompanied by snoring or
                daytime fatigue, it's time to investigate further. A sleep study can determine if sleep apnea is the
                underlying cause.
              </p>

              <Card className="bg-black/50 border-purple-800/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-white">Ready to Improve Your Sleep?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    If you suspect sleep apnea might be causing your nighttime bathroom trips, our RPSGT-certified sleep
                    technologist can help you understand your options and find the right solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                        WhatsApp Consultation
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600">
                      <Link href="/products">View CPAP Solutions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <p className="text-gray-400 text-sm">
                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and should not
                replace professional medical advice. Always consult with your healthcare provider for proper diagnosis
                and treatment of sleep disorders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
