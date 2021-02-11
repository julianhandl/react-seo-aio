import React from "react";

/**
 * Returns the title tag
 * 
 * @param content - The title of your page.
 * @returns The title tag
 */
function generateTitle(content: string) {
    return <title>{content}</title>
}

export default generateTitle;