/**
 * Defines User resource from REST API
 */
export default class UserApi {

    /**
     * @param {Function} $resource function for rest api.
     * @returns {*} return object for request to api.
     */
    constructor($resource) {
        'ngInject';
        const url = `https://api.github.com/users`;

        return $resource(url + '/:id', {
            id: '@id'
        }, {
            query: {
                isArray: true
            }
        });
    }
}
