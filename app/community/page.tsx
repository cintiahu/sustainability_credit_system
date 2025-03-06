import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Sustainable Fashion Innovation Summit",
    organizer: "Nike",
    type: "Conference",
    date: "2023-09-15",
    time: "9:00 AM - 5:00 PM",
    location: "New York, NY",
    venue: "Javits Center",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainable%20Fashion%20Innovation%20Summit.jpg-I0VpY0zs0TneZKCQpvx61LyDVTeO66.jpeg",
    description:
      "Join industry leaders to explore cutting-edge sustainable practices in fashion. This summit will feature keynote speeches, panel discussions, and networking opportunities with pioneers in sustainable fashion.",
    agenda: [
      "9:00 AM - Registration and Welcome Coffee",
      "10:00 AM - Keynote: The Future of Sustainable Fashion",
      "11:30 AM - Panel: Innovative Materials in Sportswear",
      "1:00 PM - Lunch Break",
      "2:00 PM - Workshop: Implementing Circular Design",
      "4:00 PM - Closing Remarks and Networking",
    ],
    speakers: [
      "John Doe - Chief Sustainability Officer, Nike",
      "Jane Smith - Founder, EcoTextiles",
      "Dr. Emily Brown - Professor of Sustainable Fashion, FIT",
    ],
  },
  {
    id: 2,
    title: "Circular Economy Workshop",
    organizer: "Adidas",
    type: "Workshop",
    date: "2023-09-22",
    time: "10:00 AM - 4:00 PM",
    location: "Berlin, Germany",
    venue: "Adidas Headquarters",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Circular%20Economy%20Workshop.jpg-7HFkEN9Xy6HqOh0lK2Eg1QFHg7OEAI.jpeg",
    description:
      "Learn how to implement circular economy principles in fashion design and production. This hands-on workshop will guide participants through practical exercises and case studies.",
    agenda: [
      "10:00 AM - Introduction to Circular Economy",
      "11:00 AM - Case Study: Adidas Futurecraft.Loop",
      "12:30 PM - Lunch Break",
      "1:30 PM - Group Activity: Designing for Circularity",
      "3:00 PM - Presentation of Group Projects",
      "3:45 PM - Q&A and Closing Remarks",
    ],
    speakers: [
      "Maria Schmidt - Head of Circular Economy, Adidas",
      "Prof. Klaus Weber - Circular Design Expert, TU Berlin",
    ],
  },
  {
    id: 3,
    title: "Fashion for Climate Action",
    organizer: "UNDP",
    type: "Seminar",
    date: "2023-10-05",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    venue: "Zoom Webinar",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fashion%20for%20Climate%20Action.jpg-Yf0mWdNFm5pyfc6HVYifTgGBU2PWLX.jpeg",
    description:
      "Discover how the fashion industry can contribute to climate change mitigation. This online seminar will feature talks from climate scientists and fashion industry experts.",
    agenda: [
      "2:00 PM - Welcome and Introduction",
      "2:15 PM - Keynote: Climate Change and the Fashion Industry",
      "2:45 PM - Panel Discussion: Innovative Solutions for a Low-Carbon Fashion Future",
      "3:30 PM - Q&A Session",
      "3:55 PM - Closing Remarks",
    ],
    speakers: [
      "Dr. Sarah Johnson - Climate Scientist, IPCC",
      "Marco Rossi - Sustainability Director, Gucci",
      "Amina Razack - UNDP Climate Change Specialist",
    ],
  },
  {
    id: 4,
    title: "Sustainable Textiles Expo",
    organizer: "H&M",
    type: "Exhibition",
    date: "2023-10-12",
    time: "10:00 AM - 6:00 PM",
    location: "Stockholm, Sweden",
    venue: "Stockholm Exhibition Center",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainable%20Textiles%20Expo.jpg-FDxZtTrLRM0cIkmmb2cGDsdplGB93v.jpeg",
    description:
      "Explore the latest innovations in sustainable textiles and materials. This expo will showcase cutting-edge fabrics, recycling technologies, and sustainable production methods.",
    agenda: [
      "10:00 AM - Expo Opens",
      "11:00 AM - Guided Tour: Future Fabrics",
      "1:00 PM - Live Demonstration: Textile Recycling Technology",
      "3:00 PM - Panel: Scaling Sustainable Materials in Fashion",
      "5:00 PM - Networking Reception",
      "6:00 PM - Expo Closes",
    ],
    speakers: [
      "Elsa Persson - Head of Sustainability, H&M Group",
      "Dr. Yuki Tanaka - Founder, BioFiber Innovations",
      "Carlos Alvarez - CEO, Circular Systems",
    ],
  },
  {
    id: 5,
    title: "Ethical Fashion Hackathon",
    organizer: "Patagonia",
    type: "Hackathon",
    date: "2023-10-20",
    time: "9:00 AM - 9:00 PM",
    location: "San Francisco, CA",
    venue: "Patagonia Innovation Hub",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethical%20Fashion%20Hackathon.jpg-IEYIbOq88LJpmQ9B3DVgIM8oBqxYg2.jpeg",
    description:
      "Collaborate with designers and developers to create solutions for ethical fashion challenges. This 12-hour hackathon will focus on transparency in supply chains and fair labor practices.",
    agenda: [
      "9:00 AM - Registration and Team Formation",
      "10:00 AM - Challenge Presentation and Kickoff",
      "11:00 AM - Hacking Begins",
      "1:00 PM - Lunch Break",
      "2:00 PM - Hacking Continues",
      "6:00 PM - Dinner Break",
      "7:00 PM - Final Hour of Hacking",
      "8:00 PM - Project Presentations",
      "9:00 PM - Awards Ceremony and Closing",
    ],
    speakers: [
      "Rose Martinez - Director of Social Responsibility, Patagonia",
      "Alex Chen - Blockchain Expert, SupplyChainTech",
      "Fatima Ndiaye - Founder, FairFashion Initiative",
    ],
  },
]

export default function CommunityEvents() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sustainable-800">Sustainable Fashion Community Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="bg-white">
            <CardHeader>
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-sustainable-800">{event.title}</CardTitle>
              <CardDescription>
                <p className="text-sustainable-600">
                  Organized by: {event.organizer}
                  <br />
                  Date: {event.date}
                  <br />
                  Location: {event.location}
                </p>
              </CardDescription>
              <Badge className="mt-2 bg-sustainable-100 text-sustainable-800">{event.type}</Badge>
              <p className="mt-4 text-sustainable-700">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-sustainable-600 hover:bg-sustainable-700 text-white">
                <Link href={`/community/${event.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

