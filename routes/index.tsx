import { Head } from "$fresh/runtime.ts";
import Avatar from "./Avatar.tsx";
import Tweet from "./Tweet.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NodeSheet</title>
      </Head>
      <Tweet>
        <Avatar size={150} />
      </Tweet>
    </>
  );
}