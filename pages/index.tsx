import { client } from "@/client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

export default function Home(props:any) {
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

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