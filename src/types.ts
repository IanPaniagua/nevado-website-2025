export interface ProductSpecification {
    description: string;
    unit?: string;
    range?: string;
    maximum?: string;
}

export interface ProductSpecifications {
    calcium_carbonate: {
        unit: string;
        range: string;
    };
    physical_specifications: ProductSpecification[];
}

export interface Product {
    name: string;
    description: string;
    image: string;
    packaging: string;
    application: string;
    specifications: ProductSpecifications;
}
