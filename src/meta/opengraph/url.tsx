import React from "react";

interface MetaOpenGraphUrlProps {
    content: string;
}

/**
 * Returns the og:url meta tag
 * 
 * @param content - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
 * @returns The og:url meta tag
 */
const MetaOpenGraphUrl: React.FC<MetaOpenGraphUrlProps> = ({content}) => {
    return <meta property="og:url" content={content} />
}

export default MetaOpenGraphUrl;