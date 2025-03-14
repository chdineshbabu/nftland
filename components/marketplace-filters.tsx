"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 10])

  const propertyTypes = [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "agricultural", label: "Agricultural" },
    { id: "industrial", label: "Industrial" },
  ]

  const verificationStatus = [
    { id: "verified", label: "Verified" },
    { id: "pending", label: "Pending Verification" },
  ]

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Price Range (ETH)</h3>
          <Slider defaultValue={[0, 10]} max={10} step={0.1} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between">
            <span className="text-sm">{priceRange[0]} ETH</span>
            <span className="text-sm">{priceRange[1]} ETH</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Property Type</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={`type-${type.id}`} />
                <Label htmlFor={`type-${type.id}`} className="text-sm font-normal">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Verification Status</h3>
          <div className="space-y-2">
            {verificationStatus.map((status) => (
              <div key={status.id} className="flex items-center space-x-2">
                <Checkbox id={`status-${status.id}`} defaultChecked={status.id === "verified"} />
                <Label htmlFor={`status-${status.id}`} className="text-sm font-normal">
                  {status.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col space-y-2">
          <Button variant="outline" size="sm">
            Reset Filters
          </Button>
          <Button size="sm">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}

