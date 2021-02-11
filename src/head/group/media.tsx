import React from "react";
import generateOpenGraphAudio from "../opengraph/audio";
import generateOpenGraphImage from "../opengraph/image";
import generateOpenGraphVideo from "../opengraph/video";

interface GroupMediaProps {
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
function generateGroupMedia(props: GroupMediaProps) {
    const {
        image,
        video,
        audio
    } = props;

    const headTags = [];

    if (image) {
        if (typeof image === "object") {
            image.forEach((img, i) => {
                headTags.push(generateOpenGraphImage(img));
            })
        }
        else {
            headTags.push(generateOpenGraphImage(image));
        }
    }

    if (video) {
        headTags.push(generateOpenGraphVideo(video));
    }

    if (audio) {
        headTags.push(generateOpenGraphAudio(audio));
    }

    return headTags;
}

export default generateGroupMedia;