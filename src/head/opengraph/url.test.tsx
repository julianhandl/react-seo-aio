import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphUrl from "./url";

test('it should render a og:url meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphUrl("testurl"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:url")
    expect(metaTag[0].getAttribute("content")).toBe("testurl")
});