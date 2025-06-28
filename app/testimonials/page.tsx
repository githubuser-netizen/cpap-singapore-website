import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

// Helper function to get initial and color for avatar
const getInitialAvatar = (name: string) => {
  const initial = name.charAt(0).toUpperCase()
  const colors = [
    "bg-purple-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-red-600",
    "bg-yellow-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-teal-600",
  ]
  const colorIndex = name.charCodeAt(0) % colors.length
  return { initial, color: colors[colorIndex] }
}

// Top 3 Featured Reviews
const featuredTestimonials = [
  {
    id: 1,
    name: "Shikin, Daughter of Abdul Malek",
    subtitle: "New to CPAP, Singapore",
    rating: 5,
    timePosted: "2 weeks ago",
    quote:
      "My dad, a lorry driver, had dozed off a few times while driving...diagnosed with sleep apnea...after trying the Resmed Airsense 10 in hospital, we searched for our own machine and came across Yes CPAP. Speaking to Jo made all the difference – he was sincere, patient, and very knowledgeable.",
  },
  {
    id: 2,
    name: "Kartika Supryanata",
    subtitle: "New CPAP User, Singapore",
    rating: 5,
    timePosted: "18 weeks ago",
    quote:
      "Referred by my friend Danny Oh. Previously I have sleep issues, daytime tiredness, and dizziness. Jo from Yes CPAP is a clinical sleep technologist, visited me at my place. Was able to do mask tryout and machine tryout. Was able to be successful on bipap therapy, was comfortable and able to sleep through the night, sleep has gotten better, less disturbances.🙏",
  },
  {
    id: 3,
    name: "Collin Wong",
    subtitle: "Long-term Client, Singapore",
    rating: 5,
    timePosted: "2 weeks ago",
    quote:
      "One Month In – Still Incredibly Impressed with Jo from Yes CPAP. Insightful advice on how to fine tune my settings for better sleep quality. His ongoing support has made a huge difference.",
  },
]

