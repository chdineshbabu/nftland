import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LandRegistrationForm } from "@/components/land-registration-form"

export default function RegisterLandPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Register New Land</h2>
        <p className="text-muted-foreground">
          Complete the form below to register your land as an NFT on the blockchain
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Land Registration Form</CardTitle>
          <CardDescription>Provide accurate information about your property</CardDescription>
        </CardHeader>
        <CardContent>
          <LandRegistrationForm />
        </CardContent>
      </Card>
    </div>
  )
}

