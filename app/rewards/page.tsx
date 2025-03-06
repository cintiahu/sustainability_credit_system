import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const rewardsData = [
  // Clothing & Fashion Items
  {
    id: 1,
    name: "Upcycled Denim Jacket",
    credits: 3000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upcycled%20Denim%20Jacket.jpg-sui384CnWm91r01XfI4tnWM0QK96I1.jpeg",
    description: "One-of-a-kind jacket featuring vintage-inspired artwork, each piece is unique and tells a story.",
    brand: "ReWear",
    availability: "Limited Stock",
    impact: "Saves 7,000 liters of water compared to a new denim jacket",
    madeFrom: "100% upcycled denim from post-consumer jeans",
    sizes: "XS to XL",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Recycled Silver Jewelry",
    credits: 4000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recycled%20Silver%20Jewelry.jpg-UjjJ5fXh1FkPPztoelzlqVnVV2bVXT.jpeg",
    description: "Handcrafted jewelry collection from recycled silver, featuring delicate heart designs.",
    brand: "EcoGlam",
    availability: "Limited Stock",
    impact: "Reduces demand for newly mined silver",
    madeFrom: "100% recycled sterling silver",
    type: "Necklace and pendant set",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Recycled Plastic Sunglasses",
    credits: 1500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recycled%20Plastic%20Sunglasses.jpg-ujSSKDcwyKKCFdoaoy8usEOnRPxiD6.jpeg",
    description: "Stylish sunglasses with blue mirrored lenses, made from ocean-bound plastic.",
    brand: "OceanView",
    availability: "In Stock",
    impact: "Each pair removes 5 plastic bottles from the ocean",
    madeFrom: "Recycled ocean-bound plastic",
    uvProtection: "100% UVA/UVB protection",
    category: "Accessories",
  },
  // Voucher
  {
    id: 4,
    name: "Eco Shopping Voucher",
    credits: 2000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eco_voucher.jpg-2etsMFN5Onf8cjKpMmsdh2jEXPjZfP.jpeg",
    description: "Digital voucher for sustainable fashion purchases at partner stores.",
    brand: "EcoVoucher",
    availability: "In Stock",
    impact: "Promotes sustainable shopping choices",
    value: "€50 equivalent",
    validity: "12 months",
    category: "Voucher",
  },
  // Other Items
  {
    id: 5,
    name: "Hemp Backpack",
    credits: 3500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hemp%20Backpack1.jpg-JpybhDkGEuA5WyAiPUDjmxqQl6mg3k.jpeg",
    description: "Minimalist hemp backpack perfect for everyday use.",
    brand: "GreenCarry",
    availability: "In Stock",
    impact: "Hemp requires 50% less water to grow than cotton",
    madeFrom: "100% organic hemp outer, recycled polyester lining",
    capacity: "15L with laptop sleeve",
    category: "Bags",
  },
  {
    id: 6,
    name: "Organic Cotton Tote Bag",
    credits: 750,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Organic%20Cotton%20Tote%20Bag.jpg-2NvG8Qc3xAlcf4qUdnSbMBh2y57WlU.jpeg",
    description: "Versatile organic cotton tote bag, perfect for shopping and everyday use.",
    brand: "EcoCarry",
    availability: "In Stock",
    impact: "Replaces up to 700 plastic bags over its lifetime",
    madeFrom: "100% GOTS certified organic cotton",
    size: '15" x 16" x 4"',
    category: "Bags",
  },
  {
    id: 7,
    name: "Eco-friendly Water Bottle",
    credits: 500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eco-friendly%20Water%20Bottle.jpg-ArrlCVLUx97PmOI4a54GQZNCkNLPIG.jpeg",
    description: "Insulated stainless steel water bottle in mint green, keeps drinks cold for 24 hours.",
    brand: "GreenDrink",
    availability: "In Stock",
    impact: "Eliminates need for 167 plastic bottles per year",
    madeFrom: "100% recycled 18/8 stainless steel",
    capacity: "750ml",
    category: "Lifestyle",
  },
  {
    id: 8,
    name: "Bamboo Cutlery Set",
    credits: 1000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bamboo%20Cutlery%20Set.jpg-vdpQXQfoAm09AAiWhqQnV9NHXQefIC.jpeg",
    description: "Portable bamboo cutlery set with denim carrying case.",
    brand: "EarthEat",
    availability: "In Stock",
    impact: "Eliminates need for disposable plastic cutlery",
    madeFrom: "100% organic bamboo",
    includes: "Fork, knife, spoon, chopsticks, and carrying case",
    category: "Lifestyle",
  },
  {
    id: 9,
    name: "Cork Yoga Mat",
    credits: 2500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cork%20Yoga%20Mat.jpg-8RvmlWXtk4rjtA3IHpludJlsxXKk9l.jpeg",
    description: "Natural cork yoga mat with artistic design, biodegradable and non-slip.",
    brand: "EcoYoga",
    availability: "In Stock",
    impact: "Biodegradable and renewable material",
    madeFrom: "Natural cork surface, recycled rubber base",
    size: '72" x 24" x 4mm thick',
    category: "Lifestyle",
  },
  {
    id: 10,
    name: "Solar-Powered Phone Charger",
    credits: 2000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solar-Powered%20Phone%20Charger.jpg-xD2wFpyINzgG2VFS37RCrALaDlF1QJ.jpeg",
    description: "Sleek solar-powered power bank for eco-friendly device charging.",
    brand: "SunPower",
    availability: "Limited Stock",
    impact: "Reduces reliance on grid electricity",
    madeFrom: "Recycled plastic casing, monocrystalline silicon solar cells",
    capacity: "10,000mAh",
    category: "Tech",
  },
]

export default function Rewards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sustainable-800">Redeem Your Credits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewardsData.map((reward) => (
          <Card key={reward.id} className="bg-white">
            <CardHeader>
              <CardTitle className="text-sustainable-800">{reward.name}</CardTitle>
              <CardDescription className="flex justify-between items-center">
                <span>{reward.brand}</span>
                <Badge
                  variant={reward.availability === "In Stock" ? "default" : "secondary"}
                  className={
                    reward.availability === "In Stock"
                      ? "bg-sustainable-600"
                      : "bg-sustainable-200 text-sustainable-800"
                  }
                >
                  {reward.availability}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 mb-4">
                <Image
                  src={reward.image || "/placeholder.svg"}
                  alt={reward.name}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <p className="text-sustainable-700">{reward.description}</p>
              <div className="mt-2">
                <Badge className="mt-2 bg-sustainable-100 text-sustainable-700">{reward.category}</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold text-sustainable-800">{reward.credits} credits</span>
              <Button className="bg-sustainable-600 hover:bg-sustainable-700 text-white">Redeem Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

