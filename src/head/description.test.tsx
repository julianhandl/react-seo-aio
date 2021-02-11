import React from "react";
import ReactDOM from "react-dom";
import generateDescription from "./description";

test('it should render a description meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateDescription("Lorem Ipsum"), container);

    const tag = container.getElementsByTagName("meta");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("name")).toBe("description")
    expect(tag[0].getAttribute("content")).toBe("Lorem Ipsum")
});