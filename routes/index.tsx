import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Base_Node from "../islands/basenode.tsx"
export default function Home() {
  return (
    <>
      <Head>
        <title>NodeSheet</title>
        <link href="./css/index.css" rel="stylesheet"></link>
        <link href="./css/fonts.css" rel="stylesheet"></link>
      </Head>
      <iframe src="https://www.shadertoy.com/embed/4ddGzj?gui=false&t=10&paused=false&muted=false" width="640" height="360" frameBorder="0" allowFullScreen="false"></iframe>
      <div class="canvas" id="canvas">
        <div class="workspace" id="workspace">
          <Base_Node/>
          <Base_Node/>
          <Base_Node/>
          <Base_Node/>
          <Base_Node/>
        </div>
      </div>
    </>
  );
}