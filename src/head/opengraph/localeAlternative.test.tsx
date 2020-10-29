import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraphLocaleAlternative from "./localeAlternative";

test('it should render a og:locale:alternative meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraphLocaleAlternative content="de_AT" />, container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:locale:alternative")
    expect(metaTag[0].getAttribute("content")).toBe("de_AT")
});