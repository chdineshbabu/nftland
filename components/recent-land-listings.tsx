import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentLandListings() {
  const listings = [
    {
      id: "land-001",
      title: "Residential Plot in Downtown",
      location: "123 Main St, Downtown",
      area: "1,200 sq ft",
      price: "$120,000",
      status: "For Sale",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "land-002",
      title: "Commercial Space in Business District",
      location: "456 Commerce Ave, Business District",
      area: "2,500 sq ft",
      price: "$350,000",
      status: "For Sale",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "land-003",
      title: "Agricultural Land",
      location: "789 Rural Road, Countryside",
      area: "5 acres",
      price: "$75,000",
      status: "Pending",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  return (
    <div className="space-y-4">
      {listings.map((listing) => (
        <div key={listing.id} className="flex flex-col sm:flex-row gap-4 border rounded-lg p-3">
          <div className="relative h-24 w-full sm:w-36 rounded-md overflow-hidden">
            <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{listing.title}</h3>
              <Badge variant={listing.status === "Pending" ? "outline" : "default"}>{listing.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{listing.location}</p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-4">
                <span className="text-sm">{listing.area}</span>
                <span className="font-medium">{listing.price}</span>
              </div>
              <Link href={`/dashboard/marketplace/${listing.id}`}>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

