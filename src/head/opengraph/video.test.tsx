import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphVideo from "./video";

test('it should render a og:image meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphVideo("http://video"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:video")
    expect(metaTag[0].getAttribute("content")).toBe("http://video")
});