import React from "react";

const size = {
    tabletS: '820px',
    smartphone: '590px'
}

export const device = {
    tabletS:  `(max-width: ${size.tabletS})`,
    smartphone: `(max-width: ${size.smartphone})`
}