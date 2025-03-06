"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Shirt, ShoppingCart, CreditCard, Smartphone } from "lucide-react"

const partnerBrands = [
  {
    name: "Nike",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike.jpg-NvRP6zmheqhmrror2gg5kuL7YwZ5pY.jpeg",
    sustainabilityScore: 82,
  },
  {
    name: "Adidas",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adidas.jpg-k0I5co61E9Ru216qzC5UuGeNXlIYuT.jpeg",
    sustainabilityScore: 85,
  },
  {
    name: "PUMA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PUMA.jpg-C1EAcqMWJotJP93Hr8lrJGMB9WsyJq.jpeg",
    sustainabilityScore: 77,
  },
  {
    name: "H&M",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H&M.jpg-jvvf9rhsGUVy30Q4rq3KUpgJPnZID8.jpeg",
    sustainabilityScore: 79,
  },
  {
    name: "ZARA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZARA.jpg-7YUzwJkU0Dwxrvcq4sQcv9m5mhOOt7.jpeg",
    sustainabilityScore: 72,
  },
  {
    name: "UNIQLO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNIQLO.jpg-yDCsOvmLdHADGaliEgC3uhlGO2DfWb.jpeg",
    sustainabilityScore: 70,
  },
  {
    name: "Levi's",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEVI'S:jpg.jpg-WbRV2gwH4NGUmZHO7eYu74tsmaol4T.jpeg",
    sustainabilityScore: 75,
  },
  {
    name: "Patagonia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patagonia.jpg-vYJLUrQ7Dj1sU6zgnnyj2qunx1lbg0.jpeg",
    sustainabilityScore: 92,
  },
  {
    name: "Eileen Fisher",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EILEEN%20FISHER.jpg-hs8CY86y7fZq9Xr0S5fzI01gRK26pm.jpeg",
    sustainabilityScore: 89,
  },
  {
    name: "Gap Inc.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GAP%20INC.jpg-vFiReYVlQqlyKpD3lkGVmvKiA83cwt.jpeg",
    sustainabilityScore: 68,
  },
]

export default function AddCredits() {
  const [manualCode, setManualCode] = useState("")

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Manual code submitted:", manualCode)
    setManualCode("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sustainable-700">Add Sustainable Credits</h1>

      {/* Existing manual entry and QR code sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-sustainable-100">
          <CardHeader>
            <CardTitle className="text-sustainable-700">Scan QR Code</CardTitle>
            <CardDescription>Scan the QR code on your sustainable fashion item</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <QrCode size={100} className="text-sustainable-500 mb-4" />
            <p className="text-center text-sustainable-600">
              Use your device's camera to scan the QR code on your sustainable fashion item.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-sustainable-100">
          <CardHeader>
            <CardTitle className="text-sustainable-700">Manual Entry</CardTitle>
            <CardDescription>Enter the code manually if scanning doesn't work</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleManualSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="code">Product Code</Label>
                  <Input
                    id="code"
                    placeholder="Enter product code"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-sustainable-500 hover:bg-sustainable-600">
                  <Shirt className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Automated credit earning section */}
      <h2 className="text-2xl font-bold mb-4 text-sustainable-700">Automated Credit Earning</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sustainable-700">
              <ShoppingCart className="mr-2 h-6 w-6" />
              Online Shopping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sustainable-600">
              Automatically earn credits when you shop on partner e-commerce platforms. Look for the sustainable tag!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sustainable-700">
              <CreditCard className="mr-2 h-6 w-6" />
              In-Store Purchase
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sustainable-600">
              Use your linked credit card at participating stores to earn credits on eligible sustainable purchases.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sustainable-700">
              <Smartphone className="mr-2 h-6 w-6" />
              Mobile App Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sustainable-600">
              Connect our app to your favorite shopping apps and automatically track your sustainable purchases.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works section */}
      <h2 className="text-2xl font-bold mb-4 text-sustainable-700">How It Works</h2>
      <Card className="bg-sustainable-50 mb-12">
        <CardContent className="pt-6">
          <ol className="list-decimal list-inside space-y-2 text-sustainable-700">
            <li>Shop at our partner brands or online platforms</li>
            <li>Purchase items tagged as sustainable</li>
            <li>Credits are automatically added to your account</li>
            <li>Track your impact and redeem rewards!</li>
          </ol>
        </CardContent>
      </Card>

      {/* Partner Brand Network section */}
      <h2 className="text-2xl font-bold mb-6 text-sustainable-700">Our Partner Brand Network</h2>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partnerBrands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-sustainable-50"
            >
              <div className="relative w-32 h-20 mb-2">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={128}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm font-medium text-sustainable-700">Sustainability Score</p>
                <p className="text-center text-sustainable-600 font-bold">{brand.sustainabilityScore}/100</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sustainable-600 mb-4">
            Shop with our partner brands to automatically earn Sustainable Credits on eligible purchases.
          </p>
          <Button className="bg-sustainable-600 hover:bg-sustainable-700">View All Partner Brands</Button>
        </div>
      </div>
    </div>
  )
}

