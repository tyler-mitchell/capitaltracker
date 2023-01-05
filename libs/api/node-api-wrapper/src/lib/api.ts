import * as models from '@models';
import { log } from '@utils';

class Api {
    static request(): models.Request {
        const req = {
            field: 'hello',
            value: 'world',
        };
        log(req);
        return req;
    }
}

export default Api;
