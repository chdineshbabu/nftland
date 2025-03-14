import { MarketplaceFilters } from "@/components/marketplace-filters"
import { MarketplaceListing } from "@/components/marketplace-listing"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Land Marketplace</h2>
        <p className="text-muted-foreground">Browse and purchase land NFTs from verified sellers</p>
      </div>

      <div className="relative w-full max-w-lg">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by location, type, or price..." className="pl-8" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
        <MarketplaceFilters />
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MarketplaceListing
              id="land-001"
              title="Residential Plot in Downtown"
              location="123 Main St, Downtown"
              area="1,200 sq ft"
              price="2.5 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x1234...5678"
              type="Residential"
            />
            <MarketplaceListing
              id="land-002"
              title="Commercial Space in Business District"
              location="456 Commerce Ave, Business District"
              area="2,500 sq ft"
              price="5.0 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x8765...4321"
              type="Commercial"
            />
            <MarketplaceListing
              id="land-003"
              title="Agricultural Land"
              location="789 Rural Road, Countryside"
              area="5 acres"
              price="1.8 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x2468...1357"
              type="Agricultural"
            />
            <MarketplaceListing
              id="land-004"
              title="Beachfront Property"
              location="101 Ocean Drive, Seaside"
              area="3,000 sq ft"
              price="8.5 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x1357...2468"
              type="Residential"
            />
            <MarketplaceListing
              id="land-005"
              title="Industrial Warehouse"
              location="202 Factory Lane, Industrial Zone"
              area="10,000 sq ft"
              price="4.2 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x9876...5432"
              type="Industrial"
            />
            <MarketplaceListing
              id="land-006"
              title="Mountain Retreat"
              location="303 Mountain View, Highlands"
              area="2 acres"
              price="3.7 ETH"
              image="/placeholder.svg?height=200&width=300"
              seller="0x5432...9876"
              type="Residential"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

