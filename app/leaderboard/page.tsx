"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

// Individual leaderboard data
const leaderboardData = [
  { rank: 1, name: "Mari Johnson", country: "USA", credits: 5000, avatar: "https://i.pravatar.cc/150?u=mari" },
  { rank: 2, name: "David Chen", country: "Canada", credits: 4800, avatar: "https://i.pravatar.cc/150?u=david" },
  { rank: 3, name: "Sandro Silva", country: "Brazil", credits: 4600, avatar: "https://i.pravatar.cc/150?u=sandro" },
  { rank: 4, name: "Charles Dubois", country: "France", credits: 4400, avatar: "https://i.pravatar.cc/150?u=charles" },
  { rank: 5, name: "Ale Moreno", country: "Spain", credits: 4200, avatar: "https://i.pravatar.cc/150?u=ale" },
  { rank: 6, name: "Ivan Petrov", country: "Russia", credits: 4000, avatar: "https://i.pravatar.cc/150?u=ivan" },
  { rank: 7, name: "Yuki Tanaka", country: "Japan", credits: 3800, avatar: "https://i.pravatar.cc/150?u=yuki" },
  { rank: 8, name: "Zoe Williams", country: "Australia", credits: 3600, avatar: "https://i.pravatar.cc/150?u=zoe" },
  { rank: 9, name: "Liam O'Connor", country: "Ireland", credits: 3400, avatar: "https://i.pravatar.cc/150?u=liam" },
  { rank: 10, name: "Sofia Rossi", country: "Italy", credits: 3200, avatar: "https://i.pravatar.cc/150?u=sofia" },
]

// Update the company leaderboard data with actual logo URLs
const companyLeaderboardData = [
  {
    rank: 1,
    name: "Patagonia",
    sustainabilityScore: 92,
    certifications: ["B Corp", "Fair Trade Certified", "1% for the Planet"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patagonia.jpg-rzD2LlD7brZgarOIZAP6fikYsYfkLl.jpeg",
  },
  {
    rank: 2,
    name: "Eileen Fisher",
    sustainabilityScore: 89,
    certifications: ["B Corp", "Bluesign Certified"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EILEEN%20FISHER.jpg-REumIKRzopmU6bKXZRCvw3vNzWZBWl.jpeg",
  },
  {
    rank: 3,
    name: "Adidas",
    sustainabilityScore: 85,
    certifications: ["Better Cotton Initiative", "Bluesign Certified"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adidas.jpg-DZ28syxyimv3xcRD7Uxl4MKQ08tTA7.jpeg",
  },
  {
    rank: 4,
    name: "Nike",
    sustainabilityScore: 82,
    certifications: ["Better Cotton Initiative", "FSC Certified"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike.jpg-fwoZCDPaNjpICKScqEa06nQNf0H6If.jpeg",
  },
  {
    rank: 5,
    name: "H&M",
    sustainabilityScore: 79,
    certifications: ["Better Cotton Initiative", "Global Recycled Standard"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H&M.jpg-pUrZklssfUbq9ch6NscK7EbIts6lM2.jpeg",
  },
  {
    rank: 6,
    name: "Puma",
    sustainabilityScore: 77,
    certifications: ["Better Cotton Initiative", "Bluesign Certified"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PUMA.jpg-NmFk534sVSuFpOU2SH0XItIOlgOrYP.jpeg",
  },
  {
    rank: 7,
    name: "Levi's",
    sustainabilityScore: 75,
    certifications: ["Better Cotton Initiative", "Fair Labor Association"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LEVI'S:jpg.jpg-iN6guc6L2s0oBHzRUeErdxkMcoNiA2.jpeg",
  },
  {
    rank: 8,
    name: "Zara (Inditex)",
    sustainabilityScore: 72,
    certifications: ["Better Cotton Initiative", "Sustainable Apparel Coalition"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZARA.jpg-TzmSoMXpZlacUOyiKnbEQKyo6CqLaR.jpeg",
  },
  {
    rank: 9,
    name: "Uniqlo",
    sustainabilityScore: 70,
    certifications: ["Better Cotton Initiative", "Sustainable Apparel Coalition"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNIQLO.jpg-ABj0Jfha527E4xXK3KLPxIiK5BrFkF.jpeg",
  },
  {
    rank: 10,
    name: "Gap Inc.",
    sustainabilityScore: 68,
    certifications: ["Better Cotton Initiative", "Sustainable Apparel Coalition"],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GAP%20INC.jpg-VVdurrCiuplSWNwsG67KWtaWhZsCMN.jpeg",
  },
]

export default function Leaderboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sustainable-800">Global Sustainable Fashion Leaderboard</h1>

      <Tabs defaultValue="companies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="companies">Company Leaderboard</TabsTrigger>
          <TabsTrigger value="individuals">Individual Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="companies">
          <CompanyLeaderboard data={companyLeaderboardData} />
        </TabsContent>

        <TabsContent value="individuals">
          <IndividualLeaderboard data={leaderboardData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function IndividualLeaderboard({ data }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-sustainable-800">Top Sustainable Fashion Contributors</CardTitle>
        <CardDescription className="text-sustainable-600">
          See how you rank against sustainable fashion enthusiasts worldwide
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-sustainable-800">Rank</TableHead>
              <TableHead className="text-sustainable-800">Name</TableHead>
              <TableHead className="text-sustainable-800">Country</TableHead>
              <TableHead className="text-right text-sustainable-800">Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.rank}>
                <TableCell className="font-medium text-sustainable-800">{user.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={`${user.name}'s avatar`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sustainable-800">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sustainable-700">{user.country}</TableCell>
                <TableCell className="text-right text-sustainable-800">{user.credits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function CompanyLeaderboard({ data }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-sustainable-800">Top Sustainable Fashion Companies</CardTitle>
        <CardDescription className="text-sustainable-600">
          Leading fashion companies ranked by their sustainability efforts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-sustainable-800">Rank</TableHead>
              <TableHead className="text-sustainable-800">Company</TableHead>
              <TableHead className="text-sustainable-800">Sustainability Score</TableHead>
              <TableHead className="text-sustainable-800">Certifications</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((company) => (
              <TableRow key={company.rank}>
                <TableCell className="font-medium text-sustainable-800">{company.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sustainable-800">{company.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sustainable-700">{company.sustainabilityScore}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {company.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="bg-sustainable-100 text-sustainable-700">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

