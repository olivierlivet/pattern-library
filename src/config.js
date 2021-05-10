export const config = {
    "apiUrl" : process.env.GATSBY_API_URL,
    "stripePublicKey": process.env.STRIPE_PUBLIC_KEY,
    "imageBaseUrl": process.env.IMAGE_BASE_URL,
    "imageCdnBaseUrl": process.env.GATSBY_IMAGE_CDN_BASE_URL,

    "contentful":{
        "spaceId": process.env.CONTENTFUL_SPACE_ID,
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN
    },

    "siteUrl": process.env.GATSBY_SITE_URL,
    "titleSuffix": ' ~ ThePatternsCorner'

}