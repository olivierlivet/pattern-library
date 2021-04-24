const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getUnivers = () => {
    let universQuery = {
        content_type: "univers",
    }
    return (
        client
            .getEntries(universQuery)
            .catch(console.error)
    )
}

export default getUnivers