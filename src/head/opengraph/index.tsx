import React from "react";
import HeadOpenGraphAudio from "./audio";
import HeadOpenGraphDescription from "./description";
import HeadOpenGraphImage from "./image";
import HeadOpenGraphLocale from "./locale";
import HeadOpenGraphLocaleAlternative from "./localeAlternative";
import HeadOpenGraphSiteName from "./siteName";
import HeadOpenGraphTitle from "./title";
import HeadOpenGraphType, { HeadOpenGraphTypes } from "./type";
import HeadOpenGraphUrl from "./url";
import HeadOpenGraphVideo from "./video";

interface HeadOpenGraphProps {
    title: string;
    description?: string;
    type: HeadOpenGraphTypes;
    image?: string | string[];
    video?: string;
    audio?: string;
    url?: string;
    locale?: string;
    localeAlternative?: string | string[];
    siteName?: string;
}

/**
 * Returns all the recommended open graph meta tags
 * 
 * @param title - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @param description - A one to two sentence description of your object.
 * @param type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. 
 * @param image - An image URL which should represent your object within the graph.
 * @param video - A URL to a video file that complements this object.
 * @param audio - A URL to an audio file to accompany this object.
 * @param url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/". 
 * @param locale - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
 * @param localeAlternative - An array of other locales this page is available in.
 * @param siteName - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
 * @returns All the recommended open graph meta tags
 */
const HeadOpenGraph = (props: HeadOpenGraphProps) => {
    const {
        title,
        description,
        type,
        image,
        video,
        audio,
        url,
        locale,
        localeAlternative,
        siteName
    } = props;

    const openGraphTags = [
        <HeadOpenGraphTitle content={title} key={`head-opengraph-title`} />
    ];

    if (description) {
        openGraphTags.push(<HeadOpenGraphDescription content={description} key={`head-opengraph-description`} />);
    }

    if (type) {
        openGraphTags.push(<HeadOpenGraphType type={type} key={`head-opengraph-type`} />);
    }

    if (image) {
        if (typeof image === "object") {
            image.forEach((img, i) => {
                openGraphTags.push(<HeadOpenGraphImage content={img} key={`head-opengraph-image-${i}`} />);
            });
        }
        else {
            openGraphTags.push(<HeadOpenGraphImage content={image} key={`head-opengraph-image`} />);
        }
    }

    if (video) {
        openGraphTags.push(<HeadOpenGraphVideo content={video} key={`head-opengraph-video`} />);
    }

    if (audio) {
        openGraphTags.push(<HeadOpenGraphAudio content={audio} key={`head-opengraph-audio`} />);
    }

    if (url) {
        openGraphTags.push(<HeadOpenGraphUrl content={url} key={`head-opengraph-url`} />);
    }

    if (locale) {
        openGraphTags.push(<HeadOpenGraphLocale content={locale} key={`head-opengraph-locale`} />);
    }

    if (localeAlternative) {
        if (typeof localeAlternative === "object") {
            localeAlternative.forEach((loc, i) => {
                openGraphTags.push(<HeadOpenGraphLocaleAlternative content={loc} key={`head-opengraph-locale-alternative-${i}`} />);
            });
        }
        else {
            openGraphTags.push(<HeadOpenGraphLocaleAlternative content={localeAlternative} key={`head-opengraph-locale-alternative`} />);
        }
    }

    if (siteName) {
        openGraphTags.push(<HeadOpenGraphSiteName content={siteName} key={`head-opengraph-site-name`} />)
    }

    return openGraphTags;
}

export default HeadOpenGraph;