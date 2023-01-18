/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Recipe = {
    readonly id?: number;
    title: string;
    category: number;
    readonly category_title?: string;
    authors: Array<number>;
    authors_names: Array<string>;
    text: string;
};
