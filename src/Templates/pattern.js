import React from 'react'
import { graphql } from 'gatsby'

const PatternTemplate = ( props ) => {
    return(
        <div>
            A pattern
            <pre>
                { JSON.stringify( props, null, 1 )}
            </pre>
        </div>
    )
}

export default PatternTemplate

export const pageQuery = graphql`
query adQuery( $contentfulID: String!, $locale: String! ){
    pattern:contentfulPattern(contentful_id: {eq: $contentfulID}) {
        name
      }
    
}
`