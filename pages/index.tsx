import { client } from "@/client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

export default function Home(props:any) {
  return (
    <div>
      <h1 style={{ position: "absolute", left: "-9999px" }}>Portafolio en construcción</h1>
      <div className="flex justify-center items-center">
        <img
          src="/PaginaConstruccion1.png"
          alt="Página en construcción"
          className="max-w-full max-h-full"
          style={{ maxHeight: "500px", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
/* <div>
      <BlockRenderer blocks={props.blocks} />
    </div> */
export const getStaticProps = async () => {
  const result = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `}
  );
  let data:any = {};
  if (result) {
    data = result.data;
  }
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};