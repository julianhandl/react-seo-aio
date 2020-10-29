import React from "react";

interface CanonicalProps {
    href: string;
}

/**
 * Returns the canonical link-tag
 * 
 * @param href - The full link to the current page.
 * @returns The canonical link-tag
 */
const Canonical: React.FC<CanonicalProps> = ({href}) => {
    return <link rel="canonical" href={href} />
}

export default Canonical;