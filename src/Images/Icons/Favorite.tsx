import React from 'react'
import { Icon, createIcon } from "@chakra-ui/react"

export const HeartIcon = createIcon({
    displayName: "UpDownIcon",
    viewBox: "0 0 100 100",
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
<path d="M92.2648 51.4604C102.578 41.0801 102.578 24.1904 92.2648 13.8101C87.2633 8.77347 80.6092 6 73.5321 6C73.53 6 73.53 6 73.53 6C66.4529 6 59.7967 8.77347 54.7931 13.8101L50 18.6331L45.2069 13.8101C40.2033 8.77347 33.5492 6 26.47 6C19.3928 6 12.7387 8.77347 7.73515 13.8101C-2.57838 24.1904 -2.57838 41.0801 7.73515 51.4604L50 94L92.2648 51.4604ZM10.6985 16.7267C14.9123 12.4846 20.5161 10.1488 26.47 10.1488C32.4259 10.1488 38.0297 12.4846 42.2435 16.7267L50 24.5347L57.7565 16.7267C61.9703 12.4846 67.5741 10.1488 73.53 10.1488C79.486 10.1488 85.0877 12.4846 89.3015 16.7267C98.0187 25.4993 98.0187 39.7712 89.3015 48.5438L50 88.1004L10.6985 48.5438C1.98133 39.7712 1.98133 25.4972 10.6985 16.7267Z" fill="currentcolor"/>
    ),
  })

// const HeartIcon = (props) => (
//     <Icon viewBox="0 0 200 200" {...props}>
//         <path d="M44.281 21.915C49.23 16.911 49.23 8.769 44.281 3.765C41.881 1.337 38.688 0 35.292 0C35.291 0 35.291 0 35.291 0C31.895 0 28.701 1.337 26.3 3.765L24 6.09L21.7 3.765C19.299 1.337 16.106 0 12.709 0C9.31301 0 6.12001 1.337 3.71901 3.765C-1.22999 8.769 -1.22999 16.911 3.71901 21.915L24 42.422L44.281 21.915ZM5.14101 5.171C7.16301 3.126 9.85201 2 12.709 2C15.567 2 18.256 3.126 20.278 5.171L24 8.935L27.722 5.171C29.744 3.126 32.433 2 35.291 2C38.149 2 40.837 3.126 42.859 5.171C47.042 9.4 47.042 16.28 42.859 20.509L24 39.578L5.14101 20.509C0.958013 16.28 0.958013 9.399 5.14101 5.171Z" fill="black" />
//     </Icon>
// )
export default HeartIcon