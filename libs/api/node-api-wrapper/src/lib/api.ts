import * as api from '@models';

export class Api {
    static request(): api.Request {
        return {
            field: 'hello',
            value: 'world',
        };
    }
}
