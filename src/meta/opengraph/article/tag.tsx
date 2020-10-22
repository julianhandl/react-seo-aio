import React from "react";

interface MetaOpenGraphArticeTagProps {
    content: string;
}

/**
 * Returns the article:tag meta tag for an og:type=article document
 * 
 * @param content - Tag word associated with this article.
 * @returns The article:tag meta tag for an og:type=article document
 */
const MetaOpenGraphArticleTag: React.FC<MetaOpenGraphArticeTagProps> = ({content}) => {
    return <meta property="article:tag" content={content} />
}

export default MetaOpenGraphArticleTag;