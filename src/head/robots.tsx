import React from "react";

interface RobotsData {
    index: boolean;
    follow: boolean;
}

/**
 * Returns the robots meta-tag
 * 
 * @param data - Should the page be indexed and followed?
 * @returns The robots meta-tag
 */
function generateRobots(data?: RobotsData) {
    if (data) {
        const { index, follow } = data;
        return <meta name="robots" content={`${!index ? "no" : ""}index,${!follow ? "no" : ""}follow`} />
    }
    else {
        return <meta name="robots" content="index,follow" />
    }
}

export default generateRobots;