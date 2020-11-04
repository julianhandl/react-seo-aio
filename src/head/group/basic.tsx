import React from "react";
import { HeadTitle } from "../..";
import HeadCanonical from "../canonical";
import HeadDescription from "../description";
import HeadOpenGraphDescription from "../opengraph/description";
import HeadOpenGraphLocale from "../opengraph/locale";
import HeadOpenGraphLocaleAlternative from "../opengraph/localeAlternative";
import HeadOpenGraphSiteName from "../opengraph/siteName";
import HeadOpenGraphTitle from "../opengraph/title";
import HeadOpenGraphType, { HeadOpenGraphTypes } from "../opengraph/type";
import HeadOpenGraphUrl from "../opengraph/url";
import HeadRobots from "../robots";

interface HeadGroupBasicProps {
    title: string;
    description: string;
    url: string;
    locale: string;
    type?: HeadOpenGraphTypes;
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
const HeadGroupBasic = (props: HeadGroupBasicProps) => {
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

    const headTags: JSX.Element[] = [
        <HeadTitle content={title} key={`head-title`} />,
        <HeadOpenGraphTitle content={title} key={`head-opengraph-title`} />,
        <HeadDescription content={description} key={`head-description`} />,
        <HeadOpenGraphDescription content={description} key={`head-opengraph-description`} />,
        <HeadCanonical href={url} key={`head-canonical`} />,
        <HeadOpenGraphUrl content={url} key={`head-opengraph-url`} />,
        <HeadOpenGraphLocale content={locale} key={`head-opengraph-locale`} />
    ];

    if (type) {
        headTags.push(<HeadOpenGraphType type={type} key={`head-opengraph-type`} />);
    }

    if (localeAlternative) {
        if (typeof localeAlternative === "object") {
            localeAlternative.forEach((loc, i) => {
                headTags.push(<HeadOpenGraphLocaleAlternative content={loc} key={`head-opengraph-locale-alternative-${i}`} />);
            });
        }
        else {
            headTags.push(<HeadOpenGraphLocaleAlternative content={localeAlternative} key={`head-opengraph-locale-alternative`} />);
        }
    }

    if (siteName) {
        headTags.push(<HeadOpenGraphSiteName content={siteName} key={`head-opengraph-site-name`} />)
    }

    if (robots) {
        headTags.push(<HeadRobots index={robots.index} follow={robots.follow} key={`head-robots`} />);
    }
    else {
        headTags.push(<HeadRobots index={true} follow={true} key={`head-robots`} />);
    }

    return headTags;
}

export default HeadGroupBasic;