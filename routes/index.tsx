import { Head } from "$fresh/runtime.ts";
import Tweet from "../islands/Tweet.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NodeSheet</title>
        <link href="./css/components/Tweet.css" rel="stylesheet" />
      </Head>
      <body>
          <Tweet poster='nikgeneburn' content='whew.. that was a long and painful pre-patch. we are working on the hotfixes and we will have a short rest after. Hope you are enjoying 😘' time={1656728220}/>
          <Tweet poster='benkressdesign' reply='nikgeneburn' content="You think it was painful for you?  how about for those of us who want to play your game, but can't because you guys didn't anticipate how the servers would handle the wipe load...  again." time={1656728220}/>
      </body>
    </>
    
  );
}