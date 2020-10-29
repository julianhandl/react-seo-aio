import React from "react";

interface HeadOpenGraphArticeAuthorProps {
    content: string;
}

/**
 * Returns the article:author meta tag for an og:type=article document
 * 
 * @param content - A URL to the current document's author profile (Facebook, ...)
 * @returns The article:author meta tag for an og:type=article document
 */
const HeadOpenGraphArticleAuthor: React.FC<HeadOpenGraphArticeAuthorProps> = ({content}) => {
    return <meta property="article:author" content={content} />
}

export default HeadOpenGraphArticleAuthor;