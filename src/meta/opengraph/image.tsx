import React from "react";

interface MetaOpenGraphImageProps {
    content: string;
}

/**
 * Returns the og:image meta tag
 * 
 * @param content - An image URL which should represent your object within the graph.
 * @returns The og:image meta tag
 */
const MetaOpenGraphImage: React.FC<MetaOpenGraphImageProps> = ({content}) => {
    return <meta property="og:image" content={content} />
}

export default MetaOpenGraphImage;