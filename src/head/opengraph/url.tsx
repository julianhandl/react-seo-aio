import React from "react";

/**
 * Returns the og:url meta tag
 * 
 * @param content - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
 * @returns The og:url meta tag
 */
function generateOpenGraphUrl(content: string) {
    return <meta property="og:url" content={content} />
}

export default generateOpenGraphUrl;