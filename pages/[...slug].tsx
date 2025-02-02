import { client } from "@/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";
import { gql } from "@apollo/client";
import { title } from "process";

export default function Page(props:any) {
    return <div>
        <BlockRenderer blocks={props.blocks} />
    </div>;
}

export const getStaticProps = async (context:any)=> {
    const uri = "/" + context.params.slug.join("/") + "/";
    const result = await client.query({
    query: gql`
      query NewQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks(postTemplate: false)
          }
        }
      }
    `,
    variables: {
        uri: uri
    }}
  );
  let data:any = {};
  if (result) {
    data = result.data;
  }
  return {
    props: {
        title: data.nodeByUri.title,
        blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};

export const getStaticPaths = async () => {
    const {data} = await client.query({
        query: gql`
            query AllPagesQuery {
                pages {
                    nodes {
                        uri
                    }
                }
            }
        `
    });

    const paths = data.pages.nodes.filter((page: any) => page.uri !== "/").map((page: any) => ({
        params: {slug: page.uri.substring(1, page.uri.length -1).split("/") },
    }));

    return {
        paths:paths,
        fallback: "blocking",
    }
};