import React from "react";

interface MetaOpenGraphArticeModifiedTimeProps {
    content: Date;
}

/**
 * Returns the article:modified_time meta tag for an og:type=article document
 * 
 * @param content - When the article was last changed.
 * @returns The article:modified_time meta tag for an og:type=article document
 */
const MetaOpenGraphArticleModifiedTime: React.FC<MetaOpenGraphArticeModifiedTimeProps> = ({content}) => {
    return <meta property="article:modified_time" content={content.toISOString()} />
}

export default MetaOpenGraphArticleModifiedTime;