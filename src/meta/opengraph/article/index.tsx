import React from "react";
import MetaOpenGraphType from "../type";
import MetaOpenGraphArticleAuthor from "./author";
import MetaOpenGraphArticleExpirationTime from "./expirationTime";
import MetaOpenGraphArticleModifiedTime from "./modifiedTime";
import MetaOpenGraphArticlePublishedTime from "./publishedTime";
import MetaOpenGraphArticleSection from "./section";
import MetaOpenGraphArticleTag from "./tag";

export interface MetaOpenGraphArticeProps {
    publishedTime?: Date;
    modifiedTime?: Date;
    expirationTime?: Date;
    author?: string | string[];
    section?: string;
    tag?: string | string[];
}

/**
 * Returns all og:type=article meta tags for this document
 * 
 * @param publishedTime - When the article was first published.
 * @param modifiedTime - When the article was last changed.
 * @param expirationTime - When the article is out of date after.
 * @param author - Writers of the article. 
 * @param section - A high-level section name. E.g. Technology
 * @param tag - Tag words associated with this article.
 * @returns All og:type=article meta tags for this document
 */
const MetaOpenGraphArticle: React.FC<MetaOpenGraphArticeProps> = ({
    publishedTime,
    modifiedTime,
    expirationTime,
    author,
    section,
    tag
}) => {
    const articleTags = [
        <MetaOpenGraphType type="article"  key={`meta-opengraph-article-type`} />
    ];

    if(publishedTime) {
        articleTags.push(<MetaOpenGraphArticlePublishedTime key={`meta-opengraph-article-published_time`} content={publishedTime} />);
    }
    if(modifiedTime) {
        articleTags.push(<MetaOpenGraphArticleModifiedTime key={`meta-opengraph-article-modified_time`} content={modifiedTime} />);
    }
    if(expirationTime) {
        articleTags.push(<MetaOpenGraphArticleExpirationTime key={`meta-opengraph-article-expiration_time`} content={expirationTime} />);
    }
    if(author) {
        if(typeof author === "object") {
            author.forEach((profile, i) => {
                articleTags.push(<MetaOpenGraphArticleAuthor key={`meta-opengraph-article-author-${i}`} content={profile} />);
            });
        }
        else {
            articleTags.push(<MetaOpenGraphArticleAuthor key={`meta-opengraph-article-author`} content={author} />);
        }
    }
    if(section) {
        articleTags.push(<MetaOpenGraphArticleSection key={`meta-opengraph-article-section`} content={section} />);
    }
    if(tag) {
        if(typeof tag === "object") {
            tag.forEach((word, i) => {
                articleTags.push(<MetaOpenGraphArticleTag key={`meta-opengraph-article-tag-${i}`} content={word} />);
            });
        }
        else {
            articleTags.push(<MetaOpenGraphArticleTag key={`meta-opengraph-article-tag`} content={tag} />);
        }
    }

    return <React.Fragment>{articleTags}</React.Fragment>;
}

export default MetaOpenGraphArticle;