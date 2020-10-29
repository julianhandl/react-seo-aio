import React from "react";

interface TitleProps {
    content: string;
}

/**
 * Returns the title tag
 * 
 * @param content - The title of your page.
 * @returns The title tag
 */
const Title: React.FC<TitleProps> = ({content}) => {
    return <title>{content}</title>
}

export default Title;