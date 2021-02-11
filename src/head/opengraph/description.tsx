import React from "react";

/**
 * Returns the og:description meta tag
 * 
 * @param content - A one to two sentence description of your object.
 * @returns The og:description meta tag
 */
function generateOpenGraphDescription(content: string) {
    return <meta property="og:description" content={content} />
}

export default generateOpenGraphDescription;