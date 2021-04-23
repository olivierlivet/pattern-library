const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getCategories = ( universId ) => {
    let universQuery = {
        content_type: "category",
        "fields.univers.sys.id": universId
    }
    return (
        client
            .getEntries(universQuery)
            .catch(console.error)
    )
}

export default getCategories