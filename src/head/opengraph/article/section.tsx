import React from "react";

/**
 * Returns the article:section meta tag for an og:type=article document
 * 
 * @param content - A high-level section name. E.g. Technology
 * @returns The article:author meta tag for an og:type=article document
 */
function generateOpenGraphArticleSection(content: string) {
    return <meta property="article:section" content={content} />
}

export default generateOpenGraphArticleSection;