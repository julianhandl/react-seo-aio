import React from "react";

interface MetaOpenGraphArticeSectionProps {
    content: string;
}

/**
 * Returns the article:section meta tag for an og:type=article document
 * 
 * @param content - A high-level section name. E.g. Technology
 * @returns The article:author meta tag for an og:type=article document
 */
const MetaOpenGraphArticleSection: React.FC<MetaOpenGraphArticeSectionProps> = ({content}) => {
    return <meta property="article:section" content={content} />
}

export default MetaOpenGraphArticleSection;