import React from "react";
import ReactDOM from "react-dom";
import Canonical from "./canonical";

test('it should render a canonical link-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(<Canonical href="http://example.com" />, container);

    const tag = container.getElementsByTagName("link");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("rel")).toBe("canonical");
    expect(tag[0].getAttribute("href")).toBe("http://example.com");
});