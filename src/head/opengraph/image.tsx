import React from "react";

interface HeadOpenGraphImageProps {
    content: string;
}

/**
 * Returns the og:image meta tag
 * 
 * @param content - An image URL which should represent your object within the graph.
 * @returns The og:image meta tag
 */
const HeadOpenGraphImage: React.FC<HeadOpenGraphImageProps> = ({content}) => {
    return <meta property="og:image" content={content} />
}

export default HeadOpenGraphImage;