/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Author } from '../models/Author';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorsService {

    /**
     * @returns Author 
     * @throws ApiError
     */
    public static authorsList(): CancelablePromise<Array<Author>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authors',
        });
    }

}
