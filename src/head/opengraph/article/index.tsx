import React from "react";
import HeadOpenGraphType from "../type";
import HeadOpenGraphArticleAuthor from "./author";
import HeadOpenGraphArticleExpirationTime from "./expirationTime";
import HeadOpenGraphArticleModifiedTime from "./modifiedTime";
import HeadOpenGraphArticlePublishedTime from "./publishedTime";
import HeadOpenGraphArticleSection from "./section";
import HeadOpenGraphArticleTag from "./tag";

export interface HeadOpenGraphArticeProps {
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
const HeadOpenGraphArticle: React.FC<HeadOpenGraphArticeProps> = ({
    publishedTime,
    modifiedTime,
    expirationTime,
    author,
    section,
    tag
}) => {
    const articleTags = [];

    if(publishedTime) {
        articleTags.push(<HeadOpenGraphArticlePublishedTime key={`head-opengraph-article-published_time`} content={publishedTime} />);
    }
    if(modifiedTime) {
        articleTags.push(<HeadOpenGraphArticleModifiedTime key={`head-opengraph-article-modified_time`} content={modifiedTime} />);
    }
    if(expirationTime) {
        articleTags.push(<HeadOpenGraphArticleExpirationTime key={`head-opengraph-article-expiration_time`} content={expirationTime} />);
    }
    if(author) {
        if(typeof author === "object") {
            author.forEach((profile, i) => {
                articleTags.push(<HeadOpenGraphArticleAuthor key={`head-opengraph-article-author-${i}`} content={profile} />);
            });
        }
        else {
            articleTags.push(<HeadOpenGraphArticleAuthor key={`head-opengraph-article-author`} content={author} />);
        }
    }
    if(section) {
        articleTags.push(<HeadOpenGraphArticleSection key={`head-opengraph-article-section`} content={section} />);
    }
    if(tag) {
        if(typeof tag === "object") {
            tag.forEach((word, i) => {
                articleTags.push(<HeadOpenGraphArticleTag key={`head-opengraph-article-tag-${i}`} content={word} />);
            });
        }
        else {
            articleTags.push(<HeadOpenGraphArticleTag key={`head-opengraph-article-tag`} content={tag} />);
        }
    }

    return <React.Fragment>{articleTags}</React.Fragment>;
}

export default HeadOpenGraphArticle;