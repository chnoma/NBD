import { Head } from "$fresh/runtime.ts";
import { default as Divider } from "../islands/workspace.tsx";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>NodeSheet</title>
      </Head> */}
      <body>
        <h1>Hello World</h1>
        <Divider>
            <img src='https://images.heb.com/is/image/HEBGrocery/000377497' />
        </Divider>
      </body>
    </>
  );
}