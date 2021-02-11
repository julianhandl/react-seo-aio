import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphArticleSection from "./section";

test('it should render a article:section meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphArticleSection("Technology"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("article:section")
    expect(metaTag[0].getAttribute("content")).toBe("Technology")
});