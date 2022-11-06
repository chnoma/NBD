import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <iframe width="2543" height="1146" src="https://www.youtube.com/embed/1HZ3Tjohwqo" title="Bush reacts to latest Middle East violence" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}
