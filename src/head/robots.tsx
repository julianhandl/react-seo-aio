import React from "react";

interface RobotsProps {
    index: boolean;
    follow: boolean;
}

/**
 * Returns the robots meta-tag
 * 
 * @param index - Should the search engine crawler index the whole page?
 * @param follow - Should the search engine crawler follow all links on this page?
 * @returns The robots meta-tag
 */
const HeadRobots: React.FC<RobotsProps> = ({index, follow}) => {
    return <meta name="robots" content={`${!index ? "no" : ""}index,${!follow ? "no" : ""}follow`} />
}

export default HeadRobots;