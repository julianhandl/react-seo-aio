import React from "react";
import ReactDOM from "react-dom";
import MetaOpenGraphImage from "./image";

test('it should render a og:image meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<MetaOpenGraphImage content="http://image" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:image")
    expect(metaTag[0].getAttribute("content")).toBe("http://image")
});