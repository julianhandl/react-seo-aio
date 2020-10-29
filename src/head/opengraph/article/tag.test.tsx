import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphArticleTag from "./tag";

test('it should render a article:tag meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphArticleTag content="Technology" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("article:tag")
    expect(metaTag[0].getAttribute("content")).toBe("Technology")
});