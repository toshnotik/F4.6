/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * @returns Category 
     * @throws ApiError
     */
    public static categoryList(): CancelablePromise<Array<Category>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category',
        });
    }

}
