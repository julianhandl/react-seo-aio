import React from "react";

/**
 * Returns the article:published_time meta tag for an og:type=article document
 * 
 * @param content - When the article was first published.
 * @returns The article:published_time meta tag for an og:type=article document
 */
function generateOpenGraphArticlePublishedTime(date: Date) {
    return <meta property="article:published_time" content={date.toISOString()} />
}

export default generateOpenGraphArticlePublishedTime;