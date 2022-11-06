import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link href="./css/index.css" rel="stylesheet"></link>
        <link href="./css/fonts.css" rel="stylesheet"></link>
      </Head>
      <div class="header">
        <div class="title">
          <h1>Nodesheet</h1>
          <p>It's a spreadsheet, but with nodes!</p>
        </div>
        <iframe allowtransparence="true" width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/Xtt3R4?gui=false&t=10&paused=false&muted=false" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
      </div>
    </>
  );
}
