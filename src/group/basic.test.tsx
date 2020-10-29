import React from "react";
import ReactDOM from "react-dom";
import HeadGroupBasic from "./basic";

test('it should render the basic head group', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadGroupBasic
        title="Lorem Ipsum"
        description="Lorem Ipsum Dolor"
        locale="de_AT"
        url="http://example.com"
    />, container);

    const title = container.getElementsByTagName("title");
    expect(title).toBeDefined();
    expect(title[0]!.innerHTML).toBe("Lorem Ipsum");

    const ogtitle = container.querySelector('meta[property="og:title"]');
    expect(ogtitle).toBeDefined();
    expect(ogtitle!.getAttribute("content")).toBe("Lorem Ipsum")

    const description = container.querySelector('meta[name="description"]');
    expect(description).toBeDefined();
    expect(description!.getAttribute("content")).toBe("Lorem Ipsum Dolor")

    const ogdescription = container.querySelector('meta[property="og:description"]');
    expect(ogdescription).toBeDefined();
    expect(ogdescription!.getAttribute("content")).toBe("Lorem Ipsum Dolor")

    const can = container.getElementsByTagName("link");
    expect(can[0]).toBeDefined();
    expect(can[0].getAttribute("rel")).toBe("canonical");
    expect(can[0].getAttribute("href")).toBe("http://example.com");

    const url = container.querySelector('meta[property="og:url"]');
    expect(url).toBeDefined();
    expect(url!.getAttribute("content")).toBe("http://example.com")

    const loc = container.querySelector('meta[property="og:locale"]');
    expect(loc).toBeDefined();
    expect(loc!.getAttribute("content")).toBe("de_AT")

    const robots = container.querySelector('meta[name="robots"]');
    expect(robots).toBeDefined();
    expect(robots!.getAttribute("content")).toBe("index,follow")
});