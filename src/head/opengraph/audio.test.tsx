import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphAudio from "./audio";

test('it should render a og:image meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphAudio content="http://audio" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:audio")
    expect(metaTag[0].getAttribute("content")).toBe("http://audio")
});