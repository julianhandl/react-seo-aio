import React from "react";

/**
 * Returns the og:image meta tag
 * 
 * @param content - An image URL which should represent your object within the graph.
 * @returns The og:image meta tag
 */
function generateOpenGraphImage(content: string) {
    return <meta property="og:image" content={content} />
}

export default generateOpenGraphImage;