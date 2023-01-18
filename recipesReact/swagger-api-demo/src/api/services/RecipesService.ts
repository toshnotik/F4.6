/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recipe } from '../models/Recipe';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecipesService {

    /**
     * @returns Recipe 
     * @throws ApiError
     */
    public static recipesList(): CancelablePromise<Array<Recipe>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recipes',
        });
    }

}
