import Head from "next/head";

export default function HeadMeta(){
  return (
  <Head>
      <title>Eth Price Discord Bot</title>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <meta name="title" content="Flow Price Discord Bot" />
      <meta name="description" content="Flow Price Bot for Discord"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://flow-price-bot.vercel.app"/>
      <meta property="og:title" content="Flow Price Discord Bot"/>
      <meta property="og:description" content="Flow Price Bot for Discord"/>
      <meta property="og:image" content=""/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://flow-price-bot.vercel.app"/>
      <meta property="twitter:title" content="Flow Price Discord Bot"/>
      <meta property="twitter:description" content="Flow Price Bot for Discord"/>
      <meta property="twitter:image" content="" />
  </Head>
  );
}
