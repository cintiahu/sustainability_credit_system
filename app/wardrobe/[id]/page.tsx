import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Mock data - in a real app this would come from your database
const items = {
  "1": {
    id: 1,
    item: "Eco-friendly T-shirt",
    brand: "GreenThreads",
    date: "2023-01-15",
    credits: 50,
    image: "/eco-tshirt.jpg",
    location: "EcoMall, New York",
    quote: "Fashion can be a powerful tool for change. - Stella McCartney",
    brandStory: `GreenThreads was founded in 2018 with a mission to revolutionize the t-shirt industry. 
    Our founder, Sarah Chen, witnessed firsthand the environmental impact of fast fashion during her 
    15 years in the textile industry and decided to make a change.`,
    sustainabilityFeatures: [
      "100% organic cotton sourced from certified fair-trade farmers",
      "Zero-waste manufacturing process",
      "Water-saving dyeing technology reduces water usage by 80%",
      "Solar-powered production facility",
      "Biodegradable packaging materials",
    ],
    impact: {
      waterSaved: "2,700 liters",
      co2Reduced: "5.2 kg",
      pesticidesFree: "0.3 kg",
    },
    certifications: ["Global Organic Textile Standard (GOTS)", "Fair Trade Certified", "OEKO-TEX Standard 100"],
  },
  // Add more items here...
}

export default function ItemDetail({ params }: { params: { id: string } }) {
  const item = items[params.id as keyof typeof items]

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.item}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-sustainable-800">{item.item}</h1>
            <p className="text-sustainable-600 text-lg">{item.brand}</p>
          </div>

          <div className="flex gap-2">
            {item.certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="bg-sustainable-100 text-sustainable-700">
                {cert}
              </Badge>
            ))}
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-sustainable-700">Environmental Impact</CardTitle>
              <CardDescription>Your purchase made a difference</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-sustainable-600">{item.impact.waterSaved}</p>
                <p className="text-sm text-sustainable-700">Water Saved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sustainable-600">{item.impact.co2Reduced}</p>
                <p className="text-sm text-sustainable-700">CO2 Reduced</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sustainable-600">{item.impact.pesticidesFree}</p>
                <p className="text-sm text-sustainable-700">Pesticides Avoided</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-sustainable-700">Brand Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sustainable-700">{item.brandStory}</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-sustainable-700">Sustainability Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {item.sustainabilityFeatures.map((feature) => (
                  <li key={feature} className="text-sustainable-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

