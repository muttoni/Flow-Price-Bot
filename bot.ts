import fetch from "node-fetch";
import Discord from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";
import "dotenv/config";

const client = new Discord.Client({
  shards: "auto",
  intents: [Discord.Intents.FLAGS.GUILDS],
});

console.log("Found Token - ", !!process.env.TOKEN);

async function getPrice() {
  try {
    const raw = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=flow&vs_currencies=usd&include_24hr_change=true");
    const { flow } = (await raw.json()) as Response;
    return {
      amount: flow.usd,
      change: flow.usd_24h_change
    }
  } catch (e) {
    console.error("Failed to fetch", e);
  }
}

async function login() {
  console.log("Attempting Login");
  client.login(process.env.TOKEN).then(() => "Logged in.");
}

async function setBotActivity() {
  const price = await getPrice();
  if (!price) return;

  const ClientPresence = client.user!.setActivity(`$${price.amount.toFixed(2)} (${price.change.toFixed(1)}% 24H)`, {
    type: ActivityTypes.WATCHING,
  });

  console.log(`Activity set to ${ClientPresence.activities[0].name}`);
}

async function main() {
  try {
    await login();
    setInterval(setBotActivity, 30000);
  } catch (e) {
    console.log(e);
  }
}

main();

//--

type Response = {
  "flow": {
    "usd": Number,
    "usd_24h_change": Number
  }
};
