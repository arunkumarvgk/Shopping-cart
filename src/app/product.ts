export interface Product {
    brand: string,
    released: string,
    specification:{
        version: string,
        color: string,
        frontCamera: string,
        rearCamera: string,
        RAM: string,
        internalStorage: string,
        volte: boolean
    },
    cost: number,
    otherFeatures: Array<string>,
    imageUrl: string
}
