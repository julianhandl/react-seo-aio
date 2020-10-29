import React from "react";

interface HeadOpenGraphTitleProps {
    content: string;
}

/**
 * Returns the og:title meta tag
 * 
 * @param content - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @returns The og:title meta tag
 */
const HeadOpenGraphTitle: React.FC<HeadOpenGraphTitleProps> = ({content}) => {
    return <meta property="og:title" content={content} />
}

export default HeadOpenGraphTitle;