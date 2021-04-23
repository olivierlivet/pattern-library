const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getVariants = ( categoryId ) => {
    let universQuery = {
        content_type: "variant",
        "fields.category.sys.id": categoryId
    }
    return (
        client
            .getEntries(universQuery)
            .catch(console.error)
    )
}

export default getVariants