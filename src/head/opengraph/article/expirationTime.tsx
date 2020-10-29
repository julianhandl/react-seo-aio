import React from "react";

interface HeadOpenGraphArticeExpirationTimeProps {
    content: Date;
}

/**
 * Returns the article:expiration_time meta tag for an og:type=article document
 * 
 * @param content - When the article is out of date after.
 * @returns The article:expiration_time meta tag for an og:type=article document
 */
const HeadOpenGraphArticleExpirationTime: React.FC<HeadOpenGraphArticeExpirationTimeProps> = ({content}) => {
    return <meta property="article:expiration_time" content={content.toISOString()} />
}

export default HeadOpenGraphArticleExpirationTime;