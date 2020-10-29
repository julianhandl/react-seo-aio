import React from "react";

interface HeadOpenGraphAudioProps {
    content: string;
}

/**
 * Returns the og:audio meta tag
 * 
 * @param content - An audio URL which should represent your object within the graph.
 * @returns The og:audio meta tag
 */
const HeadOpenGraphAudio: React.FC<HeadOpenGraphAudioProps> = ({content}) => {
    return <meta property="og:audio" content={content} />
}

export default HeadOpenGraphAudio;