import { styled } from "../stitches.config";
import DiscordBot from "../components/DiscordBot/DiscordBot";
import Github from "../components/Github";
import InviteButton from "../components/InviteButton";
import useGetFlowPrice from "../hooks/useGetFlowPrice";

export default function Index() {
  const { priceAmount, priceChange } = useGetFlowPrice();

  return (
    <Container>
      <DiscordBot
        image="/favicon.png"
        name="Flow Bot"
        status={`$${parseFloat(priceAmount).toFixed(2)} (${parseFloat(priceChange).toFixed(1)}% 24H)`}
        size={1.8}
        style={{ boxShadow: "$1" }}
        isVerified
      />

      <InviteButton />
      <Github />
    </Container>
  );
}

const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 33,
});
