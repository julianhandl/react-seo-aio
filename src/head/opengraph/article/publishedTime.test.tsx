import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphArticlePublishedTime from "./publishedTime";

test('it should render a article:published_time meta-tag', () => {
    const date = new Date("2020-10-27T10:00:00Z");

    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphArticlePublishedTime content={date} />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("article:published_time")
    expect(metaTag[0].getAttribute("content")).toBe("2020-10-27T10:00:00.000Z")
});