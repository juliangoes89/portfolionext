import { getTextAlign } from "@/utils/fonts";

export const Paragraph = ({content, textAlign="left", textColor}:{content?:string, textAlign?:"left" | "center" | "right" | "justify", textColor?:string})=>{
    return <p className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`} dangerouslySetInnerHTML={{__html:content || ''}} style={{color:textColor}}/>;
}