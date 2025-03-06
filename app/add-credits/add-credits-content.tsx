"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Shirt } from "lucide-react"

const partnerBrands = [
  // ... (keep the partnerBrands array)
]

export function AddCreditsContent() {
  const [manualCode, setManualCode] = useState("")

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Manual code submitted:", manualCode)
    setManualCode("")
  }

  return (
    <>
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
      <div className="grid md:grid-cols-3 gap-8 mb-12">{/* ... (keep this section as is) */}</div>

      {/* How It Works section */}
      <h2 className="text-2xl font-bold mb-4 text-sustainable-700">How It Works</h2>
      <Card className="bg-sustainable-50 mb-12">{/* ... (keep this section as is) */}</Card>

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
    </>
  )
}

