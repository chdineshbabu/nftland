"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, History, Settings, Users, LogOut, FileText, ShoppingBag } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/components/wallet-provider"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { address, disconnectWallet } = useWallet()

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Map, label: "Land Registry", href: "/dashboard/registry" },
    { icon: ShoppingBag, label: "Marketplace", href: "/dashboard/marketplace" },
    { icon: FileText, label: "My Documents", href: "/dashboard/documents" },
    { icon: History, label: "Transaction History", href: "/dashboard/transactions" },
    { icon: Users, label: "Contacts", href: "/dashboard/contacts" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Map className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">LandChain NFT</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Connected Wallet</span>
            <span className="text-xs text-muted-foreground">{address || "Not connected"}</span>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={disconnectWallet}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

