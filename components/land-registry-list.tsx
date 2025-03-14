import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, FileText, Edit, Trash, ShoppingBag } from "lucide-react"

export function LandRegistryList() {
  const properties = [
    {
      id: "land-001",
      title: "Residential Plot in Downtown",
      location: "123 Main St, Downtown",
      area: "1,200 sq ft",
      registrationDate: "2023-01-15",
      status: "Registered",
      tokenId: "#1234",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "land-002",
      title: "Commercial Space in Business District",
      location: "456 Commerce Ave, Business District",
      area: "2,500 sq ft",
      registrationDate: "2023-02-20",
      status: "For Sale",
      tokenId: "#5678",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: "land-003",
      title: "Agricultural Land",
      location: "789 Rural Road, Countryside",
      area: "5 acres",
      registrationDate: "2023-03-10",
      status: "Pending Verification",
      tokenId: "#9012",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  return (
    <div className="space-y-4">
      {properties.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-3">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">No properties registered</h3>
          <p className="mt-2 text-sm text-muted-foreground">You havent registered any land properties yet.</p>
          <Link href="/dashboard/registry/register">
            <Button className="mt-4">Register Your First Property</Button>
          </Link>
        </div>
      ) : (
        properties.map((property) => (
          <div key={property.id} className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4">
            <div className="relative h-32 w-full sm:w-48 rounded-md overflow-hidden">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{property.title}</h3>
                  <p className="text-sm text-muted-foreground">{property.location}</p>
                </div>
                <Badge
                  variant={
                    property.status === "Registered"
                      ? "default"
                      : property.status === "For Sale"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {property.status}
                </Badge>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Area</p>
                  <p className="text-sm font-medium">{property.area}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Registration Date</p>
                  <p className="text-sm font-medium">{property.registrationDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Token ID</p>
                  <p className="text-sm font-medium">{property.tokenId}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <Link href={`/dashboard/registry/${property.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit Details</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>List for Sale</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

