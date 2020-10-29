import React from "react";

interface DescriptionProps {
    content: string;
}

/**
 * Returns the description meta-tag
 * 
 * @param content - The description of your page.
 * @returns The description meta-tag
 */
const HeadDescription: React.FC<DescriptionProps> = ({content}) => {
    return <meta name="description" content={content} />
}

export default HeadDescription;