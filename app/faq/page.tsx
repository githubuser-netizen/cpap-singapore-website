"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        id: "what-is-sleep-apnea",
        question: "What is Sleep Apnea / Sleep Apnoea?",
        answer: (
          <span>
            Sleep Apnea or Sleep Apnoea is a medical condition affecting{" "}
            <a
              href="https://www.straitstimes.com/singapore/health/one-in-three-singaporeans-suffers-from-sleep-apnea-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              1 in 3 people in Singapore
            </a>{" "}
            as documented by our national broadsheet the Straits Times.
            <br />
            <br />
            Sleep apnea is characterized by the upper airway narrowing during sleep, to the point where breathing is
            challenging; blood oxygen levels drop, and the body experiences mini arousals which lead to fragmented
            sleep. In turn, we tend to have daytime tiredness, and other symptoms that can eventually turn our health
            upside down.
            <br />
            <br />
            Sleep apnea can be dangerous and over the long term lead to stroke, heart attack, and even death.
            <br />
            <br />
            There are cases of{" "}
            <a
              href="https://sleepeducation.org/death-carrie-fisher-warning-sleep-apnea/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              famous people who have died from sleep apnea
            </a>
            .
            <br />
            <br />
            Common symptoms of sleep apnea include but are not limited to:
            <br />• Snoring during sleep
            <br />• Excessive daytime tiredness
            <br />• Elevated Blood Pressure
            <br />• Headaches and Brain Fog
          </span>
        ),
      },
      {
        id: "what-is-cpap-therapy",
        question: "What is CPAP therapy and how does it work?",
        answer: (
          <span>
            CPAP (Continuous Positive Airway Pressure) therapy uses a blower to deliver a gentle flow air through a mask
            to keep your upper airway open during sleep. This prevents the breathing interruptions that characterize
            sleep apnea, allowing for better sleep quality and improved health outcomes.
          </span>
        ),
      },
      {
        id: "cpap-machine-types",
        question: "What are the different types of CPAP machines available?",
        answer: (
          <span>
            While "CPAP machine" technically refers to devices that deliver continuous positive airway pressure, in both
            clinical and popular usage, the term is sometimes used more broadly to refer to a range of positive airway
            pressure (PAP) devices—including CPAP, APAP, BiPAP, and ASV machines. However, each device type has distinct
            features and indications.
          </span>
        ),
      },
      {
        id: "cpap-vs-bipap",
        question: "What is the difference between CPAP and Bipap for treating obstructive sleep apnea (OSA)?",
        answer: (
          <span>
            Both CPAP and Bipap machines can treat obstructive sleep apnea. At Yes CPAP we recommend you try a CPAP out
            first; followed by a bipap machine. Often, our experience is that Bipap is more comfortable for breathing
            than CPAP; especially since CPAP exhale pressures tend to be a little more effortful for most users.
          </span>
        ),
      },
      {
        id: "need-cpap-therapy",
        question: "How do I know if I need CPAP therapy?",
        answer: (
          <span>
            CPAP therapy is typically prescribed after a sleep study diagnoses sleep apnea. Common symptoms include
            snoring and excessive daytime tiredness.
            <br />
            <br />
            Other symptoms may include gasping during sleep, morning headaches, and difficulty concentrating. A sleep
            specialist can determine if CPAP is right for you based on your symptoms and sleep study results.
            <br />
            <br />
            At Yes CPAP, we offer home sleep test services.{" "}
            <a
              href="https://wa.me/6598584461"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Enquire
            </a>{" "}
            to share your sleep journey and ask us if a sleep test is suitable for you.
          </span>
        ),
      },
      {
        id: "cpap-consultation",
        question: "What's included in your CPAP consultation service?",
        answer: (
          <span>
            Our comprehensive service includes initial consultation, sleep study coordination, equipment selection
            guidance, mask fitting, pressure optimization, ongoing support, and insurance advice if needed. Our goal is
            to help you to be successful with your CPAP therapy.
          </span>
        ),
      },
      {
        id: "cpap-contraindications",
        question: "What are some contraindications to CPAP therapy?",
        answer: (
          <span>
            While CPAP therapy is generally safe and effective, there are some medical conditions where it may be
            contraindicated:
            <br />
            <br />• Pneumothorax (collapsed lung)
            <br />• Recent facial or skull trauma or surgery
            <br />• Severe bullous lung disease
            <br />• Recurrent sinus or ear infections
            <br />• Pathologically low blood pressure
            <br />• CSF leaks
            <br />
            <br />
            Always consult with a healthcare professional before starting CPAP therapy if you have any of these
            conditions.
          </span>
        ),
      },
    ],
  },
  {
    category: "Equipment & Setup",
    questions: [
      {
        id: "recommended-cpap-machines",
        question: "What types of CPAP machines do you recommend?",
        answer: (
          <span>
            We work with leading brands like ResMed, Philips Respironics, Lowenstein, and Resvent. The choice depends on
            your specific needs, prescribed pressure settings, and personal preferences. We'll help you select the most
            suitable machine for your therapy requirements.
            <br />
            <br />
            We're an Authorized Distributor of CPAP machines in Singapore including the iBreeze series.
          </span>
        ),
      },
      {
        id: "choosing-cpap-mask",
        question: "How do I choose the right CPAP mask?",
        answer: (
          <span>
            In our experience, mask selection is half the battle. Most folks who fail with CPAP therapy may simply have
            the wrong mask, or they may struggle with pressure flow (see above question on the difference between CPAP
            and Bipap).
            <br />
            <br />
            In general, our advice is that you try out various masks while lying down and with CPAP pressure running.
            This is because masks sit differently on our faces while sitting up; and without CPAP pressure running, we
            won't be able to detect leaks easily. At{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>
            , we offer this mask tryout service as part of our initial pressure setup for new users, helping you to
            achieve a higher chance of success as a new CPAP user.
          </span>
        ),
      },
      {
        id: "try-masks-before-purchase",
        question: "Can I try different masks before purchasing?",
        answer: (
          <span>
            Yes! We offer mask tryouts for new users to ensure you find the most comfortable option. This service helps
            prevent the common issues like mask leaks and discomfort that often lead to therapy failure.
            <br />
            <br />
            In fact, this is so crucial that we don't advise that you change or buy a new mask without first trying.
            This advice especially applies to folks who are thinking of buying their first CPAP mask and machine online
            but have never tried them out in person.
          </span>
        ),
      },
      {
        id: "replace-cpap-equipment",
        question: "How often should I replace my CPAP equipment?",
        answer: (
          <span>
            At{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>
            , we're CPAP users ourselves, and typically change our masks at the 6-9 month mark. The typical lifespan of
            a CPAP machine is 3-5 years. Reusable filters typically last 6 months (or whenever you see the filter
            fraying); disposable filters should be changed every 1 month.
          </span>
        ),
      },
      {
        id: "care-for-cpap-equipment",
        question: "How should I care for my CPAP equipment?",
        answer: (
          <span>
            Do not under any circumstances use ozone to clean your CPAP machine internals. Ozone causes the breakdown of
            internal CPAP machine parts. Masks can be washed with soap and water; remove your fabric parts before wash.
            CPAP tubings and masks can be soaked in soapy water. After a rinse and initial shake dry, to fully dry,
            place a large towel on your bed and use the CPAP machine to blow out any excess water from your tubing and
            mask.
          </span>
        ),
      },
      {
        id: "third-party-filters",
        question: "Can I buy third party / copy / clone filters for my CPAP machine?",
        answer: (
          <span>
            We sell only original filters from the product manufacturer.
            <br />
            <br />
            These filters help prolong the lifespan of CPAP machines, and also to prevent viruses and bacteria from
            entering our breathing passages.
            <br />
            <br />
            Unfortunately, we do not recommended that you go for third party filters. Original filters are made in a
            facility that has medical grade, clean room certified cleanliness. We can't verify the conditions where
            third party filters are made.
          </span>
        ),
      },
    ],
  },
  {
    category: "Using Your CPAP",
    questions: [
      {
        id: "getting-used-to-cpap",
        question: "How long does it take to get used to CPAP therapy?",
        answer: (
          <span>
            Without proper guidance, it can take a very very long time (maybe even indefinite). Most people may give up
            halfway, or spend their entire lives with suboptimal outcomes. In our experience, around 50-60% of people
            unguided or with minimal guidance would give up on their CPAP therapy within a year.
            <br />
            <br />
            But with our guidance at{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>{" "}
            Singapore, we find most patients finding success within 2-14 days. Our structured approach includes an
            appointment to discover the best mask, machine and settings for you, followed by a pressure optimization
            journey, and ongoing support to ensure successful CPAP therapy. Some patients feel the benefit of improved
            energy levels immediately, while others may take a few days or weeks.
          </span>
        ),
      },
      {
        id: "mask-pressure-intolerance",
        question: "Help! I can't tolerate the mask structure and/or the pressure flow",
        answer: (
          <span>
            This is common and completely solvable! In our experience, it's best to try out several masks while lying
            down and with different CPAP machines and settings. We've found that Auto Bipap machines can often be more
            comfortable than CPAP. Though Bipaps can be more tricky for the average user to set up, we're experts at
            doing this. The mask fitting and initial pressure set up service is something unique to{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>{" "}
            compared to most other vendors, and we provide this service to folks who are new to CPAP or who are buying a
            new CPAP machine.
            <br />
            <br />
            Our success rate is 80-90% because we are CPAP / Bipap users ourselves, besides being qualified sleep
            technologists and we know the struggles that new users face.
          </span>
        ),
      },
      {
        id: "travel-with-cpap",
        question: "Can I travel with my CPAP machine?",
        answer: (
          <span>
            Yes, and we recommend that you do, so that you get the most out of your travel. With better energy and
            sleep, you would be able to holiday and or function well while traveling.
            <br />
            <br />
            CPAP machines are{" "}
            <a
              href="https://www.resmed.com/en-us/sleep-health/blog/cpap-air-travel-what-you-should-know/?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              well recognized
            </a>{" "}
            personal medical devices by most if not all airlines and immigration officials. If you're asked to pass your
            CPAP machine through an X ray machine, I recommend that you place it in a clean, clear bag before doing so —
            the CPAP is X ray safe, but you might want to keep it away from the trays that airports use which may not be
            quite the cleanest.
            <br />
            <br />
            CPAP machines are recognized by many Western airlines to be necessary personal medical devices, and they may
            waive the carry-on weight of your CPAP machine. Of course, it's best that you ask politely if that can be
            done while checking in.
            <br />
            <br />
            In terms of international power supply or AC power, our CPAP machines have power bricks that accept voltage
            from ~100-240v. This means that they can take the voltage of any country.
          </span>
        ),
      },
      {
        id: "mask-leaks",
        question: "What should I do if my mask leaks?",
        answer: (
          <span>
            Mask leaks are usually due to improper fit, worn-out cushions, or incorrect strap tension. We'll teach you
            proper fitting techniques and when to replace components. Most leak issues can be resolved with simple
            adjustments.
          </span>
        ),
      },
    ],
  },
  {
    category: "Health & Benefits",
    questions: [
      {
        id: "cpap-health-benefits",
        question: "What health benefits can I expect from CPAP therapy?",
        answer: (
          <span>
            Benefits include improved sleep quality, reduced daytime fatigue, better concentration, lower blood
            pressure, reduced risk of heart disease and stroke, improved mood, and enhanced quality of life. Most
            patients notice improvements within the first few weeks. According to research,{" "}
            <a
              href="https://www.straitstimes.com/singapore/health/one-in-three-singaporeans-suffers-from-sleep-apnea-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              1 in 3 Singaporeans suffers from sleep apnea
            </a>
            , making CPAP therapy increasingly important for public health.
          </span>
        ),
      },
      {
        id: "cpap-long-term-safety",
        question: "Is CPAP therapy safe for long-term use?",
        answer: (
          <span>
            Yes, CPAP therapy is very safe for long-term use when equipment is properly maintained. Regular cleaning and
            component replacement ensure hygienic and effective therapy. The health benefits far outweigh any minimal
            risks.
          </span>
        ),
      },
      {
        id: "cpap-cure-sleep-apnea",
        question: "Can CPAP therapy cure my sleep apnea?",
        answer: (
          <span>
            CPAP therapy effectively treats sleep apnea symptoms but doesn't cure the underlying condition. However,
            consistent use can lead to significant health improvements and, in some cases, reduced severity over time
            with weight loss and lifestyle changes.
          </span>
        ),
      },
      {
        id: "cpap-gold-standard",
        question: "Is CPAP therapy the gold standard for sleep apnea treatment?",
        answer: (
          <span>
            Yes, CPAP therapy is considered the gold standard for treating obstructive sleep apnea. Both{" "}
            <a
              href="https://www.singhealth.com.sg/patient-care/conditions-treatments/Continuous-Positive-Airway-Pressure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              SingHealth
            </a>{" "}
            and{" "}
            <a
              href="https://www.sgh.com.sg/patient-care/conditions-treatments/obstructive-sleep-apnoea-osa-surgery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Singapore General Hospital
            </a>{" "}
            recognize CPAP as the most effective treatment for OSA. The therapy has been extensively studied and proven
            to effectively eliminate breathing interruptions during sleep.
          </span>
        ),
      },
      {
        id: "borderline-sleep-apnea",
        question:
          "I did a sleep study before, but I don't have sleep apnea as mentioned by the doctor. My AHI was low (eg around 4-6). But yet I snore, and I have the symptoms of sleep apnea like daytime tiredness. I guess I'm a borderline case? I want to explore CPAP therapy as I suspect that my snoring affects my sleep quality. What should I do?",
        answer: (
          <span>
            Since your AHI is not totally zero, there's a possibility that you may be in a category called UARS - Upper
            Airway Respiratory Syndrome. This means that you don't technically qualify to be diagnosed with sleep apnea,
            but you could still have symptoms that sleep apnea sufferers struggle with like daytime tiredness.
            <br />
            <br />
            Arguably, you are a good candidate to be on a CPAP trial to assess if CPAP therapy helps to alleviate your
            excessive daytime tiredness and other symptoms.
          </span>
        ),
      },
    ],
  },
  {
    category: "Insurance & Costs",
    questions: [
      {
        id: "insurance-coverage",
        question: "Does insurance cover CPAP equipment in Singapore?",
        answer: (
          <span>
            Typically, you should look out for the terminology of "medical aids" in your policy if you would like to
            make claims for CPAP machines. We have seen successful claims by Cigna, Great Eastern (hospitalization +
            rider), Prudential (hospitalization + rider).
          </span>
        ),
      },
      {
        id: "insurance-claims",
        question: "Should I use insurance to claim for my CPAP equipment in Singapore?",
        answer: (
          <span>
            There are 2 schools of thought regarding CPAP and insurance claims.
            <br />
            <br />
            The first is that the person really wants to claim their insurance to buy a CPAP machine, without thought
            for keeping their future insurability intact. The correct pathway for this is to see a GP, with complaint of
            daytime tiredness and night time snoring; polyclinics in Singapore have a Telehealth appointment option){" "}
            {">"}
            see a specialist - usually an ENT doctor {">"} do a sleep test - check in with your insurer whether a level
            3 home sleep test is OK {">"} get diagnosed with sleep apnea, with doctor prescription for an Auto PAP
            machine {">"} buy a CPAP machine from us here at{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>{" "}
            {">"} submit claims to insurer.
            <br />
            <br />
            When you do a sleep test run by a public hospital in Singapore, your health information gets exposed to
            insurers who may increase your future premiums or reduce your insurability through exclusions - especially
            to coverage around stroke, heart attacks and cardiovascular health. This is why private sleep testing may be
            a better path within the above journey.
            <br />
            <br />
            The second route, if you have symptoms of sleep apnea like night time snoring, daytime tiredness, and if
            you're in the at-risk category - being male, over 35 and being overweight - or being female and approaching
            menopause - is to go straight to CPAP vendors in Singapore like us at{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>{" "}
            and ask if you are a good candidate for a CPAP trial.
            <br />
            <br />
            At the time of publishing, CPAP machines are not subsidized by the Singapore Government, though arguably
            they should be, as sleep apnea affects 1 in 3 Singaporeans, and is likely to be responsible in part for many
            cases of stroke, heart attack, type II diabetes and many other health conditions.
          </span>
        ),
      },
      {
        id: "cpap-cost",
        question: "How much does CPAP therapy cost?",
        answer: (
          <span>
            If you break down the cost of a CPAP machine by its potential use per night:
            <br />
            <br />
            Let's say you bought a Bipap and mask from us at{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>{" "}
            for 2050 SGD. And the machine lasts 5 years. That's $1.12 SGD per night. Arguably the best value for money,
            life saving medical device in existence. In contrast, if one skips out on CPAP therapy and has untreated
            sleep apnea for years - eventually it may result in a heart attack which costs 10,000 SGD to fix through
            emergency surgery.
            <br />
            <br />
            We have seen a case where the{" "}
            <a
              href="https://www.tiktok.com/@yescpap/video/7354323680450596103?is_from_webapp=1&sender_device=pc&web_id=7469679422230038023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              patient is 70 years old
            </a>
            , has likely had untreated sleep apnea for many years, they have been hospitalized for heart attack, but the
            hospital refuses to discharge them until they buy a CPAP machine. Prevention is much, much better than cure.
          </span>
        ),
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        id: "cpap-noise",
        question: "My CPAP machine is making noise. Is this normal?",
        answer: (
          <span>
            Modern CPAP machines are very quiet. Unusual noise usually indicates a need for maintenance, filter
            replacement, or equipment issue. Generally if your CPAP is 3-5 years old or more, it could be time to
            replace the CPAP machine.
            <br />
            <br />
            If it's a CPAP machine from us at{" "}
            <a
              href="https://yescpap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Yes CPAP
            </a>
            , we'll help diagnose and resolve any noise problems to help you sleep peacefully.
          </span>
        ),
      },
      {
        id: "dry-mouth-congestion",
        question: "What if I experience dry mouth or nasal congestion?",
        answer: (
          <span>
            These are common issues easily resolved with heated humidification, proper mask fit, or nasal saline rinses.
            We'll adjust your settings and recommend solutions to eliminate these discomforts.
          </span>
        ),
      },
      {
        id: "cpap-with-cold",
        question: "Can I use my CPAP if I have a cold?",
        answer: (
          <span>
            Yes, but you may need to adjust settings or use additional humidification. We'll provide guidance on using
            your CPAP during illness and when to temporarily modify your therapy routine.
          </span>
        ),
      },
      {
        id: "quick-recommendation",
        question:
          "I'm a Singaporean and I'm not sure what CPAP machine or mask would be most suitable for me. And I'm super strapped for time so I can't do a mask and machine tryout — I have a flight to catch. But I desperately want to have a CPAP machine and mask at least temporarily. And hopefully we can sort out the settings along the way. What do you recommend?",
        answer: (
          <span>
            I recommend the iBreeze Auto Bipap and the Resmed p30i mask. Try these out first, and reassess along the
            way.
          </span>
        ),
      },
    ],
  },
]

export default function FAQPage() {
  const [allOpen, setAllOpen] = useState(false)
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggleAll = () => {
    if (allOpen) {
      setOpenItems([])
      setAllOpen(false)
    } else {
      const allItemIds: string[] = []
      faqCategories.forEach((category, categoryIndex) => {
        category.questions.forEach((_, faqIndex) => {
          allItemIds.push(`${categoryIndex}-${faqIndex}`)
        })
      })
      setOpenItems(allItemIds)
      setAllOpen(true)
    }
  }

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
            <Link href="/faq" className="text-sm text-purple-400">
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
          <span className="text-white">FAQ</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Get answers to common questions about CPAP therapy, equipment, and our services. Can't find what you're
              looking for? Contact us directly!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2
                    className="text-2xl font-bold text-purple-400"
                    id={category.category.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {category.category}
                  </h2>
                  {categoryIndex === 0 && (
                    <Button
                      onClick={handleToggleAll}
                      variant="outline"
                      className="border-purple-800/30 hover:border-purple-600 text-white hover:text-purple-400"
                    >
                      {allOpen ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-2" />
                          Close All
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-2" />
                          Open All
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-black/50 border border-purple-800/30 rounded-lg px-6"
                      id={faq.id}
                    >
                      <AccordionTrigger className="text-left text-white hover:text-purple-400 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pb-6">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/50 border-purple-800/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Still Have Questions?</CardTitle>
                <CardDescription className="text-gray-300">
                  Our RPSGT-certified sleep technologist is here to help with personalized answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-white mb-2">WhatsApp</h3>
                    <p className="text-sm text-gray-400 mb-4">Quick questions and immediate support</p>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-white w-full">
                      <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                        Chat Now
                      </Link>
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-white mb-2">Email</h3>
                    <p className="text-sm text-gray-400 mb-4">Detailed questions and consultations</p>
                    <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600 w-full">
                      <Link href="mailto:yes&#99;pap&#64;gmail&#46;com">Send Email</Link>
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-white mb-2">Phone</h3>
                    <p className="text-sm text-gray-400 mb-4">Direct consultation booking</p>
                    <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600 w-full">
                      <Link href="tel:&#43;65&#32;9858&#32;4461">Call Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
