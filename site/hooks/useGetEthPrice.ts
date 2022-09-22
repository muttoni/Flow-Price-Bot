import { useEffect, useState } from "react";

export default function useGetFlowPrice() {
  const [price, setPrice] = useState("...");

  useEffect(() => {
    async function getPrice() {
      const raw = await fetch(
        "https://api.coinbase.com/v2/prices/flow-usd/spot"
      );
      const { data } = await raw.json();
      setPrice(data.amount);
    }

    getPrice(); // initial call
    const interval = setInterval(() => getPrice(), 10000);

    return () => clearInterval(interval);
  }, []);

  return { price };
}
