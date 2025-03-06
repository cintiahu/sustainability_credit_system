"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

interface Purchase {
  id: number
  item: string
  date: string
  price: number
}

interface WardrobeAnalysisProps {
  purchases: Purchase[]
}

export function WardrobeAnalysis({ purchases }: WardrobeAnalysisProps) {
  const [sortColumn, setSortColumn] = useState<keyof Purchase | "daysOwned" | "dailyCost">("id")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const sortedPurchases = [...purchases].sort((a, b) => {
    let aValue: number | string = a[sortColumn as keyof Purchase]
    let bValue: number | string = b[sortColumn as keyof Purchase]

    if (sortColumn === "daysOwned") {
      aValue = getDaysOwned(a.date)
      bValue = getDaysOwned(b.date)
    } else if (sortColumn === "dailyCost") {
      aValue = getDailyCost(a)
      bValue = getDailyCost(b)
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column: typeof sortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const getDaysOwned = (purchaseDate: string) => {
    const today = new Date()
    const purchaseDay = new Date(purchaseDate)
    const diffTime = Math.abs(today.getTime() - purchaseDay.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getDailyCost = (purchase: Purchase) => {
    const daysOwned = getDaysOwned(purchase.date)
    return purchase.price / daysOwned
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-sustainable-800">Wardrobe Analysis</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("item")}>
                Item <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("price")}>
                Original Price <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("daysOwned")}>
                Days Owned <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("dailyCost")}>
                Daily Cost <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPurchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell className="font-medium">{purchase.item}</TableCell>
              <TableCell>${purchase.price.toFixed(2)}</TableCell>
              <TableCell>{getDaysOwned(purchase.date)}</TableCell>
              <TableCell>${getDailyCost(purchase).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

