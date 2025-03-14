import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LandRegistryList } from "@/components/land-registry-list"

export default function LandRegistryPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Land Registry</h2>
        <Link href="/dashboard/registry/register">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Register New Land
          </Button>
        </Link>
      </div>
      <p className="text-muted-foreground">View and manage your registered land properties</p>

      <Card>
        <CardHeader>
          <CardTitle>My Registered Properties</CardTitle>
          <CardDescription>All your land properties registered on the blockchain</CardDescription>
        </CardHeader>
        <CardContent>
          <LandRegistryList />
        </CardContent>
      </Card>
    </div>
  )
}

