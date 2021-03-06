import React from 'react'
import { Icon, createIcon } from "@chakra-ui/react"

export const HeartIconFull = createIcon({
    displayName: "HeartFull",
    viewBox: "0 0 100 100",
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
      <path
        d="M92.2648 13.8101C102.578 24.1904 102.578 41.0801 92.2648 51.4604L50 94L7.73515 51.4604C-2.57838 41.0801 -2.57838 24.1904 7.73515 13.8101C12.7387 8.77347 19.3928 6 26.47 6C33.5492 6 40.2033 8.77347 45.2069 13.8101L50 18.6331L54.7931 13.8101C59.7967 8.77347 66.4529 6 73.53 6H73.5321C80.6092 6 87.2633 8.77347 92.2648 13.8101Z"
        fill="currentcolor"
      />
    ),
  })
export default HeartIconFull