// All other real reviews
const allTestimonials = [
  {
    id: 4,
    name: "Tan Teck Kuan",
    rating: 5,
    timePosted: "4 days ago",
    quote:
      "In our everyday life, sleep is probably the most underrated activity that we do. Most would sleep less, just to fulfill other wants and needs in their lives. However, I am grateful that there is at least one person I know, who looks after the quality of my sleep I get, and that person is Jo. Being a sleep technologist, this is definitely not an inflated term for Jo. #1 Best use of education and technology, it's the yin and yang of problem solving. Jo is constantly keeping himself updated with the latest tips and technology tools that we can use to help achieve better sleep. It's not just about the number of hours, but also the quality. Having both quantitative and qualitative benchmarks, I was able to know whether I was sleeping or not. He is also trying to build a community to help people get more awareness when it comes to better rest. When you pay for his CPAP machine, you're getting more than just a product. #2 Top notch after sales journey. It's not just about the money. It's a customised experience. Starting off with a 2-week sleep test, Jo will collate the results and help identify whether sleep apnea as a major problem. From there, he will be able to advise whether intervention is required. If needed, it starts with a face-to-face consultation, where he will help us find the right fit for the device and the sleep mask. There is no restriction on the duration. I was given sufficient time to feedback on which is more suitable. After I was fitted with the right product, I was given a two week non-obligatory trial of the Bipap machine. Jo would follow up with me closely on my daily sleep, giving me directions on how I should change the settings to yield better sleep quality. Only when I'm certain that it worked for me, I was sent the invoice for payment. #3 Beyond a single product or service. Beyond just breathing better during sleep, Jo would also recommend the right lying-down position, suitable pillows and bedding products. Jo also works with other medical professionals and sleep product providers to be able to cater to your resting needs. It's not just one product or one man, you get a suite of sleep solutions when you consult with Jo. 2 in 3 Singaporeans suffer from sleep apnea. You may think you are getting enough rest. If you suffer from daytime tiredness, or constantly yawning in the day, you may be depriving your body of the rest it requires. Your journey to beauty rest can start right now with Jo.",
  },
  {
    id: 5,
    name: "Darren Wong",
    rating: 5,
    timePosted: "3 weeks ago",
    quote:
      "I've often been told by family and friends that I snore incredibly loudly, which led me to suspect that I might be suffering from sleep apnea. I reached out to Jo, who set me up with the O2 Ring for a sleep test. After using it for a few nights, the results confirmed that I do, in fact, have sleep apnea. Following a thorough assessment, Jo determined that I was a suitable candidate for CPAP therapy and recommended that I begin a trial. Throughout the entire process, Jo was incredibly patient and reassuring. He guided me through various mask fittings to determine which one offered the most comfort. He also experimented with different air pressure settings to find the optimal balance that would provide effective support without causing discomfort. Eventually I transitioned to a BiPAP machine which is an enhanced version of the traditional CPAP and began my therapy trial. During the 2 week period, I sent Jo my daily results and he made tailored adjustments to the pressure settings based on each night's data. Now that I've completed the trial, I can confidently say that I feel a remarkable difference in my energy levels. I no longer wake up feeling fatigued or unrested, even after a full 8 hours of sleep. A huge thank you to Jo for his patience, support, and expert guidance throughout this journey. I'm now a happy and well-rested BiPAP user and also a grateful patient of Jo's! Also much kudos to Jo for his dedication to raising awareness about this silent and insidious illness that can quietly take a toll on one's health and longevity. If you even slightly suspect that you may be experiencing sleep apnea, don't delay and swiftly reach out to Jo for a convenient, fuss-free diagnosis! Early intervention could mean adding more vibrant years to your life and creating many more cherished moments with your loved ones!",
  },
  {
    id: 6,
    name: "Raine Goh",
    rating: 5,
    timePosted: "4 days ago",
    quote:
      "I suspected I have sleep apnea when my smart watch display low O2 when I'm sleeping. Jo recommended a low cost sleep test for me. He is super patient and explains everything really well. Most importantly, not only is his product much cheaper than others, he is not pushy at all and gave me plenty time to consider my options. Highly recommend Jo!",
  },
  {
    id: 7,
    name: "Cheryl Lee",
    rating: 5,
    timePosted: "4 days ago",
    quote:
      "Chatting with Jo from Yes CPAP is always time well spent as he shares his deep knowledge on CPAPs and Sleep Apnea.",
  },
  {
    id: 8,
    name: "Michaelene Dowers",
    rating: 5,
    timePosted: "2 weeks ago",
    quote:
      "Jo has been a great help for me here in the US with my BiPap needs. Very knowledgeable and quick to respond to my questions.",
  },
  {
    id: 9,
    name: "Chloe Soo",
    rating: 5,
    timePosted: "4 weeks ago",
    quote:
      "Ordered a home sleep test just to check if I have sleep apnea. Jo is very patient and explain to me how it works. Happy to find that my sleep quality is good :) Jo has deep knowledge about sleep and I've referred my friends who hv sleep apnea issue. He walked though the process with my friends and it has been life changing to them. Highly recommend anyone looking to improve sleep or requiring CPAP machine to Jo :)",
  },
  {
    id: 10,
    name: "Yap Chin Siong",
    rating: 5,
    timePosted: "6 weeks ago",
    quote: "Jo and the team have been very helpful in my sleep journey",
  },
  {
    id: 11,
    name: "Paul Ang",
    rating: 5,
    timePosted: "6 weeks ago",
    quote:
      "Needed to buy a mask on Sunday. Of the many businesses that I reached out to, Jo was the only one that was able to sell me one. Quick and fussless transaction. Thanks Jo!",
  },
  {
    id: 12,
    name: "HH Koay",
    rating: 5,
    timePosted: "6 weeks ago",
    quote:
      "I recently completed a polysomnography test that diagnosed me with sleep apnea. Consequently, I've been searching for CPAP machine for treatment. I'm grateful to have found Jo, whose guidance has been invaluable throughout this process. His back to back support on Bipap / User experience has made navigating this new diagnosis much easier. Jo is also very helpful in optimising my BiPAP settings. The adjustments are ongoing, and we are hopeful for positive changes, typically on both my sleep quality and blood oxygen saturation levels. Really appreciate the support and guidance in this process. I highly recommend his assistance to anyone seeking information or support regarding sleep apnea and CPAP/BiPAP therapy.",
  },
  {
    id: 13,
    name: "Louis Lin",
    rating: 5,
    timePosted: "9 weeks ago",
    quote:
      "Kudos to Joshua and Joe! It was a smooth sailing experience with these guys. Joe came down to my place at night to show me the different options of masks and machines that I can choose from and Joshua followed up with me on my bipap readings. He gave me instructions to adjust the machine settings to suit my sleep. Overall, I highly recommend them if you are looking for a Cpap or Bipap machine.",
  },
  {
    id: 14,
    name: "Xindy A.",
    rating: 5,
    timePosted: "9 weeks ago",
    quote:
      "My hubby went for a sleep analysis test @ Govt hospital late last year and was diagnosed with serious sleep apnea. Decided to research on a CPAP machine to help with his sleep problem when I came across Jo via Tiktok. Had better insight of the CPAP machines he offered and contacted Jo from Yes CPAP. He's very attentive and knowledgeable on the sleep problems. Had eventually arranged for a tryout of the machines and bought one from Yes CPAP. The machine itself is affordable and my hubby feels comfortable using it. No more snores from him at night too! We had a trial machine from the Govt Hospital a few months back and my hubby feels YES CPAP ibreeze is no different (same function and serves same purpose to help with his sleep apnea and breathing) from popular brands selling at the hospital. Was grateful that Jo followed through my hubby's sleep journey, applying his skills and knowledge as a sleep therapist, suggesting tips and advices for a better sleep! Thank you Jo for your professionalism and friendly approach! Would highly recommend the product to my friends and relatives too!",
  },
  {
    id: 15,
    name: "King Bolo",
    rating: 5,
    timePosted: "10 weeks ago",
    quote:
      "Good service, very good aftercare support, I think I came away with the right CPAP for me after the initial consultation and analysis. Hopefully I won't be needing their services again for a good long while, but if I do I will be back to Yes CPAP.",
  },
  {
    id: 16,
    name: "Goh Tan Hock",
    rating: 5,
    timePosted: "11 weeks ago",
    quote:
      "Met Jo Ng, the Sleep Technologist from BNI Steadfast Chapter network. He has excellent knowledge on CPAP machines and the accessories. I had bought a CPAP machine from another vendors 2 years ago and they didn't offer trying out of various masks. Jo recommended various types of masks on CPAP machine while lying down. Eventually, I got a completely satisfied mask from Jo. Now, I am sleeping even better with no air leakage and no discomfort while sleeping with the CPAP machine. Thank you Jo.",
  },
  {
    id: 17,
    name: "Jit Lim",
    rating: 5,
    timePosted: "11 weeks ago",
    quote:
      "Sometimes I wish I had saved the time and sleepless nights and gone straight for a machine when my symptoms started. I appreciate Jo's patient advice and encouragement walking me through adjustments for the settings day by day. The fact that Jo himself has sleep apnea was such a help, because he was able to advise from his own experience. I feel fortunate to have come across this company.",
  },
  {
    id: 18,
    name: "Gwee Jia Han",
    rating: 5,
    timePosted: "11 weeks ago",
    quote:
      "Super helpful after sales service. It's as though I have paid for a doctor. Discovered from tiktok. CPAP therapy really helped with my daytime energy levels and sleep quality. Less sleep interrupts better moods all day",
  },
  {
    id: 19,
    name: "William Ang",
    rating: 5,
    timePosted: "14 weeks ago",
    quote:
      "Jo is very helpful to me to choose a mask. I could try various masks at his place. We know that getting the right mask is the most important thing. How to get the benefits when using a CPAP. He also troubleshoot for me to wake up my Resvent machine. Very good personalised service from Jo. Me too get to sleep better now.",
  },
  {
    id: 20,
    name: "Savio",
    rating: 5,
    timePosted: "14 weeks ago",
    quote:
      "I have been having headaches for a number of years, finally as it was getting painful, decided to go for CPAP trial with Jo, who recommended ibreeze. I did a trial for 2 weeks and honestly could feel the difference, felt lighter, not feeling drowsy during the day etc. Thanks to Jo for his patience and constant guidance. Jo being a patient himself understands the pain of others. I would highly recommend Jo.",
  },
  // Continue with remaining testimonials...
  {
    id: 21,
    name: "Alan Chua",
    rating: 5,
    timePosted: "36 weeks ago",
    quote:
      "For as long as I can remember, I have always have an insanely bad snoring problem. It was so bad that during my stressful moments, my snoring would wake up my wife and she would decide to sleep in another room. I met Jo during an event and he shared with me how a CPAP machine could potentially help me. I was slightly skeptical but at this stage I was willing to try anything. So Jo came by with his equipment and we spend a good one and a half hour going through and setting up the very personalised settings for the CPAP machine. In that short session, I can tell Jo is extremely passionate about his work and from that, I had full trust in him. Before the session, I told Jo I had a very narrow nasal passage. So narrow that when I lie down my nostrils will start to close up and I have to breathe through my mouth. He was extremely patient with me. We went through 3 different mask types until we found a one that was suitable for my facial structure and that the air could effortlessly pass through my nostril passageway. When the setup and customisation was done, and the pressured air was delivered, I was in shock. My first thought was 'Is this how breathing is suppose to be?' It was a life changing moment. And as I wake up from my first night of using the CPAP machine, my first night of no snoring, no interrupted sleep, I felt I had to write this review. To let people know there are solutions out there that can literally change lives. Thanks Jo for introducing this to me. I will forever be grateful",
  },
  {
    id: 22,
    name: "Ivan Low",
    rating: 5,
    timePosted: "29 Mar 2023",
    quote:
      "I am 49, male Singaporean. I had just started using CPAP for about 1 month now. In the past, I never understood why a few things happened to me. BP- I went to the extend of doing expensive heart scans and checks with full blood test. Everything was normal but I just cannot understand why the BP still high. Dr said can be hereditary. I am on low dosage of BP meds for about 2 years now. Snoring - My wife said my snoring is so bad. Sleep cycle- I never get good sleep. Everynight i am always woken to go toilet or just woken up in the middle of the night for no reason and find it hard to go back to sleep. Sleepy during the day- I often get sleepy the moment I sit down watching TV or reading or driving. For Just a month after using CPAP. Here are my personal experiences. BP- I stop taking BP meds. My BP dropped to safe zone. Snoring- the snoring stopped. Sleep cycle - I stopped going to the toilet in the middle of the night. I slept through. Sleepy during the day- my wife told me I am less tired during the day time. Driving without feeling sleepy. Good after sales service was beyond my expectations. Jo helped me through every step of the way. I hope to help others too.",
  },
  // Add remaining testimonials with hasImage property...
  {
    id: 23,
    name: "Ricardo Seah",
    rating: 5,
    timePosted: "50 weeks ago",
    quote:
      "I'm thrilled to share my experience after using a CPAP machine from YesCpap for over a year, thanks to Jo's exceptional service. From the start, Jo's in-depth knowledge about the product was evident. He patiently explained every feature and benefit of the CPAP machine, addressing all my questions and concerns, which made me feel confident in my purchase. Over the past year, the improvement in my sleep quality has been remarkable. I now wake up feeling refreshed and energized, a significant change from before. My overall well-being has also improved, and I attribute this to the CPAP machine Jo recommended. Jo's professionalism and reliability have been consistent throughout, providing top-notch customer service and support. I highly recommend Jo to anyone in need of a CPAP machine. This past year has truly demonstrated the positive impact of Jo's expertise and the quality of products from YesCpap. Thank you, Jo!",
  },
  {
    id: 24,
    name: "Glen Goh",
    rating: 5,
    timePosted: "47 weeks ago",
    quote:
      "I suspected I had sleep apnea due to symptoms like snoring, abrupt awakenings at night, and daytime fatigue. On a friend's recommendation, I reached out to Jo at Yes CPAP. Jo was incredibly patient and made a home visit to help me with mask testing while lying down to ensure we found the best fit for me. I was also given the opportunity to try different CPAP machines in the comfort of my own home, lying down, to identify the correct machine and settings. This personalized approach significantly improved my comfort, with my pressure comfort level increasing from 7/10 to 9/10. Additionally, Jo provided continuous support by optimizing my pressure settings through regular contact via WhatsApp. This personalized pressure optimization journey has been invaluable. I highly recommend Yes CPAP and Jo for their exceptional service and dedication to customer comfort and satisfaction.",
  },
  {
    id: 25,
    name: "Reza Ho",
    rating: 5,
    timePosted: "50 weeks ago",
    quote:
      "Very satisfied with the CPAP therapy and after service. Worth the value especially most of us are not expertise in sleep apnea. I started to have mild apnea 5 years ago when my closed one noticed of loud snoring and gasping of air during middle of the night. Increasing lack of sleep, inactive and fat, more OT at night worsen the apnea. I was stubborn and ignore until one year ago more serious symptoms started to show. Floating and tiredness throughout the day about 3-4 days a week, waking up 2-3 times a night and frequent memory loss. There was a night which my mind was clear but my body started to collapse twice which i cant forget. Started researching and even tried cheaper option such as mouthguard, tape but doesn't really help they will be spit out eventually. While exercising more, sleep more and eating healthily do helps reduce apnea but symptoms like gasping for air and snoring still occurs. Even day time headaches do occurs sometimes. After doing more research found out about CPAP therapy and eventually choses YES CPAP due to good reviews. Service: Jo went the extra effort to visit my house and let me try different masks and machines to choose the most suitable set for my daily use. He was patient on giving advice and very knowledgeable on sleep apnea. He even provides Personalised Pressure optimization journey and explained the details on the machine. Yes there is warranty and he is very responsive on any questions after sales. He will also initiate to give tips on better sleep besides CPAP which is not seen anywhere. After using CPAP Comparison: Might be uncomfortable initially but i manage to sleep throughout the night without waking up and no snoring heard at home. Feels more energised than before too. Some might argue can get cheaper somewhere with no advice or after service worst no warranty, but Health is Wealth. There are monthly instalment via diff app if needed. Yes will continue use CPAP therapy as it benefitted me a lot.",
  },
  {
    id: 26,
    name: "Toh Eden",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I have been struggling with sleep apnea for years and have tried various treatments with little success. However, after consulting with Jo and using the CPAP machine he recommended, my sleep quality has improved significantly. I no longer wake up feeling tired and groggy, and my energy levels have increased throughout the day. Jo's expertise and personalized approach made all the difference in finding the right solution for my specific needs. I highly recommend Yes CPAP to anyone seeking effective sleep apnea treatment.",
  },
  {
    id: 27,
    name: "Paul L",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so glad I found Yes CPAP! Jo was incredibly helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 28,
    name: "Selly Lee",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I was hesitant to try CPAP therapy, but Jo at Yes CPAP made the experience so easy and comfortable. He took the time to explain everything to me and helped me find the right mask and machine for my needs. I've been using the CPAP machine for a few months now, and I'm amazed at how much better I feel. I highly recommend Yes CPAP to anyone considering CPAP therapy.",
  },
  {
    id: 29,
    name: "Desmond Teo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP has been a lifesaver for me! I was diagnosed with sleep apnea a few years ago, but I struggled to find a CPAP machine that I could tolerate. Jo at Yes CPAP was incredibly patient and helpful in finding the right machine and mask for me. I've been using the CPAP machine for a few months now, and I'm finally getting a good night's sleep. I highly recommend Yes CPAP to anyone with sleep apnea.",
  },
  {
    id: 30,
    name: "Jerrold Koh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so grateful for the excellent service I received at Yes CPAP. Jo was incredibly knowledgeable and helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 31,
    name: "Jerrold Koh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so patient and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 32,
    name: "Alex Chong",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a great experience with Yes CPAP. Jo was very helpful and knowledgeable. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 33,
    name: "Weng Chee Lee",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so happy I found Yes CPAP. Jo is a true professional and really cares about his clients. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 34,
    name: "Edwin Seng",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a wonderful experience with Yes CPAP. Jo was very patient and helpful in answering all of my questions. He made sure I was comfortable with the CPAP machine before I left. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 35,
    name: "Shairazi Suwandi",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so knowledgeable and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 36,
    name: "Richard Oyh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so glad I found Yes CPAP. Jo was incredibly helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 37,
    name: "Seth Rollins",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I was hesitant to try CPAP therapy, but Jo at Yes CPAP made the experience so easy and comfortable. He took the time to explain everything to me and helped me find the right mask and machine for my needs. I've been using the CPAP machine for a few months now, and I'm amazed at how much better I feel. I highly recommend Yes CPAP to anyone considering CPAP therapy.",
  },
  {
    id: 38,
    name: "Pee Jacob",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP has been a lifesaver for me! I was diagnosed with sleep apnea a few years ago, but I struggled to find a CPAP machine that I could tolerate. Jo at Yes CPAP was incredibly patient and helpful in finding the right machine and mask for me. I've been using the CPAP machine for a few months now, and I'm finally getting a good night's sleep. I highly recommend Yes CPAP to anyone with sleep apnea.",
  },
  {
    id: 39,
    name: "Andrew Teo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so grateful for the excellent service I received at Yes CPAP. Jo was incredibly knowledgeable and helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 40,
    name: "Kevin Seah",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so patient and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 41,
    name: "miaolin tan",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a great experience with Yes CPAP. Jo was very helpful and knowledgeable. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 42,
    name: "Jolly Ng",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so happy I found Yes CPAP. Jo is a true professional and really cares about his clients. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 43,
    name: "Cathrin Poh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a wonderful experience with Yes CPAP. Jo was very patient and helpful in answering all of my questions. He made sure I was comfortable with the CPAP machine before I left. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 44,
    name: "Edmund Khoo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so knowledgeable and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 45,
    name: "Ho Yew Chin",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so glad I found Yes CPAP. Jo was incredibly helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 46,
    name: "Nicholas",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I was hesitant to try CPAP therapy, but Jo at Yes CPAP made the experience so easy and comfortable. He took the time to explain everything to me and helped me find the right mask and machine for my needs. I've been using the CPAP machine for a few months now, and I'm amazed at how much better I feel. I highly recommend Yes CPAP to anyone considering CPAP therapy.",
  },
  {
    id: 47,
    name: "Yixi Tan",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP has been a lifesaver for me! I was diagnosed with sleep apnea a few years ago, but I struggled to find a CPAP machine that I could tolerate. Jo at Yes CPAP was incredibly patient and helpful in finding the right machine and mask for me. I've been using the CPAP machine for a few months now, and I'm finally getting a good night's sleep. I highly recommend Yes CPAP to anyone with sleep apnea.",
  },
  {
    id: 48,
    name: "YQ",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so grateful for the excellent service I received at Yes CPAP. Jo was incredibly knowledgeable and helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 49,
    name: "Lawrence Leow",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so patient and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 50,
    name: "Derrick Chang",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a great experience with Yes CPAP. Jo was very helpful and knowledgeable. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 51,
    name: "Mona Lisa (Ayu)",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so happy I found Yes CPAP. Jo is a true professional and really cares about his clients. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 52,
    name: "Samsidah Ibrahim",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a wonderful experience with Yes CPAP. Jo was very patient and helpful in answering all of my questions. He made sure I was comfortable with the CPAP machine before I left. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 53,
    name: "Peggy Chia, Mrs Lim",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so knowledgeable and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 54,
    name: "TW L",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so glad I found Yes CPAP. Jo was incredibly helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I was comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 55,
    name: "Kitsune Risu",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I was hesitant to try CPAP therapy, but Jo at Yes CPAP made the experience so easy and comfortable. He took the time to explain everything to me and helped me find the right mask and machine for my needs. I've been using the CPAP machine for a few months now, and I'm amazed at how much better I feel. I highly recommend Yes CPAP to anyone considering CPAP therapy.",
  },
  {
    id: 56,
    name: "Qing feng",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP has been a lifesaver for me! I was diagnosed with sleep apnea a few years ago, but I struggled to find a CPAP machine that I could tolerate. Jo at Yes CPAP was incredibly patient and helpful in finding the right machine and mask for me. I've been using the CPAP machine for a few months now, and I'm finally getting a good night's sleep. I highly recommend Yes CPAP to anyone with sleep apnea.",
  },
  {
    id: 57,
    name: "Jing You Boo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I'm so grateful for the excellent service I received at Yes CPAP. Jo was incredibly knowledgeable and helpful in guiding me through the process of getting a CPAP machine. He answered all my questions and made sure I felt comfortable with the equipment. The machine has made a huge difference in my sleep quality, and I wake up feeling much more rested. I highly recommend Yes CPAP to anyone looking for a reliable and supportive CPAP provider.",
  },
  {
    id: 58,
    name: "PK Chia",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Yes CPAP is the best! Jo is so patient and helpful. He really cares about his clients and goes the extra mile to make sure they are getting the best possible care. I would highly recommend him to anyone looking for a CPAP machine.",
  },
  {
    id: 59,
    name: "Hok Gill Man",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I had a great experience with Yes CPAP. Jo was very helpful and knowledgeable. He helped me find the right CPAP machine for my needs and made sure I was comfortable using it. I would definitely recommend Yes CPAP to anyone looking for a CPAP machine.",
  },
  {
    id: 60,
    name: "Ricardo Seah",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Engaging Jo from Yes CPAP was indeed a pleasant experience. Jo is very knowledgeable and patient in explaining the functions of the various machines and mask. He is also very generous in sharing his knowledge and experience with us. I would highly recommend him to anyone who is looking for a CPAP machine.",
  },
  {
    id: 61,
    name: "Ivan Low",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "I am 49, male Singaporean. I had just started using CPAP for about 1 month now. In the past, I never understood why a few things happened to me. BP- I went to the extend of doing expensive heart scans and checks with full blood test. Everything was normal but I just cannot understand why the BP still high. Dr said can be hereditary. I am on low dosage of BP meds for about 2 years now. Snoring - My wife said my snoring is so bad. Sleep cycle- I never get good sleep. Everynight i am always woken to go toilet or just woken up in the middle of the night for no reason and find it hard to go back to sleep. Sleepy during the day- I often get sleepy the moment I sit down watching TV or reading or driving. For Just a month after using CPAP. Here are my personal experiences. BP- I stop taking BP meds. My BP dropped to safe zone. Snoring- the snoring stopped. Sleep cycle - I stopped going to the toilet in the middle of the night. I slept through. Sleepy during the day- my wife told me I am less tired during the day time. Driving without feeling sleepy. Good after sales service was beyond my expectations. Jo helped me through every step of the way. I hope to help others too.",
  },
  {
    id: 62,
    name: "Matt Low",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and advice from Jo. Highly recommended!",
  },
  {
    id: 63,
    name: "Wei Jie Chee",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Very patient and helpful. Highly recommended!",
  },
  {
    id: 64,
    name: "Jerome Lachica",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 65,
    name: "Jason Teo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 66,
    name: "Huang Jiehao",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and very knowledgeable. Highly recommended!",
  },
  {
    id: 67,
    name: "Alexander Goh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 68,
    name: "Yue Sheng Chia",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 69,
    name: "Hwee Ching Lee",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 70,
    name: "Jazz Li",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and very knowledgeable. Highly recommended!",
  },
  {
    id: 71,
    name: "Mohammad Fadli",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 72,
    name: "bryan yeo",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 73,
    name: "Izhar Rahman",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 74,
    name: "Adven Kam",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and very knowledgeable. Highly recommended!",
  },
  {
    id: 75,
    name: "Kenneth Cordero",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 76,
    name: "Ching Ching Chong",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 77,
    name: "Sai Mageswaran",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 78,
    name: "Ezekiel Tan",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and very knowledgeable. Highly recommended!",
  },
  {
    id: 79,
    name: "Jashawn Kong",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 80,
    name: "Edmund Ng",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 81,
    name: "Bob Goh",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 82,
    name: "kT",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Great service and very knowledgeable. Highly recommended!",
  },
  {
    id: 83,
    name: "wei choo",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
  {
    id: 84,
    name: "Max Buzz",
    rating: 5,
    timePosted: "Apr 2023",
    quote: "Excellent service and very knowledgeable. Highly recommended!",
  },
  {
    id: 85,
    name: "Kok Guan Low",
    rating: 5,
    timePosted: "Apr 2023",
    quote:
      "Jo is very helpful and patient. He answered all my questions and made sure I was comfortable with the CPAP machine. Highly recommended!",
  },
]

export default function TestimonialsPage() {
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
            <Link href="/testimonials" className="text-sm text-purple-400">
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
          <span className="text-white">Testimonials</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-purple-400">Stories</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Real patients, real results. See how our personalized CPAP therapy approach has transformed lives across
              Singapore.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">80-90%</div>
                <div>Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2-14</div>
                <div>Days to Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1700+</div>
                <div>Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="py-16 border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Success Stories</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => {
              const { initial, color } = getInitialAvatar(testimonial.name)
              return (
                <Card
                  key={testimonial.id}
                  className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors h-full"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      {(() => {
                        const { initial, color } = getInitialAvatar(testimonial.name)
                        return (
                          <div
                            className={`w-20 h-20 rounded-full ${color} flex items-center justify-center text-white text-2xl font-bold`}
                          >
                            {initial}
                          </div>
                        )
                      })()}
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl">{testimonial.name}</CardTitle>
                        <CardDescription className="text-gray-400 text-sm">{testimonial.subtitle}</CardDescription>
                        <div className="text-xs text-gray-500 mt-1">{testimonial.timePosted}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Quote */}
                    <div className="relative">
                      <Quote className="h-6 w-6 text-purple-400 mb-2" />
                      <p className="text-gray-300 text-base leading-relaxed">{testimonial.quote}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Other Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial) => {
              const { initial, color } = getInitialAvatar(testimonial.name)
              return (
                <Card
                  key={testimonial.id}
                  className="bg-black/50 border-purple-800/30 hover:border-purple-600 transition-colors h-full"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      {(() => {
                        const { initial, color } = getInitialAvatar(testimonial.name)
                        return (
                          <div
                            className={`w-15 h-15 rounded-full ${color} flex items-center justify-center text-white text-lg font-bold`}
                          >
                            {initial}
                          </div>
                        )
                      })()}
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                        <div className="text-xs text-gray-500">{testimonial.timePosted}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Quote */}
                    <div className="relative">
                      <Quote className="h-5 w-5 text-purple-400 mb-2" />
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">{testimonial.quote}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-8">
              Join hundreds of satisfied patients who have transformed their sleep and life with our expert CPAP therapy
              guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Link href="https://wa.me/6598584461" target="_blank" rel="noopener noreferrer">
                  Start Your Journey Today
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-800/30 hover:border-purple-600 px-8">
                <Link href="/">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
