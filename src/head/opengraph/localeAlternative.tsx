import React from "react";

interface HeadOpenGraphLocaleAlternativeProps {
    content: string;
}

/**
 * Returns the og:locale:alternative meta tag
 * 
 * @param content - An alternative locale this content is available in.
 * @returns The og:locale:alternative meta tag
 */
const HeadOpenGraphLocaleAlternative: React.FC<HeadOpenGraphLocaleAlternativeProps> = ({content}) => {
    return <meta property="og:locale:alternative" content={content} />
}

export default HeadOpenGraphLocaleAlternative;