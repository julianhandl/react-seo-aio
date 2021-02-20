import React from "react";
import ReactDOM from "react-dom";
import generateStructuredDataArticle from "./article";

test('it should render structured data for an article', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateStructuredDataArticle({
        canonical: "https://google.com/article",
        headline: "Article headline",
        image: [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
        ],
        datePublished: new Date("2015-02-05T08:00:00Z"),
        dateModified: new Date("2015-02-05T09:00:00Z"),
        authorName: "John Doe",
        publisher: {
            name: "Google",
            logo: "https://google.com/logo.jpg"
        }
    }), container);

    const reference = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
        },
        "headline": "Article headline",
        "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
        ],
        "datePublished": "2015-02-05T08:00:00.000Z",
        "dateModified": "2015-02-05T09:00:00.000Z",
        "author": {
            "@type": "Person",
            "name": "John Doe"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Google",
            "logo": {
                "@type": "ImageObject",
                "url": "https://google.com/logo.jpg"
            }
        }
    }


    const tag = container.getElementsByTagName("script");
    expect(tag[0]).toBeDefined();
    expect(JSON.stringify(JSON.parse(tag[0].innerHTML))).toBe(JSON.stringify(reference));
});
