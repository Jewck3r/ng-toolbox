export interface NgSelectBox<Type> {
    items: NgSelectOption<Type>[];
    toString?: NgOptionToString<Type>;
    fallbackFirst?: boolean;
    defaultText?: string;
    name?: string;
}

export interface NgSelectOption<Type> {
    active?: boolean;
    image?: {
        path: string;
        valid?: boolean;
        loaded?: boolean;
    },
    width?: number;
    height?: number;
    value: string|number;
    item: Type;
}

interface NgOptionToString<Type> {
    (entry: NgSelectOption<Type>): string;
}
