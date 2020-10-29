import React from "react";
import ReactDOM from "react-dom";
import HeadOpenGraph from ".";

test('it should render all reccomended opengraph meta-tags', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraph
        title="Lorem Ipsum"
        description="Lorem Ipsum Dolor"
        type="website"
        image="image"
        video="video"
        audio="audio"
        url="url"
        locale="de_AT"
        localeAlternative="en_US"
        siteName="City"
    />, container);

    const title = container.querySelector('meta[property="og:title"]');
    expect(title).toBeDefined();
    expect(title!.getAttribute("content")).toBe("Lorem Ipsum")

    const desc = container.querySelector('meta[property="og:description"]');
    expect(desc).toBeDefined();
    expect(desc!.getAttribute("content")).toBe("Lorem Ipsum Dolor")

    const type = container.querySelector('meta[property="og:type"]');
    expect(type).toBeDefined();
    expect(type!.getAttribute("content")).toBe("website")

    const image = container.querySelector('meta[property="og:image"]');
    expect(image).toBeDefined();
    expect(image!.getAttribute("content")).toBe("image")

    const video = container.querySelector('meta[property="og:video"]');
    expect(video).toBeDefined();
    expect(video!.getAttribute("content")).toBe("video")

    const audio = container.querySelector('meta[property="og:audio"]');
    expect(audio).toBeDefined();
    expect(audio!.getAttribute("content")).toBe("audio")

    const url = container.querySelector('meta[property="og:url"]');
    expect(url).toBeDefined();
    expect(url!.getAttribute("content")).toBe("url")

    const locale = container.querySelector('meta[property="og:locale"]');
    expect(locale).toBeDefined();
    expect(locale!.getAttribute("content")).toBe("de_AT")

    const alt = container.querySelector('meta[property="og:locale:alternative"]');
    expect(alt).toBeDefined();
    expect(alt!.getAttribute("content")).toBe("en_US")

    const name = container.querySelector('meta[property="og:site_name"]');
    expect(name).toBeDefined();
    expect(name!.getAttribute("content")).toBe("City")

});

test('it should render multiple language alternatives and images', () => {
    let container = document.createElement("div");
    ReactDOM.render(<HeadOpenGraph
        title="Lorem Ipsum"
        description="Lorem Ipsum Dolor"
        type="website"
        image={["image", "image2"]}
        video="video"
        audio="audio"
        url="url"
        locale="de_AT"
        localeAlternative={["en_US", "de_DE"]}
        siteName="City"
    />, container);

    const title = container.querySelector('meta[property="og:title"]');
    expect(title).toBeDefined();
    expect(title!.getAttribute("content")).toBe("Lorem Ipsum")

    const desc = container.querySelector('meta[property="og:description"]');
    expect(desc).toBeDefined();
    expect(desc!.getAttribute("content")).toBe("Lorem Ipsum Dolor")

    const type = container.querySelector('meta[property="og:type"]');
    expect(type).toBeDefined();
    expect(type!.getAttribute("content")).toBe("website")

    const image = container.querySelectorAll('meta[property="og:image"]');
    expect(image).toBeDefined();
    expect(image.length).toBe(2);
    expect(image[0]!.getAttribute("content")).toBe("image")
    expect(image[1]!.getAttribute("content")).toBe("image2")

    const video = container.querySelector('meta[property="og:video"]');
    expect(video).toBeDefined();
    expect(video!.getAttribute("content")).toBe("video")

    const audio = container.querySelector('meta[property="og:audio"]');
    expect(audio).toBeDefined();
    expect(audio!.getAttribute("content")).toBe("audio")

    const url = container.querySelector('meta[property="og:url"]');
    expect(url).toBeDefined();
    expect(url!.getAttribute("content")).toBe("url")

    const locale = container.querySelector('meta[property="og:locale"]');
    expect(locale).toBeDefined();
    expect(locale!.getAttribute("content")).toBe("de_AT")

    const alt = container.querySelectorAll('meta[property="og:locale:alternative"]');
    expect(alt).toBeDefined();
    expect(alt.length).toBe(2);
    expect(alt[0]!.getAttribute("content")).toBe("en_US")
    expect(alt[1]!.getAttribute("content")).toBe("de_DE")

    const name = container.querySelector('meta[property="og:site_name"]');
    expect(name).toBeDefined();
    expect(name!.getAttribute("content")).toBe("City")
});