"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Mari Johnson",
    role: "Project Lead & Sustainability Strategist",
    country: "Chile",
    university: "Universidad Adolfo Ibáñez",
    expertise: "Sustainable Supply Chain Management",
    quote: "Fashion can be both beautiful and sustainable.",
    background:
      "Previously worked with leading sustainable fashion brands and has extensive experience in implementing circular economy principles in retail.",
    focus:
      "Developing strategies for sustainable fashion adoption and leading our initiative towards measurable impact.",
  },
  {
    name: "Charles Dubois",
    role: "Technology Lead & Innovation Director",
    country: "China",
    university: "Tsinghua University",
    expertise: "Digital Innovation & Blockchain",
    quote: "Technology is key to transforming the fashion industry.",
    background:
      "Brings expertise in blockchain technology and digital supply chain solutions from previous work with tech startups.",
    focus: "Implementing blockchain solutions for supply chain transparency and developing our digital platform.",
  },
  {
    name: "Sandro Silva",
    role: "Research Lead & Impact Analyst",
    country: "Switzerland",
    university: "University of St. Gallen",
    expertise: "Sustainability Metrics & Impact Assessment",
    quote: "Data drives sustainable transformation.",
    background: "Published researcher in sustainable fashion metrics and impact assessment methodologies.",
    focus: "Measuring our impact and developing sustainability frameworks.",
  },
  {
    name: "Ivan Petrov",
    role: "Operations Lead & Circular Economy Specialist",
    country: "Bulgaria",
    university: "University College Dublin",
    expertise: "Circular Economy & Operations",
    quote: "Every small action counts towards a sustainable future.",
    background: "Has implemented circular economy principles in major retail operations across Europe.",
    focus: "Optimizing our operational processes and developing circular fashion initiatives.",
  },
  {
    name: "Ale Moreno",
    role: "Design Lead & Sustainability Innovator",
    country: "USA",
    university: "Bocconi University",
    expertise: "Sustainable Design & Product Development",
    quote: "Design with purpose, create with conscience.",
    background: "Award-winning sustainable fashion designer with experience in zero-waste design.",
    focus: "Developing sustainable design guidelines and innovative product solutions.",
  },
  {
    name: "David Chen",
    role: "Marketing Lead & Consumer Insights Manager",
    country: "Switzerland",
    university: "University of St. Gallen",
    expertise: "Consumer Behavior & Digital Marketing",
    quote: "Sustainable fashion is the future of retail.",
    background: "Extensive experience in digital marketing and consumer behavior analysis in the fashion industry.",
    focus: "Leading our marketing strategies and consumer education initiatives.",
  },
]

const impactMetrics = [
  { metric: "2,500+", description: "Sustainable Items Tracked" },
  { metric: "50+", description: "Partner Brands" },
  { metric: "10,000+", description: "Active Users" },
  { metric: "15,000kg", description: "CO2 Emissions Saved" },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background_2.jpg-k37KKO8hSwxA6vVPgt7pcXAI0SyotZ.jpeg"
          alt="CEMS Sustainable Fashion Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sustainable-900/95 via-sustainable-900/80 to-sustainable-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Fashion Through Sustainability
              </h1>
              <div className="text-xl md:text-2xl text-white/90 space-y-4">
                <div>A team of passionate CEMS students united by a vision to revolutionize the fashion industry.</div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-sustainable-900 hover:bg-sustainable-50" asChild>
                    <Link href="#mission">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sustainable-300 text-sustainable-300 hover:bg-sustainable-300 hover:text-sustainable-900"
                    asChild
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-sustainable-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((item) => (
              <div key={item.metric} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sustainable-800 mb-2">{item.metric}</div>
                <div className="text-sustainable-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-sustainable-800 mb-4">Our Mission</h2>
            <div className="text-xl text-sustainable-600 space-y-4">
              <div>
                We are on a mission to transform the fashion industry through technology-driven sustainability
                solutions. Our platform empowers consumers and brands to make conscious choices that benefit both people
                and planet.
              </div>
              <div>
                As CEMS students from diverse backgrounds, we bring together our unique perspectives and expertise to
                create innovative solutions for sustainable fashion.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sustainable-700">
                  Leveraging blockchain technology and digital solutions to create transparency in fashion supply chains
                  and empower conscious consumer choices.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sustainable-700">
                  Promoting circular fashion principles and sustainable practices through our credit system and
                  educational initiatives.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sustainable-700">
                  Building a global community of conscious consumers and sustainable brands committed to transforming
                  the fashion industry.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-sustainable-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sustainable-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-sustainable-800">{member.name}</CardTitle>
                  <CardDescription>
                    <div className="text-sustainable-600">
                      <span className="font-medium">{member.role}</span>
                      <br />
                      {member.university}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sustainable-700">
                    <div>
                      <strong>Country:</strong> {member.country}
                    </div>
                    <div>
                      <strong>Expertise:</strong> {member.expertise}
                    </div>
                    <div>
                      <strong>Background:</strong> {member.background}
                    </div>
                    <div>
                      <strong>Current Focus:</strong> {member.focus}
                    </div>
                    <div className="italic">"{member.quote}"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-sustainable-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="text-xl mb-8 space-y-4">
              <div>
                We're always looking to collaborate with like-minded individuals and organizations who share our vision
                for a sustainable fashion future.
              </div>
              <div>
                Whether you're a brand interested in partnership, a student passionate about sustainable fashion, or
                someone who wants to learn more about our initiative, we'd love to hear from you.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-sustainable-900 hover:bg-sustainable-50 w-full sm:w-auto"
                onClick={() => (window.location.href = "mailto:makefashionsustainable@gmail.com")}
              >
                <Mail className="mr-2 h-5 w-5" />
                makefashionsustainable@gmail.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                asChild
              >
                <Link href="https://www.linkedin.com">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
