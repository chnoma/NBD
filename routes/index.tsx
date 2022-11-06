import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Base_Node from "../islands/base_node.tsx"
import Workspace from "../islands/workspace.tsx";

function draggable(e: MouseEvent) {
  const element: Partial<HTMLElement> = e.srcElement!;
  const parent = element.parentElement?.parentElement;
  e = e || window.event;
  e.preventDefault();
  let pos3 = e.clientX;
  let pos4 = e.clientY;
  document.onmouseup = () => {
      document.onmouseup = null;
      document.onmousemove = null;
  }
  document.onmousemove = e => {
      e = e || window.event;
      const pos1 = pos3 - e.clientX;
      const pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      parent!.style.top = (parent!.offsetTop - pos2) + 'px';
      parent!.style.left = (parent!.offsetLeft - pos1) + 'px';
  }
}

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
        <div class="bounds">
          <div class="draggable" >
            <div class="workspace" id="workspace">
              <Base_Node/>
              <Base_Node/>
              <Base_Node/>
              <Base_Node/>
              <Base_Node/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}