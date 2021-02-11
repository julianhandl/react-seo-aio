import React from "react";

/**
 * Returns the og:title meta tag
 * 
 * @param content - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @returns The og:title meta tag
 */
function generateOpenGraphTitle(content: string) {
    return <meta property="og:title" content={content} />
}

export default generateOpenGraphTitle;