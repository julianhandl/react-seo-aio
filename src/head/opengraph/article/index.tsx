import React from "react";
import generateOpenGraphArticleAuthor from "./author";
import generateOpenGraphArticleExpirationTime from "./expirationTime";
import generateOpenGraphArticleModifiedTime from "./modifiedTime";
import generateOpenGraphArticlePublishedTime from "./publishedTime";
import generateOpenGraphArticleSection from "./section";
import generateOpenGraphArticleTag from "./tag";

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
function generateOpenGraphArticle(data: HeadOpenGraphArticeProps) {
    const {
        publishedTime,
        modifiedTime,
        expirationTime,
        author,
        section,
        tag
    } = data;

    const articleTags = [];

    if(publishedTime) {
        articleTags.push(generateOpenGraphArticlePublishedTime(publishedTime));
    }
    if(modifiedTime) {
        articleTags.push(generateOpenGraphArticleModifiedTime(modifiedTime));
    }
    if(expirationTime) {
        articleTags.push(generateOpenGraphArticleExpirationTime(expirationTime));
    }
    if(author) {
        if(typeof author === "object") {
            author.forEach((profile, i) => {
                articleTags.push(generateOpenGraphArticleAuthor(profile));
            });
        }
        else {
            articleTags.push(generateOpenGraphArticleAuthor(author));
        }
    }
    if(section) {
        articleTags.push(generateOpenGraphArticleSection(section));
    }
    if(tag) {
        if(typeof tag === "object") {
            tag.forEach((word, i) => {
                articleTags.push(generateOpenGraphArticleTag(word));
            });
        }
        else {
            articleTags.push(generateOpenGraphArticleTag(tag));
        }
    }

    return articleTags;
}

export default generateOpenGraphArticle;