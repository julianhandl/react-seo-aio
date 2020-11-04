import React from "react";
import HeadOpenGraphAudio from "../opengraph/audio";
import HeadOpenGraphImage from "../opengraph/image";
import HeadOpenGraphVideo from "../opengraph/video";

interface HeadGroupMediaProps {
    image?: string | string[];
    video?: string;
    audio?: string;
}

/**
 * Returns all the recommended open graph meta tags
 * 
 * @param image - An image URL or array of image URLs which should represent your object within the graph.
 * @param video - A URL to a video file that complements this object.
 * @param audio - An audio URL which should represent your object within the graph.
 * @returns All the recommended open graph meta tags
 */
const HeadGroupMedia = (props: HeadGroupMediaProps) => {
    const {
        image,
        video,
        audio
    } = props;

    const headTags = [];

    if (image) {
        if (typeof image === "object") {
            image.forEach((img, i) => {
                headTags.push(<HeadOpenGraphImage content={img} key={`head-opengraph-image${i}`} />);
            })
        }
        else {
            headTags.push(<HeadOpenGraphImage content={image} key={`head-opengraph-image`} />);
        }
    }

    if (video) {
        headTags.push(<HeadOpenGraphVideo content={video} key={`head-opengraph-video`} />);
    }

    if (audio) {
        headTags.push(<HeadOpenGraphAudio content={audio} key={`head-opengraph-audio`} />);
    }

    return headTags;
}

export default HeadGroupMedia;