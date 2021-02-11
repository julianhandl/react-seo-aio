import React from "react";
import generateTitle from "../title";
import generateCanonical from "../canonical";
import generateDescription from "../description";
import generateOpenGraphDescription from "../opengraph/description";
import generateOpenGraphLocale from "../opengraph/locale";
import generateOpenGraphLocaleAlternative from "../opengraph/localeAlternative";
import generateOpenGraphSiteName from "../opengraph/siteName";
import generateOpenGraphTitle from "../opengraph/title";
import generateOpenGraphType, { OpenGraphTypes } from "../opengraph/type";
import generateOpenGraphUrl from "../opengraph/url";
import generateRobots from "../robots";

interface GroupBasicProps {
    title: string;
    description: string;
    url: string;
    locale: string;
    type?: OpenGraphTypes;
    localeAlternative?: string | string[];
    siteName?: string;
    robots?: {
        index: boolean;
        follow: boolean;
    }
}

/**
 * Returns all the recommended open graph meta tags
 * 
 * @param title - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @param description - A one to two sentence description of your object.
 * @param type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. 
 * @param url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/". 
 * @param locale - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
 * @param localeAlternative - An array of other locales this page is available in.
 * @param siteName - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
 * @returns All the recommended open graph meta tags
 */
function generateGroupBasic(props: GroupBasicProps) {
    const {
        title,
        description,
        type,
        url,
        locale,
        localeAlternative,
        siteName,
        robots
    } = props;

    const headTags = [
        generateTitle(title),
        generateOpenGraphTitle(title),
        generateDescription(description),
        generateOpenGraphDescription(description),
        generateCanonical(url),
        generateOpenGraphUrl(url),
        generateOpenGraphLocale(locale)
    ];

    if (type) {
        headTags.push(generateOpenGraphType(type));
    }

    if (localeAlternative) {
        if (typeof localeAlternative === "object") {
            localeAlternative.forEach((loc, i) => {
                headTags.push(generateOpenGraphLocaleAlternative(loc));
            });
        }
        else {
            headTags.push(generateOpenGraphLocaleAlternative(localeAlternative));
        }
    }

    if (siteName) {
        headTags.push(generateOpenGraphSiteName(siteName));
    }

    if (robots) {
        headTags.push(generateRobots(robots));
    }
    else {
        headTags.push(generateRobots());
    }

    return headTags;
}

export default generateGroupBasic;