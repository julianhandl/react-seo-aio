import React from "react";

interface HeadOpenGraphDescriptionProps {
    content: string;
}

/**
 * Returns the og:description meta tag
 * 
 * @param content - A one to two sentence description of your object.
 * @returns The og:description meta tag
 */
const HeadOpenGraphDescription: React.FC<HeadOpenGraphDescriptionProps> = ({content}) => {
    return <meta property="og:description" content={content} />
}

export default HeadOpenGraphDescription;