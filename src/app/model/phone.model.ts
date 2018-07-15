export class Phone{
    brand: string;
    released: number;
    cost: number;
    specification:Specification;
    otherFeatures: Array<string>;
    imageUrl:string;
}

export class Specification{
    version: string;
    color: string;
    frontCamera: string;
    rearCamera: string;
    RAM: string;
    internalStorage: string;
    volte: boolean
};