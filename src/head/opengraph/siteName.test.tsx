import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphSiteName from "./siteName";

test('it should render a og:locale meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphSiteName content="City" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:site_name")
    expect(metaTag[0].getAttribute("content")).toBe("City")
});