import React from "react";
import ReactDOM from "react-dom";
import Robots from "./robots";

test('it should render a robots tag with follow and index', () => {
    let container = document.createElement("div");
    ReactDOM.render(<Robots index={true} follow={true} />, container);

    const tag = container.getElementsByTagName("meta");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("name")).toBe("robots");
    expect(tag[0].getAttribute("content")).toBe("index,follow");
});

test('it should render a robots tag with index no follow', () => {
    let container = document.createElement("div");
    ReactDOM.render(<Robots index={true} follow={false} />, container);

    const tag = container.getElementsByTagName("meta");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("name")).toBe("robots");
    expect(tag[0].getAttribute("content")).toBe("index,nofollow");
});

test('it should render a robots tag with no index follow', () => {
    let container = document.createElement("div");
    ReactDOM.render(<Robots index={false} follow={true} />, container);

    const tag = container.getElementsByTagName("meta");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("name")).toBe("robots");
    expect(tag[0].getAttribute("content")).toBe("noindex,follow");
});

test('it should render a robots tag with no index and no follow', () => {
    let container = document.createElement("div");
    ReactDOM.render(<Robots index={false} follow={false} />, container);

    const tag = container.getElementsByTagName("meta");
    expect(tag[0]).toBeDefined();
    expect(tag[0].getAttribute("name")).toBe("robots");
    expect(tag[0].getAttribute("content")).toBe("noindex,nofollow");
});