import React from "react";

/**
 * Returns the og:locale meta tag
 * 
 * @param content - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
 * @returns The og:locale meta tag
 */
function generateOpenGraphLocale(content: string) {
    return <meta property="og:locale" content={content} />
}

export default generateOpenGraphLocale;