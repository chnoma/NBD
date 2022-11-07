import { Head } from "$fresh/runtime.ts";
import Node from 'islands/node.tsx'


export default function Home() {
  return (
    <>
      <Head>
        <title>NodeSheet</title>
      </Head>
      <body>
          <Node title='Add Node' inputs={['Parameter X', 'Parameter Y']} outputs={['Output Z']}/>
      </body>
    </>    
  );
}