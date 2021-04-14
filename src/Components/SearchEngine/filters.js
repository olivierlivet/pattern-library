class Filters {
    getCategoryFilter(filter) {
        if (filter && filter.category) {
            return { "fields.category.sys.id": filter.category }
        } else {
            return null
        }
    }

    getVariantFilter(filter) {
        console.log( filter )
        // if()
        return { "fields.variant.sys.id": filter.variant }
    }

    getCategoryOptions() {
        return [
            {
                label: "Jupes",
                categoryId: "3v7MEyPWB0d1FOYFa9odJV"
            },
            {
                label: "Haut",
                categoryId: "2aMnwR8nnDdeb0PNj2SBe9"
            }
        ]
    }

    getVariantOptions(category) {
        // console.log('GetVariant', category)
        if (!category) { return [] }
        let variants = {
            "3v7MEyPWB0d1FOYFa9odJV":
            { //Jupes
                variants: [
                    {
                        label: "Jupes portefeuille",
                        variantId: "waSVoIc1cs7qABRRljElE"
                    },
                    {
                        label: "Mini Jupes",
                        variantId: "4S7lzl32ykLdyHfqyHt1EE"
                    },
                    {
                        label: "Jupe Crayon",
                        variantId: "2VOXJmPVYxth01i6e06756"
                    }

                ]
            },
            "2aMnwR8nnDdeb0PNj2SBe9":
            { //Hauts
                variants:
                    [
                        {
                            label: "Blouse",
                            variantId: "6h6ithq6Cb9sbReCnOTQsJ"
                        },
                        {
                            label: "Chemisier",
                            variantId: "5peiZ3U4FSpqktzYLs5TH5"
                        },
                        {
                            label: "Cardigan",
                            variantId: "5HUn7mYNRLbVteBccLDBmH"
                        },
                        {
                            label: "Pull",
                            variantId: "754hjOTajCAP1UXlpNlOr2"
                        },
                        {
                            label: "T-Shirt",
                            variantId: "5q2USc2cWZyt9zgKiDqQS"
                        },
                    ]
            }
        }
        // console.log(variants[category].variants)
        return variants[category].variants
    }

}


export default new Filters()