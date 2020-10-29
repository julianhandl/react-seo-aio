import React from "react";

interface HeadOpenGraphVideoProps {
    content: string;
}

/**
 * Returns the og:video meta tag
 * 
 * @param content - A URL to a video file that complements this object.
 * @returns The og:video meta tag
 */
const HeadOpenGraphVideo: React.FC<HeadOpenGraphVideoProps> = ({content}) => {
    return <meta property="og:video" content={content} />
}

export default HeadOpenGraphVideo;