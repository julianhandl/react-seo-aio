import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphArticle from ".";

test('it should render all normal opengraph article meta-tags', () => {
    const date = new Date("2020-10-27T10:00:00Z");

    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphArticle
        expirationTime={date}
        publishedTime={date}
        modifiedTime={date}
        author="Julian Handl"
        section="Technology"
        tag={"Tech"}
    />, container);

    const publishedTimeTag = container.querySelector('meta[property="article:published_time"]');
    expect(publishedTimeTag).toBeDefined();
    expect(publishedTimeTag!.getAttribute("content")).toBe("2020-10-27T10:00:00.000Z")

    const expirationTimeTag = container.querySelector('meta[property="article:expiration_time"]');
    expect(expirationTimeTag).toBeDefined();
    expect(expirationTimeTag!.getAttribute("content")).toBe("2020-10-27T10:00:00.000Z")

    const modifiedTimeTag = container.querySelector('meta[property="article:modified_time"]');
    expect(modifiedTimeTag).toBeDefined();
    expect(modifiedTimeTag!.getAttribute("content")).toBe("2020-10-27T10:00:00.000Z")

    const authorTag = container.querySelector('meta[property="article:author"]');
    expect(authorTag).toBeDefined();
    expect(authorTag!.getAttribute("content")).toBe("Julian Handl")

    const sectionTag = container.querySelector('meta[property="article:section"]');
    expect(sectionTag).toBeDefined();
    expect(sectionTag!.getAttribute("content")).toBe("Technology")

    const tagTag = container.querySelector('meta[property="article:tag"]');
    expect(tagTag).toBeDefined();
    expect(tagTag!.getAttribute("content")).toBe("Tech")
});

test('it should render multiple authors and tags', () => {
    const date = new Date("2020-10-27T10:00:00Z");

    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphArticle
        expirationTime={date}
        publishedTime={date}
        modifiedTime={date}
        author={["Julian Handl", "Juri Handl"]}
        section="Technology"
        tag={["Tech", "Art"]}
    />, container);

    const authors = container.querySelectorAll('meta[property="article:author"]');
    expect(authors.length).toBe(2);

    const tags = container.querySelectorAll('meta[property="article:tag"]');
    expect(tags.length).toBe(2);
});