import { theme } from "@/theme";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import util from 'util';

export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
    console.log(util.inspect(blocks, { showHidden: true, depth: null, colors: true }))
 return blocks.map((block) => {
    switch (block.name) {
        case 'core/paragraph': {
            const textColor = block.attributes.textColor as keyof typeof theme;
            return <Paragraph 
            key={block.id} 
            content={block.attributes.content} 
            textColor={theme[textColor] || block.attributes.style?.color?.text} 
            textAlign={block.attributes.textAlign}>
            </Paragraph>
        }
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