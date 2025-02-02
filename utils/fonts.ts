export const getTextAlign = (textAlign: "left" | "center" | "right" | "justify" = "left") => {
    const textAlignMap: { [key in "left" | "center" | "right" | "justify"]: string } = {
        "left": "text-left",
        "center": "text-center",
        "right": "text-right",
        "justify": "text-justify",
    };
    return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level: number = 1) => {
    const fontSizeMap: { [key: number]: string } = {
        1: "text-6xl",
        2: "text-5xl",
        3: "text-4xl",
        4: "text-3xl",
        5: "text-2xl",
        6: "text-xl",
    };
    return `${fontSizeMap[level] || ""}`;
}