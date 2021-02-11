import React from "react";

/**
 * Returns the article:expiration_time meta tag for an og:type=article document
 * 
 * @param content - When the article is out of date after.
 * @returns The article:expiration_time meta tag for an og:type=article document
 */
function generateOpenGraphArticleExpirationTime(date: Date) {
    return <meta property="article:expiration_time" content={date.toISOString()} />
}

export default generateOpenGraphArticleExpirationTime;