import { useEffect, useState } from "react";

export default function useGetFlowPrice() {
  const [priceAmount, setPriceAmount] = useState("...");
  const [priceChange, setPriceChange] = useState("...");

  useEffect(() => {
    async function getPrice() {
      try {
        const raw = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=flow&vs_currencies=usd&include_24hr_change=true");
        const {flow} = await raw.json();

        setPriceAmount(flow.usd)
        setPriceChange(flow.usd_24h_change)

        console.log("COIN PRICE", flow.usd, flow.usd_24h_change)

        return {
          amount: flow.usd,
          change: flow.usd_24h_change
        }
      } catch (e) {
        console.error("Failed to fetch", e);
      }
    }

    getPrice(); // initial call
    const interval = setInterval(() => getPrice(), 10000);

    return () => clearInterval(interval);
  }, []);

  return { priceAmount, priceChange };
}
