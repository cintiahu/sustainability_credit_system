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
import { WardrobeAnalysis } from "./wardrobe-analysis"

const purchaseHistory = [
  { id: 1, date: "2024-01-15", item: "Sweater", price: 50 },
  { id: 2, date: "2024-01-20", item: "Jeans", price: 75 },
  { id: 3, date: "2024-02-01", item: "T-shirt", price: 25 },
  { id: 4, date: "2024-02-10", item: "Shoes", price: 100 },
  { id: 5, date: "2024-03-01", item: "Jacket", price: 120 },
  { id: 6, date: "2024-03-15", item: "Hat", price: 20 },
]

const creditHistory = [
  // ... (保持不变)
]

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getMonthName = (dateString: string) => {
  const date = new Date(dateString)
  return monthNames[date.getMonth()]
}

export function WardrobeContent() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const filteredPurchases = selectedMonth
    ? purchaseHistory.filter((purchase) => getMonthName(purchase.date) === selectedMonth)
    : purchaseHistory

  return (
    <Tabs defaultValue="gallery" className="space-y-4">
      <TabsList className="bg-white">
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="list">List</TabsTrigger>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
        <TabsTrigger value="analysis">Analysis</TabsTrigger>
      </TabsList>
      <TabsContent value="gallery" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPurchases.map((purchase) => (
            <Card key={purchase.id}>
              <CardHeader>
                <CardTitle>{purchase.item}</CardTitle>
                <CardDescription>{getMonthName(purchase.date)}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={`https://source.unsplash.com/200x200/?${purchase.item}`}
                  alt={purchase.item}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-sm text-gray-500 mt-2">Price: ${purchase.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="list" className="space-y-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPurchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="font-medium">{purchase.date}</TableCell>
                  <TableCell>{purchase.item}</TableCell>
                  <TableCell>${purchase.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="calendar">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
            <CardDescription>A visual representation of your spending habits.</CardDescription>
          </CardHeader>
          <CardContent>
            <select
              className="border rounded p-2"
              onChange={(e) => setSelectedMonth(e.target.value)}
              value={selectedMonth || ""}
            >
              <option value="">All Months</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
            </select>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={Object.entries(
                  purchaseHistory.reduce((acc: { [key: string]: number }, purchase) => {
                    const month = getMonthName(purchase.date)
                    acc[month] = (acc[month] || 0) + purchase.price
                    return acc
                  }, {}),
                ).map(([month, total]) => ({ month, total }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analysis">
        <WardrobeAnalysis purchases={purchaseHistory} />
      </TabsContent>
      <div className="flex justify-end">
        <Link href="/wardrobe/new">
          <Button>
            Add Item <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Tabs>
  )
}

