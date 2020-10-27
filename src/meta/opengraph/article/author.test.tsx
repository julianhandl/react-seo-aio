import React from "react";
import ReactDOM from "react-dom";
import MetaOpenGraphArticleAuthor from "./author";

test('it should render a article:author meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<MetaOpenGraphArticleAuthor content="Julian Handl" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("article:author")
    expect(metaTag[0].getAttribute("content")).toBe("Julian Handl")
});