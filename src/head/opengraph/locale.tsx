import React from "react";

interface HeadOpenGraphLocaleProps {
    content: string;
}

/**
 * Returns the og:locale meta tag
 * 
 * @param content - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
 * @returns The og:locale meta tag
 */
const HeadOpenGraphLocale: React.FC<HeadOpenGraphLocaleProps> = ({content}) => {
    return <meta property="og:locale" content={content} />
}

export default HeadOpenGraphLocale;