import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TransactionHistoryProps {
  showAll?: boolean
}

export function TransactionHistory({ showAll = false }: TransactionHistoryProps) {
  const transactions = [
    {
      id: "tx-001",
      type: "Purchase",
      description: "Purchased Land NFT #1234",
      amount: "2.5 ETH",
      date: "2023-03-15",
      status: "completed",
      hash: "0x1234...5678",
    },
    {
      id: "tx-002",
      type: "Registration",
      description: "Registered Land NFT #5678",
      amount: "0.05 ETH",
      date: "2023-03-10",
      status: "completed",
      hash: "0x8765...4321",
    },
    {
      id: "tx-003",
      type: "Listing",
      description: "Listed Land NFT #9012 for sale",
      amount: "0.01 ETH",
      date: "2023-03-05",
      status: "pending",
      hash: "0x2468...1357",
    },
    {
      id: "tx-004",
      type: "Transfer",
      description: "Transferred Land NFT #3456 to 0x9876...5432",
      amount: "0.02 ETH",
      date: "2023-02-28",
      status: "failed",
      hash: "0x1357...2468",
    },
  ]

  const displayTransactions = showAll ? transactions : transactions.slice(0, 3)

  return (
    <div className="space-y-4">
      {displayTransactions.map((tx) => (
        <div key={tx.id} className="flex items-start gap-2 pb-3 border-b last:border-0">
          <div className="mt-0.5">
            {tx.status === "completed" && <CheckCircle className="h-5 w-5 text-green-500" />}
            {tx.status === "pending" && <Clock className="h-5 w-5 text-amber-500" />}
            {tx.status === "failed" && <AlertCircle className="h-5 w-5 text-red-500" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{tx.type}</h4>
              <span className="text-sm font-medium">{tx.amount}</span>
            </div>
            <p className="text-sm text-muted-foreground">{tx.description}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{tx.date}</span>
              <a
                href={`https://etherscan.io/tx/${tx.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                {tx.hash}
              </a>
            </div>
          </div>
        </div>
      ))}
      {!showAll && (
        <Button variant="ghost" size="sm" className="w-full">
          View All Transactions
        </Button>
      )}
    </div>
  )
}

