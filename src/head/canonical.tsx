import React from "react";

/**
 * Returns the canonical link-tag
 * 
 * @param href - The full link to the current page.
 * @returns The canonical link-tag
 */
function generateCanonical(href: string) {
    return <link rel="canonical" href={href} />
}

export default generateCanonical;