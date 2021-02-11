import React from "react";
import ReactDOM from "react-dom";
import generateOpenGraphLocale from "./locale";

test('it should render a og:locale meta-tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateOpenGraphLocale("de_AT"), container);

    const metaTag = container.getElementsByTagName("meta");
    expect(metaTag).toBeDefined();
    expect(metaTag[0].getAttribute("property")).toBe("og:locale")
    expect(metaTag[0].getAttribute("content")).toBe("de_AT")
});