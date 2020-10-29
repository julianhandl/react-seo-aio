import React from "react";

interface HeadOpenGraphSiteNameProps {
    content: string;
}

/**
 * Returns the og:site_name meta tag
 * 
 * @param content - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
 * @returns The og:locale meta tag
 */
const HeadOpenGraphSiteName: React.FC<HeadOpenGraphSiteNameProps> = ({content}) => {
    return <meta property="og:site_name" content={content} />
}

export default HeadOpenGraphSiteName;