import React from "react";

export type OpenGraphTypes =
    "article" |
    "book" |
    "profile" |
    "website" |
    "music.song" |
    "music.album" |
    "music.playlist" |
    "music.radio_station" |
    "video.movie" |
    "video.episode" |
    "video.tv_show" |
    "video.other";

/**
 * Returns a basic version of the og:type meta tag
 * 
 * @param type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
 * @returns The og:type meta tag
 */
function generateOpenGraphType(type: OpenGraphTypes) {
    return <meta property="og:type" content={type} />
}

export default generateOpenGraphType;