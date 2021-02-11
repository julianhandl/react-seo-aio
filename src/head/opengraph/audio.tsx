import React from "react";

/**
 * Returns the og:audio meta tag
 * 
 * @param content - An audio URL which should represent your object within the graph.
 * @returns The og:audio meta tag
 */
function generateOpenGraphAudio(content: string) {
    return <meta property="og:audio" content={content} />
}

export default generateOpenGraphAudio;