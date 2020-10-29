import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphDescription from "./description";

test('it should render a og:image meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphDescription content="Lorem Ipsum" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:description")
    expect(metaTag[0].getAttribute("content")).toBe("Lorem Ipsum")
});