import React from "react";

/**
 * Returns the article:tag meta tag for an og:type=article document
 * 
 * @param content - Tag word associated with this article.
 * @returns The article:tag meta tag for an og:type=article document
 */
function generateOpenGraphArticleTag(content: string) {
    return <meta property="article:tag" content={content} />
}

export default generateOpenGraphArticleTag;