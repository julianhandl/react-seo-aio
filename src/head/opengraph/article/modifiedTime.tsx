import React from "react";

/**
 * Returns the article:modified_time meta tag for an og:type=article document
 * 
 * @param content - When the article was last changed.
 * @returns The article:modified_time meta tag for an og:type=article document
 */
function generateOpenGraphArticleModifiedTime(date: Date) {
    return <meta property="article:modified_time" content={date.toISOString()} />
}

export default generateOpenGraphArticleModifiedTime;