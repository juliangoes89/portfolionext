import { Cover } from "../Cover";
import { Heading } from "../Heading";

export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
 return blocks.map((block) => {
    switch (block.name) {
        case 'core/heading': {
            return <Heading 
            key={block.id} 
            textAlign={block.attributes.textAlign} 
            level={block.attributes.level} 
            content={block.attributes.content}
            ></Heading>
        }
        case 'core/cover':{
            return <Cover key={
               block.id
            } background={block.attributes.url}>
                <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
            </Cover>
        }
        default:
            return null;
    }
 });
}