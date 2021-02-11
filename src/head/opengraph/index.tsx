import React from "react";
import generateOpenGraphAudio from "./audio";
import generateOpenGraphDescription from "./description";
import generateOpenGraphImage from "./image";
import generateOpenGraphLocale from "./locale";
import generateOpenGraphLocaleAlternative from "./localeAlternative";
import generateOpenGraphSiteName from "./siteName";
import generateOpenGraphTitle from "./title";
import generateOpenGraphType, { OpenGraphTypes } from "./type";
import generateOpenGraphUrl from "./url";
import generateOpenGraphVideo from "./video";

interface OpenGraphData {
    title: string;
    description?: string;
    type: OpenGraphTypes;
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
const HeadOpenGraph = (props: OpenGraphData) => {
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
        generateOpenGraphTitle(title)
    ];

    if (description) {
        openGraphTags.push(generateOpenGraphDescription(description));
    }

    if (type) {
        openGraphTags.push(generateOpenGraphType(type));
    }

    if (image) {
        if (typeof image === "object") {
            image.forEach((img, i) => {
                openGraphTags.push(generateOpenGraphImage(img));
            });
        }
        else {
            openGraphTags.push(generateOpenGraphImage(image));
        }
    }

    if (video) {
        openGraphTags.push(generateOpenGraphVideo(video));
    }

    if (audio) {
        openGraphTags.push(generateOpenGraphAudio(audio));
    }

    if (url) {
        openGraphTags.push(generateOpenGraphUrl(url));
    }

    if (locale) {
        openGraphTags.push(generateOpenGraphLocale(locale));
    }

    if (localeAlternative) {
        if (typeof localeAlternative === "object") {
            localeAlternative.forEach((loc, i) => {
                openGraphTags.push(generateOpenGraphLocaleAlternative(loc));
            });
        }
        else {
            openGraphTags.push(generateOpenGraphLocaleAlternative(localeAlternative));
        }
    }

    if (siteName) {
        openGraphTags.push(generateOpenGraphSiteName(siteName))
    }

    return openGraphTags;
}

export default HeadOpenGraph;