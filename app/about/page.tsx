import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactSection } from "./contact-section"
import { HeroSection } from "./hero-section"

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
      <HeroSection />

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
              <p>
                We are on a mission to transform the fashion industry through technology-driven sustainability
                solutions. Our platform empowers consumers and brands to make conscious choices that benefit both people
                and planet.
              </p>
              <p>
                As CEMS students from diverse backgrounds, we bring together our unique perspectives and expertise to
                create innovative solutions for sustainable fashion.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sustainable-700">
                  Leveraging blockchain technology and digital solutions to create transparency in fashion supply chains
                  and empower conscious consumer choices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sustainable-700">
                  Promoting circular fashion principles and sustainable practices through our credit system and
                  educational initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sustainable-50">
              <CardHeader>
                <CardTitle className="text-sustainable-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sustainable-700">
                  Building a global community of conscious consumers and sustainable brands committed to transforming
                  the fashion industry.
                </p>
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
                  <CardDescription className="text-sustainable-600">
                    <span className="font-medium">{member.role}</span>
                    <br />
                    {member.university}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sustainable-700">
                    <p>
                      <strong>Country:</strong> {member.country}
                    </p>
                    <p>
                      <strong>Expertise:</strong> {member.expertise}
                    </p>
                    <p>
                      <strong>Background:</strong> {member.background}
                    </p>
                    <p>
                      <strong>Current Focus:</strong> {member.focus}
                    </p>
                    <p className="italic">"{member.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

