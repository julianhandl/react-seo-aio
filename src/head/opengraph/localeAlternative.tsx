import React from "react";

/**
 * Returns the og:locale:alternative meta tag
 * 
 * @param content - An alternative locale this content is available in.
 * @returns The og:locale:alternative meta tag
 */
function generateOpenGraphLocaleAlternative(content: string) {
    return <meta property="og:locale:alternative" content={content} />
}

export default generateOpenGraphLocaleAlternative;