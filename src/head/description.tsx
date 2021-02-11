import React from "react";

/**
 * Returns the description meta-tag
 * 
 * @param content - The description of your page.
 * @returns The description meta-tag
 */
function generateDescription(content: string) {
    return <meta name="description" content={content} />
}

export default generateDescription;