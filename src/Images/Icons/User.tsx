import React from 'react'
import { Icon, createIcon } from "@chakra-ui/react"

export const UserIcon = createIcon({
    displayName: "UpDownIcon",
    viewBox: "0 0 100 100",
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
      <path fillRule="evenodd" clipRule="evenodd" d="M63.4111 19.4715C63.4111 27.2726 57.087 33.5967 49.2859 33.5967C41.4847 33.5967 35.1606 27.2726 35.1606 19.4715C35.1606 11.6703 41.4847 5.34623 49.2859 5.34623C57.087 5.34623 63.4111 11.6703 63.4111 19.4715ZM67.7573 19.4715C67.7573 29.673 59.4874 37.943 49.2859 37.943C39.0843 37.943 30.8144 29.673 30.8144 19.4715C30.8144 9.26996 39.0843 1 49.2859 1C59.4874 1 67.7573 9.26996 67.7573 19.4715ZM60.5449 43.3757H36.8645L18 98.7902H82.357L60.5449 43.3757ZM24.0707 94.4439L39.9761 47.722H57.5849L75.9754 94.4439H24.0707Z" fill="currentcolor"/>
    ),
  })

export default UserIcon