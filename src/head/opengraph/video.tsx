import React from "react";

/**
 * Returns the og:video meta tag
 * 
 * @param content - A URL to a video file that complements this object.
 * @returns The og:video meta tag
 */
function generateOpenGraphVideo(content: string) {
    return <meta property="og:video" content={content} />
}

export default generateOpenGraphVideo;