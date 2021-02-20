import React from "react";

interface StructuredDataArticle {
    "@context": string;
    "@type": string;
    "mainEntityOfPage": {
        "@type": string;
        "@id": string;
    },
    "headline": string;
    "image"?: string | string[]
    "datePublished"?: string;
    "dateModified"?: string;
    "author"?: {
        "@type": string;
        "name": string;
    },
    "publisher"?: {
        "@type": string;
        "name": string;
        "logo"?: {
            "@type": string;
            "url": string;
        }
    }
}

interface StructuredDataArticleInput {
    canonical: string;
    headline: string;
    image?: string[];
    datePublished?: Date;
    dateModified?: Date;
    authorName?: string;
    publisher?: {
        name: string;
        logo?: string;
    }
}

/**
 * Returns the canonical link-tag
 * 
 * @param href - The full link to the current page.
 * @returns The canonical link-tag
 */
function generateStructuredDataArticle(input: StructuredDataArticleInput) {
    const data: StructuredDataArticle = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": input.canonical,
        },
        "headline": input.headline
    }

    if (input.image) {
        data.image = input.image;
    }
    if(input.datePublished) {
        data.datePublished = input.datePublished.toISOString();
    }
    if(input.dateModified) {
        data.dateModified = input.dateModified.toISOString();
    }
    if(input.authorName) {
        data.author = {
            "@type": "Person",
            name: input.authorName
        }
    }
    if(input.publisher) {
        data.publisher = {
            "@type": "Organization",
            name: input.publisher.name
        }
        if(input.publisher.logo) {
            data.publisher.logo = {
                "@type": "ImageObject",
                url: input.publisher.logo
            }
        }
    }

    return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

export default generateStructuredDataArticle;
