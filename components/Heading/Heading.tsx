import { getFontSizeForHeading, getTextAlign } from "@/utils/fonts";
import React from "react";

export const Heading = ({ textAlign, content, level=2 }: { textAlign?:'left'|'right'|'center', content?:string, level?:number }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content }, 
        className: `max-w-5xl mx-auto my-5 ${getTextAlign(textAlign??'left')} ${getFontSizeForHeading(level)}` 
    });
    return tag;
}