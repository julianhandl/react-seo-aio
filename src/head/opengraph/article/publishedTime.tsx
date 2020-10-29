import React from "react";

interface HeadOpenGraphArticlePublishedTimeProps {
    content: Date;
}

/**
 * Returns the article:published_time meta tag for an og:type=article document
 * 
 * @param content - When the article was first published.
 * @returns The article:published_time meta tag for an og:type=article document
 */
const HeadOpenGraphArticlePublishedTime: React.FC<HeadOpenGraphArticlePublishedTimeProps> = ({content}) => {
    return <meta property="article:published_time" content={content.toISOString()} />
}

export default HeadOpenGraphArticlePublishedTime;