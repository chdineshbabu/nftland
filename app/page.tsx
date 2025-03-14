import Link from "next/link"
import { ArrowRight, Shield, FileCheck, Coins, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { LandingFooter } from "@/components/landing-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Secure Land Ownership with Blockchain Technology
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Register, transfer, and verify land ownership securely using NFTs on the blockchain. Eliminate fraud
                  and simplify property transactions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/auth/register">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Browse Properties
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted-foreground/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-lg bg-background/80 p-6 backdrop-blur-sm">
                      <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold">Land NFT #1234</h3>
                        <p className="text-sm text-muted-foreground">123 Main St, Downtown</p>
                        <div className="flex justify-center gap-2">
                          <div className="rounded-md bg-muted px-2 py-1 text-xs">1,200 sq ft</div>
                          <div className="rounded-md bg-muted px-2 py-1 text-xs">Residential</div>
                        </div>
                        <p className="text-lg font-bold">2.5 ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose LandChain?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers secure, transparent, and efficient land registration and transfers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure</h3>
              <p className="text-center text-sm text-muted-foreground">
                Blockchain technology ensures tamper-proof records of land ownership.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Verified</h3>
              <p className="text-center text-sm text-muted-foreground">
                All properties are verified by authorized government entities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Tokenized</h3>
              <p className="text-center text-sm text-muted-foreground">
                Land ownership as NFTs enables fractional ownership and easy transfers.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Global</h3>
              <p className="text-center text-sm text-muted-foreground">
                Access property markets worldwide with our decentralized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Simple steps to register and manage your land on the blockchain.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                Step 1
              </div>
              <h3 className="text-xl font-bold">Connect Wallet</h3>
              <p className="text-center text-sm text-muted-foreground">
                Connect your digital wallet to our platform to start the registration process.
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                Step 2
              </div>
              <h3 className="text-xl font-bold">Submit Documents</h3>
              <p className="text-center text-sm text-muted-foreground">
                Upload your land documents and complete the verification process.
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="absolute -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                Step 3
              </div>
              <h3 className="text-xl font-bold">Receive NFT</h3>
              <p className="text-center text-sm text-muted-foreground">
                Once verified, your land is minted as an NFT in your wallet, proving ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Secure Your Land?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of property owners who have already secured their land on the blockchain.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/register">
                <Button size="lg" variant="secondary" className="w-full min-[400px]:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}

