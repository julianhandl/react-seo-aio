import React from "react";

interface MetaOpenGraphTitleProps {
    content: string;
}

/**
 * Returns the og:title meta tag
 * 
 * @param content - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @returns The og:title meta tag
 */
const MetaOpenGraphTitle: React.FC<MetaOpenGraphTitleProps> = ({content}) => {
    return <meta property="og:title" content={content} />
}

export default MetaOpenGraphTitle;