import * as models from '@models';

export class Api {
    static request(): models.Request {
        return {
            field: 'hello',
            value: 'world',
        };
    }
}
