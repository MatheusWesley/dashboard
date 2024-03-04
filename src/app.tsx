import { ClosedSales } from "./components/closed-sales"
import { MonthlyGoals } from "./components/monthly-goals"
import { NetPromoterScore } from "./components/net-promoter-score"
import { SalesPerDay } from "./components/sales-per-day"

export const App = () => {
  return (
    <>
      <main id="app" className="grid">
        <NetPromoterScore />
        <ClosedSales />
        <MonthlyGoals />
        <SalesPerDay />
      </main>
    </>
  )
}