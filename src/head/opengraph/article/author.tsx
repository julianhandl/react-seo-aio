import React from "react";

/**
 * Returns the article:author meta tag for an og:type=article document
 * 
 * @param content - A URL to the current document's author profile (Facebook, ...)
 * @returns The article:author meta tag for an og:type=article document
 */
function generateOpenGraphArticleAuthor(content: string) {
    return <meta property="article:author" content={content} />
}

export default generateOpenGraphArticleAuthor;