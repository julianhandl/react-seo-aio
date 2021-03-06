import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphTitle from "./title";

test('it should render a og:title meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphTitle("Test Title"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:title")
    expect(metaTag[0].getAttribute("content")).toBe("Test Title")
});