import React from "react";
import ReactDOM from "react-dom";
import generateGroupMedia from "./media";

test('it should render the media head group', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateGroupMedia({
        image: "http://image",
        video: "http://video",
        audio: "http://audio"
    }), container);

    const ogimage = container.querySelector('meta[property="og:image"]');
    expect(ogimage).toBeDefined();
    expect(ogimage.getAttribute("content")).toBe("http://image");

    const ogvideo = container.querySelector('meta[property="og:video"]');
    expect(ogvideo).toBeDefined();
    expect(ogvideo.getAttribute("content")).toBe("http://video");

    const ogaudio = container.querySelector('meta[property="og:audio"]');
    expect(ogaudio).toBeDefined();
    expect(ogaudio.getAttribute("content")).toBe("http://audio");
});

test('it should render the media head group with an image array', () => {
    let container = document.createElement("div");
    ReactDOM.render(generateGroupMedia({
        image: ["http://image1", "http://image2"]
    }), container);

    const ogimages = container.querySelectorAll('meta[property="og:image"]');
    expect(ogimages.length).toBe(2);
    ogimages.forEach((img, i) => {
        expect(img.getAttribute("content")).toBe(`http://image${i+1}`);
    })
});