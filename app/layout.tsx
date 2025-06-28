import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CPAP Singapore | Bipap Singapore | Buy CPAP & BiPAP Machines | Sleep Apnea Solutions | Yes CPAP",
  description:
    "Buy CPAP and BiPAP machines in Singapore from certified sleep technologist Jo Ng (RPSGT). Personalized setup, mask fitting, and rapid support for sleep apnea. Trusted by Singaporeans for fast results.",
  keywords:
    "CPAP Singapore, BiPAP Singapore, CPAP machine Singapore, buy CPAP Singapore, sleep apnea Singapore, sleep apnoea Singapore, RPSGT, Jo Ng, Yes CPAP, CPAP shop Singapore, sleep therapy Singapore",
  openGraph: {
    title: "CPAP & BiPAP Singapore | Sleep Apnea Therapy by Yes CPAP",
    description:
      "Singapore's trusted CPAP and BiPAP supplier. Get expert sleep therapy guidance and support from RPSGT-certified Jo Ng.",
    url: "https://cpapbipap.sg",
    siteName: "CPAP Singapore | BiPAP Singapore by Yes CPAP",
    images: [
      {
        url: "/images/jo-ng-hero.png",
        width: 1200,
        height: 630,
        alt: "CPAP and BiPAP Singapore, Sleep Apnea Therapy, Jo Ng RPSGT",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPAP & BiPAP Singapore | Sleep Apnea Therapy Expert | Yes CPAP",
    description:
      "Expert CPAP and BiPAP therapy in Singapore. Personalized support from certified sleep technologist Jo Ng.",
    images: ["/images/jo-ng-hero.png"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>CPAP Singapore | BiPAP Singapore by Yes CPAP</title>
        <meta name="description" content="CPAP Machines and Bipap Machines by clinical certified sleep technologist (RPSGT) in Singapore. Expert advice and guidance to succeed with CPAP therapy. Buy a CPAP today to fix your sleep apnea / sleep apnoea issues." />
        <Script
          id="schema-org-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Yes CPAP Singapore",
              description:
                "Buy CPAP and BiPAP machines in Singapore. Certified sleep technologist Jo Ng (RPSGT) offers expert setup, mask fitting, and ongoing support for sleep apnea.",
              url: "https://cpapbipap.sg",
              telephone: "&#43;65&#45;9858&#32;4461",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AZ Building @ Paya Lebar, #09-12",
                addressLocality: "Singapore",
                postalCode: "409015",
                addressCountry: "SG",
              },
              medicalSpecialty: "Sleep Medicine",
              priceRange: "$1200-$4600",
              paymentAccepted: "Cash, Credit Card, Insurance",
              currenciesAccepted: "SGD",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}

          {/* Footer for layout.tsx */}
          <footer className="py-12 border-t border-purple-800/30 bg-black">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-white">CPAP Singapore</span>
                    <br />
                    <span className="text-purple-400">Bipap Singapore</span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Helping you succeed in your CPAP therapy journey with expert guidance and support.
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://wa.me/6598584461"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.facebook.com/jo.ng.YesCPAP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://instagram.com/yescpap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@yescpap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </Link>
                    <Link
                      href="mailto:yescpap@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-white">Shop CPAP</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/products?category=CPAP%20Machines"
                        className="hover:text-purple-400 transition-colors"
                      >
                        CPAP Machines
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products?category=BiPAP%20Machines"
                        className="hover:text-purple-400 transition-colors"
                      >
                        Bipap Machines
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?category=CPAP%20Masks" className="hover:text-purple-400 transition-colors">
                        CPAP Masks
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-purple-400 transition-colors">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-white">Services</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="/#services" className="hover:text-purple-400 transition-colors">
                        Sleep Test
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="hover:text-purple-400 transition-colors">
                        Consultations
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="hover:text-purple-400 transition-colors">
                        CPAP Trial / Mask Fitting
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="hover:text-purple-400 transition-colors">
                        Pressure Optimization Journey
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-white">Contact</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions" className="hover:text-purple-400 transition-colors">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:text-purple-400 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:yescpap@gmail.com" className="hover:text-purple-400 transition-colors">
                        yescpap@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-purple-800/30 mt-8 pt-8 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} CPAP Singapore. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
