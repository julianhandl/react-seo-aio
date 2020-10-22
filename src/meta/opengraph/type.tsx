import React from "react";

export type MetaOpenGraphType =
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

interface MetaOpenGraphTypeProps {
    type: MetaOpenGraphType;
}

/**
 * Returns a basic version of the og:type meta tag
 * 
 * @param type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
 * @returns The og:type meta tag
 */
const MetaOpenGraphType: React.FC<MetaOpenGraphTypeProps> = ({type}) => {
    return <meta property="og:type" content={type} />
}

export default MetaOpenGraphType;