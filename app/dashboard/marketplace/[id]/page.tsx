import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, User, Calendar, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyMap } from "@/components/property-map"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the property details based on the ID
  const property = {
    id: params.id,
    title: "Residential Plot in Downtown",
    description:
      "A beautiful residential plot located in the heart of downtown. Perfect for building your dream home with easy access to all amenities including schools, hospitals, and shopping centers.",
    location: "123 Main St, Downtown",
    area: "1,200 sq ft",
    price: "2.5 ETH",
    seller: "0x1234...5678",
    type: "Residential",
    listedDate: "2023-03-15",
    tokenId: "#1234",
    verified: true,
    documents: [
      { name: "Property Deed", verified: true },
      { name: "Survey Report", verified: true },
      { name: "Tax Records", verified: true },
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/marketplace">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">{property.title}</h2>
        <Badge>{property.type}</Badge>
        {property.verified && (
          <Badge variant="outline" className="ml-auto">
            <CheckCircle className="mr-1 h-3 w-3" /> Verified
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </div>

          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Property Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-medium">{property.area}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Token ID</p>
                  <p className="font-medium">{property.tokenId}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Listed Date</p>
                  <p className="font-medium">{property.listedDate}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="mt-2 text-muted-foreground">{property.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <div className="space-y-4">
                {property.documents.map((doc, index) => (
                  <Card key={index}>
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <CardTitle className="text-base">{doc.name}</CardTitle>
                        </div>
                        {doc.verified ? (
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          >
                            <CheckCircle className="mr-1 h-3 w-3" /> Verified
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                          >
                            <AlertCircle className="mr-1 h-3 w-3" /> Pending
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm">
                        View Document
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location">
              <Card>
                <CardHeader>
                  <CardTitle>Property Location</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {property.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PropertyMap />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-3xl font-bold">{property.price}</p>
                <p className="text-sm text-muted-foreground">≈ $5,000 USD</p>
              </div>

              <Separator />

              <div className="space-y-1">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <p className="text-sm">Seller</p>
                </div>
                <p className="font-medium">{property.seller}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <p className="text-sm">Listed on</p>
                </div>
                <p className="font-medium">{property.listedDate}</p>
              </div>

              <Button className="w-full">Purchase Property</Button>
              <Button variant="outline" className="w-full">
                Contact Seller
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Similar property"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Similar Property {item}</h4>
                    <p className="text-xs text-muted-foreground">1,000 sq ft</p>
                    <p className="text-sm font-medium">2.0 ETH</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

