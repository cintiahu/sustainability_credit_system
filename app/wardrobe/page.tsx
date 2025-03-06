"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Expanded mock data
const purchaseHistory = [
  {
    id: 1,
    item: "Eco-friendly T-shirt",
    date: "2023-01-15",
    credits: 50,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eco-friendly%20T-shirt.jpg-nB8ni4MQBAh2qFeCS4fr5JqquOx0yM.jpeg",
    brand: "GreenThreads",
    location: "EcoMall, New York",
    quote: "Fashion can be a powerful tool for change. - Stella McCartney",
    material: "100% Organic Cotton",
    carbonFootprint: "2.5 kg CO2e",
    waterSaved: "2,700 liters",
  },
  {
    id: 2,
    item: "Recycled Jeans",
    date: "2023-02-28",
    credits: 75,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recycled%20Jeans.jpg-DuXRT2i9HWeu5HQfA5ea5pRvH8tb76.jpeg",
    brand: "BlueRevolution",
    location: "SustainableStyle, London",
    quote: "Buy less, choose well, make it last. - Vivienne Westwood",
    material: "80% Recycled Denim, 20% Organic Cotton",
    carbonFootprint: "4 kg CO2e",
    waterSaved: "3,800 liters",
  },
  {
    id: 3,
    item: "Organic Cotton Dress",
    date: "2023-04-10",
    credits: 100,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Organic%20Cotton%20Dress.jpg-FIRDuyWOl0kxIxSEGF6a6IJEpG2ihh.jpeg",
    brand: "NatureFashion",
    location: "GreenBoutique, Paris",
    quote: "The most sustainable garment is the one you already own. - Unknown",
    material: "100% Organic Cotton",
    carbonFootprint: "3.2 kg CO2e",
    waterSaved: "4,200 liters",
  },
  {
    id: 4,
    item: "Sustainable Sneakers",
    date: "2023-05-20",
    credits: 80,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustainable%20Sneakers.jpg-ladExnKp78oVL3ojAotwQ3yJxRzPdM.jpeg",
    brand: "EcoStep",
    location: "CleanKicks, Berlin",
    quote: "There is no beauty in the finest cloth if it makes hunger and unhappiness. - Mahatma Gandhi",
    material: "Recycled PET and Natural Rubber",
    carbonFootprint: "5.5 kg CO2e",
    waterSaved: "1,500 liters",
  },
  {
    id: 5,
    item: "Hemp Backpack",
    date: "2023-06-15",
    credits: 60,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hemp%20Backpack.jpg-GBb6ijEiskC59WPz7qyOXtWrfgmxFe.jpeg",
    brand: "EarthCarry",
    location: "GreenGoods, Amsterdam",
    quote: "Sustainability is no longer about doing less harm. It's about doing more good. - Jochen Zeitz",
    material: "100% Hemp Fabric",
    carbonFootprint: "1.8 kg CO2e",
    waterSaved: "2,300 liters",
  },
  {
    id: 6,
    item: "Bamboo Sunglasses",
    date: "2023-07-01",
    credits: 45,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bamboo%20Sunglasses.jpg-VENzViTbKPt5Ux86lbaYq1cC17YC1y.jpeg",
    brand: "EcoVision",
    location: "SustainableShop, Barcelona",
    quote: "The future of fashion is circular. - Ellen MacArthur",
    material: "Bamboo Frame, Recycled Plastic Lenses",
    carbonFootprint: "0.5 kg CO2e",
    waterSaved: "500 liters",
  },
  {
    id: 7,
    item: "Recycled Wool Sweater",
    date: "2023-07-15",
    credits: 90,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recycled%20Wool%20Sweater.jpg-2471iHb9LbVTGFUCGjXwzhh1r4CsuH.jpeg",
    brand: "WoolWise",
    location: "EcoWardrobe, Copenhagen",
    quote: "Waste is a design flaw. - Kate Krebs",
    material: "70% Recycled Wool, 30% Organic Cotton",
    carbonFootprint: "3.8 kg CO2e",
    waterSaved: "3,000 liters",
  },
  {
    id: 8,
    item: "Organic Linen Shirt",
    date: "2023-08-01",
    credits: 70,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Organic%20Linen%20Shirt.jpg-xNHAfTbe4iUGQel79QfZJkZmy34Tac.jpeg",
    brand: "PureFiber",
    location: "NaturalStyle, Stockholm",
    quote: "The best way to predict the future is to create it. - Peter Drucker",
    material: "100% Organic Linen",
    carbonFootprint: "2.1 kg CO2e",
    waterSaved: "2,800 liters",
  },
]

const creditHistory = [
  { date: "Jan", credits: 50 },
  { date: "Feb", credits: 125 },
  { date: "Mar", credits: 125 },
  { date: "Apr", credits: 225 },
  { date: "May", credits: 305 },
]

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getMonthName = (dateString: string) => {
  const date = new Date(dateString)
  return monthNames[date.getMonth()]
}

export default function Wardrobe() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const filteredPurchases = selectedMonth
    ? purchaseHistory.filter((purchase) => getMonthName(purchase.date) === selectedMonth)
    : purchaseHistory

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sustainable-800">My Sustainable Wardrobe</h1>
      <Tabs defaultValue="gallery" className="space-y-4">
        <TabsList className="bg-white">
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="gallery" className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPurchases.map((purchase) => (
              <Link href={`/wardrobe/${purchase.id}`} key={purchase.id}>
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src={purchase.image || "/placeholder.svg"}
                      alt={purchase.item}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover mb-2 rounded"
                    />
                    <h3 className="font-semibold text-sustainable-800">{purchase.item}</h3>
                    <p className="text-sm text-sustainable-600">Credits: {purchase.credits}</p>
                    <p className="text-sm text-sustainable-600">{purchase.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-sustainable-800">Purchase History</CardTitle>
              <CardDescription>Your sustainable fashion purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPurchases.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell className="font-medium text-sustainable-800">{purchase.item}</TableCell>
                      <TableCell className="text-sustainable-700">{purchase.brand}</TableCell>
                      <TableCell className="text-sustainable-700">{purchase.date}</TableCell>
                      <TableCell className="text-sustainable-700">{purchase.location}</TableCell>
                      <TableCell className="text-sustainable-700">{purchase.credits}</TableCell>
                      <TableCell>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/wardrobe/${purchase.id}`}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <Card className="bg-sustainable-100">
            <CardHeader>
              <CardTitle className="text-sustainable-700">Credit History</CardTitle>
              <CardDescription>Your sustainable fashion credit growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={creditHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="credits" stroke="#4CAF50" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 flex flex-wrap gap-2">
                {monthNames.map((month) => (
                  <Button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    variant={selectedMonth === month ? "default" : "outline"}
                    className="bg-sustainable-500 hover:bg-sustainable-600 text-white"
                  >
                    {month}
                  </Button>
                ))}
                <Button
                  onClick={() => setSelectedMonth(null)}
                  variant="outline"
                  className="bg-sustainable-200 hover:bg-sustainable-300 text-sustainable-700"
                >
                  All
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

