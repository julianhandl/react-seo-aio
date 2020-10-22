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
        <MetaOpenGraphType type="article" />
    ];

    if(publishedTime) {
        articleTags.push(<MetaOpenGraphArticlePublishedTime content={publishedTime} />);
    }
    if(modifiedTime) {
        articleTags.push(<MetaOpenGraphArticleModifiedTime content={modifiedTime} />);
    }
    if(expirationTime) {
        articleTags.push(<MetaOpenGraphArticleExpirationTime content={expirationTime} />);
    }
    if(author) {
        if(typeof author === "object") {
            author.forEach(profile => {
                articleTags.push(<MetaOpenGraphArticleAuthor content={profile} />);
            });
        }
        else {
            articleTags.push(<MetaOpenGraphArticleAuthor content={author} />);
        }
    }
    if(section) {
        articleTags.push(<MetaOpenGraphArticleSection content={section} />);
    }
    if(tag) {
        if(typeof tag === "object") {
            tag.forEach(word => {
                articleTags.push(<MetaOpenGraphArticleTag content={word} />);
            });
        }
        else {
            articleTags.push(<MetaOpenGraphArticleTag content={tag} />);
        }
    }

    return <React.Fragment>{articleTags}</React.Fragment>;
}

export default MetaOpenGraphArticle;