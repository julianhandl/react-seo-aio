import React from "react";
import MetaOpenGraphArticle, { MetaOpenGraphArticeProps } from "./article";
import MetaOpenGraphImage from "./image";
import MetaOpenGraphTitle from "./title";
import { MetaOpenGraphType } from "./type";
import MetaOpenGraphUrl from "./url";

interface MetaOpenGraphProps {
    title: string;
    type?: MetaOpenGraphType;
    typeOptions?: MetaOpenGraphArticeProps;
    image?: string | string[];
    url?: string;
}

/**
 * Returns the open graph meta tags
 * 
 * @param title - The title of your object as it should appear within the graph, e.g., "The Rock".
 * @param type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. 
 * @param typeOptions - Extended data to your choosen type
 * @param image - An image URL which should represent your object within the graph. 
 * @param url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/". 
 * @returns The open graph meta tags
 */
const MetaOpenGraph: React.FC<MetaOpenGraphProps> = ({
    title,
    type,
    typeOptions,
    image,
    url
}) => {
    const openGraphTags = [
        <MetaOpenGraphTitle content={title} />
    ];

    if (type === "article" && typeOptions) {
        const options = typeOptions as MetaOpenGraphArticeProps;
        openGraphTags.push(<MetaOpenGraphArticle {...options} />);
    }

    if (image) {
        if (typeof image === "object") {
            image.forEach(url => {
                openGraphTags.push(<MetaOpenGraphImage content={url} />);
            });
        }
        else {
            openGraphTags.push(<MetaOpenGraphImage content={image} />);
        }
    }

    if(url) {
        openGraphTags.push(<MetaOpenGraphUrl content={url} />)
    }

    return <React.Fragment>{openGraphTags}</React.Fragment>
}

export default MetaOpenGraph;