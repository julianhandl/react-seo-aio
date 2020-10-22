import React from "react";

interface MetaOpenGraphArticeAuthorProps {
    content: string;
}

/**
 * Returns the article:author meta tag for an og:type=article document
 * 
 * @param content - A URL to the current document's author profile (Facebook, ...)
 * @returns The article:author meta tag for an og:type=article document
 */
const MetaOpenGraphArticleAuthor: React.FC<MetaOpenGraphArticeAuthorProps> = ({content}) => {
    return <meta property="article:author" content={content} />
}

export default MetaOpenGraphArticleAuthor;