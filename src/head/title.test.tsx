import React from "react";
import ReactDOM from "react-dom";
import generateTitle from "./title";

test('it should render a title tag', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateTitle("Test Title"), container);

    const tag = container.getElementsByTagName("title");
    expect(tag).toBeDefined();
    expect(tag[0].innerHTML).toBe("Test Title")
});