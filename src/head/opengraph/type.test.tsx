import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphType from "./type";

test('it should render a og:type meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphType("article"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:type")
    expect(metaTag[0].getAttribute("content")).toBe("article")
});