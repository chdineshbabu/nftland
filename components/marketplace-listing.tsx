import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, User } from "lucide-react"

interface MarketplaceListingProps {
  id: string
  title: string
  location: string
  area: string
  price: string
  image: string
  seller: string
  type: string
}

export function MarketplaceListing({ id, title, location, area, price, image, seller, type }: MarketplaceListingProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge className="absolute top-2 right-2">{type}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{title}</h3>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm">{area}</span>
          <span className="font-bold">{price}</span>
        </div>
        <div className="flex items-center mt-2 text-xs text-muted-foreground">
          <User className="h-3 w-3 mr-1" />
          <span>Seller: {seller}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/dashboard/marketplace/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

