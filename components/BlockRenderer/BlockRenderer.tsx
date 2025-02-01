import { Cover } from "../Cover";

export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
 return blocks.map((block) => {
    switch (block.name) {
        case 'core/cover':{
            return <Cover key={
               block.id
            } background={block.attributes.url}></Cover>
        }
        default:
            return null;
    }
 });
}